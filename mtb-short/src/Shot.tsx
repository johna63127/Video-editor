import { Video } from "@remotion/media";
import React from "react";
import {
  AbsoluteFill,
  Easing,
  interpolate,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

type ShotProps = {
  /** File in public/clips */
  readonly src: string;
  /** Horizontal focus (object-position %) at the start and end of the shot, so the 9:16 crop follows the rider. */
  readonly focusFrom: number;
  readonly focusTo: number;
  /** Frames to skip at the start of the source clip */
  readonly trimBefore: number;
};

/**
 * One landscape stock clip cropped to 9:16, with a quick zoom "punch" on the
 * cut and a punchy grade. Timing lives on the parent <Sequence>.
 */
export const Shot: React.FC<ShotProps> = ({ src, focusFrom, focusTo, trimBefore }) => {
  const frame = useCurrentFrame();
  const { durationInFrames, width, height } = useVideoConfig();
  const srcWidth = (height * 16) / 9;

  const focus = interpolate(frame, [0, durationInFrames], [focusFrom, focusTo], {
    extrapolateRight: "clamp",
  });
  const punch = interpolate(frame, [0, 6], [1.14, 1.04], {
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  const drift = interpolate(frame, [6, durationInFrames], [0, 0.03], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ backgroundColor: "black", overflow: "hidden" }}>
      {/* Landscape source scaled to full height; slide it so the rider stays in the 9:16 window */}
      <div
        style={{
          position: "absolute",
          top: 0,
          height,
          width: srcWidth,
          left: -(srcWidth - width) * (focus / 100),
          scale: String(punch + drift),
          filter: "contrast(1.12) saturate(1.25) brightness(1.04)",
        }}
      >
        <Video
          src={staticFile(`clips/${src}`)}
          muted
          trimBefore={trimBefore}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      {/* Soft vignette so white captions always read */}
      <AbsoluteFill
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(0,0,0,0) 55%, rgba(0,0,0,0.45) 100%)",
        }}
      />
    </AbsoluteFill>
  );
};
