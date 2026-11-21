import "@fontsource/montserrat/900.css";
import React from "react";
import {
  AbsoluteFill,
  Easing,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

export type Word = {
  readonly text: string;
  readonly startMs: number;
  readonly endMs: number;
  /** Keyword: drawn in the accent color */
  readonly highlight: boolean;
};

type Props = {
  readonly words: Word[];
  readonly accentColor: string;
  /** Vertical position of the word, % from the top */
  readonly top: number;
};

/** One big word at a time, centered, popping in on its timestamp. */
export const WordCaptions: React.FC<Props> = ({ words, accentColor, top }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const ms = (frame / fps) * 1000;

  const word = words.find((w) => ms >= w.startMs && ms < w.endMs);
  if (!word) return null;

  const local = frame - Math.round((word.startMs / 1000) * fps);
  const scale = interpolate(local, [0, 3, 6], [0.7, 1.12, 1], {
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.quad),
  });

  return (
    <AbsoluteFill
      style={{
        top: `${top}%`,
        height: "auto",
        alignItems: "center",
        padding: "0 80px",
      }}
    >
      <div
        style={{
          fontFamily: "Montserrat",
          fontWeight: 900,
          fontSize: word.text.length > 8 ? 112 : 132,
          letterSpacing: 1,
          lineHeight: 1,
          color: word.highlight ? accentColor : "white",
          WebkitTextStroke: "10px black",
          paintOrder: "stroke fill",
          textShadow: "0 8px 18px rgba(0,0,0,0.55)",
          scale: String(scale),
          translate: "0 -50%",
          whiteSpace: "nowrap",
        }}
      >
        {word.text}
      </div>
    </AbsoluteFill>
  );
};
