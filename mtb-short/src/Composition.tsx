import React from "react";
import { Audio } from "@remotion/media";
import {
  AbsoluteFill,
  Composition,
  interpolate,
  Sequence,
  staticFile,
  useVideoConfig,
} from "remotion";
import { Shot } from "./Shot";
import { WordCaptions } from "./WordCaptions";

type Props = {
  readonly accentColor: string;
  readonly musicVolume: number;
};

export const MtbTip: React.FC<Props> = ({ accentColor, musicVolume }) => {
  const { durationInFrames, fps } = useVideoConfig();
  return (
    <AbsoluteFill style={{ backgroundColor: "black" }}>
      {/* Footage track: one Sequence per cut */}
      <AbsoluteFill>
        <Sequence name="Stop staring at your front wheel" from={0} durationInFrames={52}>
          <Shot src="40887.mp4" trimBefore={30} focusFrom={30} focusTo={35} />
        </Sequence>
        <Sequence name="Bike goes where your eyes go" from={52} durationInFrames={60}>
          <Shot src="44340.mp4" trimBefore={0} focusFrom={68} focusTo={87} />
        </Sequence>
        <Sequence name="Look ten feet ahead" from={112} durationInFrames={42}>
          <Shot src="46247.mp4" trimBefore={0} focusFrom={87} focusTo={72} />
        </Sequence>
        <Sequence name="Not at the rock" from={154} durationInFrames={51}>
          <Shot src="40893.mp4" trimBefore={120} focusFrom={35} focusTo={35} />
        </Sequence>
        <Sequence name="Drop your heels" from={205} durationInFrames={32}>
          <Shot src="40891.mp4" trimBefore={126} focusFrom={90} focusTo={85} />
        </Sequence>
        <Sequence name="Bend your elbows" from={237} durationInFrames={32}>
          <Shot src="44323.mp4" trimBefore={15} focusFrom={60} focusTo={58} />
        </Sequence>
        <Sequence name="Let the bike move under you" from={269} durationInFrames={54}>
          <Shot src="44332.mp4" trimBefore={66} focusFrom={15} focusTo={5} />
        </Sequence>
        <Sequence name="Brake before the corner" from={323} durationInFrames={41}>
          <Shot src="44629.mp4" trimBefore={60} focusFrom={40} focusTo={30} />
        </Sequence>
        <Sequence name="Not in it" from={364} durationInFrames={28}>
          <Shot src="44319.mp4" trimBefore={138} focusFrom={88} focusTo={92} />
        </Sequence>
        <Sequence name="Look through the exit and pump" from={392} durationInFrames={71}>
          <Shot src="44333.mp4" trimBefore={15} focusFrom={30} focusTo={70} />
        </Sequence>
        <Sequence name="Try this on your next ride" from={463} durationInFrames={40}>
          <Shot src="44324.mp4" trimBefore={90} focusFrom={40} focusTo={45} />
        </Sequence>
        <Sequence name="Feel the difference" from={503} durationInFrames={69}>
          <Shot src="44322.mp4" trimBefore={390} focusFrom={50} focusTo={50} />
        </Sequence>
        <Sequence name="Follow for more" from={572} durationInFrames={56}>
          <Shot src="48515.mp4" trimBefore={0} focusFrom={68} focusTo={45} />
        </Sequence>
      </AbsoluteFill>

      <WordCaptions
        accentColor={accentColor}
        top={46}
        words={[
          {text: "STOP", startMs: 0, endMs: 220, highlight: true},
          {text: "STARING", startMs: 220, endMs: 560, highlight: false},
          {text: "AT", startMs: 560, endMs: 720, highlight: false},
          {text: "YOUR", startMs: 720, endMs: 820, highlight: false},
          {text: "FRONT", startMs: 820, endMs: 1000, highlight: false},
          {text: "WHEEL", startMs: 1000, endMs: 1720, highlight: true},
          {text: "YOUR", startMs: 1840, endMs: 1900, highlight: false},
          {text: "BIKE", startMs: 1900, endMs: 2140, highlight: false},
          {text: "GOES", startMs: 2140, endMs: 2420, highlight: false},
          {text: "WHEREVER", startMs: 2420, endMs: 2640, highlight: false},
          {text: "YOUR", startMs: 2640, endMs: 2840, highlight: false},
          {text: "EYES", startMs: 2840, endMs: 3060, highlight: true},
          {text: "GO", startMs: 3060, endMs: 3820, highlight: false},
          {text: "SO", startMs: 3820, endMs: 3980, highlight: false},
          {text: "LOOK", startMs: 3980, endMs: 4120, highlight: false},
          {text: "TEN", startMs: 4120, endMs: 4360, highlight: false},
          {text: "FEET", startMs: 4360, endMs: 4560, highlight: false},
          {text: "AHEAD", startMs: 4560, endMs: 5240, highlight: true},
          {text: "NOT", startMs: 5240, endMs: 5400, highlight: false},
          {text: "AT", startMs: 5400, endMs: 5520, highlight: false},
          {text: "THE", startMs: 5520, endMs: 5600, highlight: false},
          {text: "ROCK", startMs: 5600, endMs: 5800, highlight: true},
          {text: "YOU'RE", startMs: 5800, endMs: 6020, highlight: false},
          {text: "SCARED", startMs: 6020, endMs: 6200, highlight: false},
          {text: "OF", startMs: 6200, endMs: 6900, highlight: false},
          {text: "DROP", startMs: 6920, endMs: 7120, highlight: false},
          {text: "YOUR", startMs: 7120, endMs: 7280, highlight: false},
          {text: "HEELS", startMs: 7280, endMs: 8000, highlight: true},
          {text: "BEND", startMs: 8000, endMs: 8160, highlight: false},
          {text: "YOUR", startMs: 8160, endMs: 8300, highlight: false},
          {text: "ELBOWS", startMs: 8300, endMs: 9040, highlight: true},
          {text: "AND", startMs: 9080, endMs: 9220, highlight: false},
          {text: "LET", startMs: 9220, endMs: 9320, highlight: false},
          {text: "THE", startMs: 9320, endMs: 9440, highlight: false},
          {text: "BIKE", startMs: 9440, endMs: 9660, highlight: false},
          {text: "MOVE", startMs: 9660, endMs: 9880, highlight: false},
          {text: "UNDER", startMs: 9880, endMs: 10160, highlight: false},
          {text: "YOU", startMs: 10160, endMs: 10860, highlight: false},
          {text: "BRAKE", startMs: 10860, endMs: 11100, highlight: true},
          {text: "BEFORE", startMs: 11100, endMs: 11280, highlight: true},
          {text: "THE", startMs: 11280, endMs: 11460, highlight: false},
          {text: "CORNER", startMs: 11460, endMs: 12140, highlight: false},
          {text: "NOT", startMs: 12220, endMs: 12340, highlight: false},
          {text: "IN", startMs: 12340, endMs: 12520, highlight: false},
          {text: "IT", startMs: 12520, endMs: 13180, highlight: false},
          {text: "THEN", startMs: 13180, endMs: 13320, highlight: false},
          {text: "LOOK", startMs: 13320, endMs: 13480, highlight: false},
          {text: "THROUGH", startMs: 13480, endMs: 13700, highlight: false},
          {text: "THE", startMs: 13700, endMs: 13840, highlight: false},
          {text: "EXIT", startMs: 13840, endMs: 14140, highlight: true},
          {text: "AND", startMs: 14140, endMs: 14400, highlight: false},
          {text: "PUMP", startMs: 14400, endMs: 14600, highlight: true},
          {text: "OUT", startMs: 14600, endMs: 14800, highlight: false},
          {text: "OF", startMs: 14800, endMs: 14920, highlight: false},
          {text: "IT", startMs: 14920, endMs: 15540, highlight: false},
          {text: "TRY", startMs: 15540, endMs: 15720, highlight: false},
          {text: "THIS", startMs: 15720, endMs: 15940, highlight: false},
          {text: "ON", startMs: 15940, endMs: 16160, highlight: false},
          {text: "YOUR", startMs: 16160, endMs: 16280, highlight: false},
          {text: "NEXT", startMs: 16280, endMs: 16500, highlight: false},
          {text: "RIDE", startMs: 16500, endMs: 16860, highlight: false},
          {text: "AND", startMs: 16860, endMs: 17180, highlight: false},
          {text: "YOU'LL", startMs: 17180, endMs: 17360, highlight: false},
          {text: "FEEL", startMs: 17360, endMs: 17520, highlight: false},
          {text: "THE", startMs: 17520, endMs: 17720, highlight: false},
          {text: "DIFFERENCE", startMs: 17720, endMs: 18040, highlight: true},
          {text: "INSTANTLY", startMs: 18040, endMs: 19000, highlight: false},
          {text: "FOLLOW", startMs: 19180, endMs: 19360, highlight: true},
          {text: "FOR", startMs: 19360, endMs: 19580, highlight: false},
          {text: "MORE", startMs: 19580, endMs: 19760, highlight: false},
          {text: "TRAIL", startMs: 19760, endMs: 19980, highlight: false},
          {text: "TIPS", startMs: 19980, endMs: 20920, highlight: false},
        ]}
      />

      <Audio name="Voiceover" src={staticFile("audio/voiceover.wav")} />
      <Audio
        name="Music"
        src={staticFile("audio/music.mp3")}
        volume={(f) =>
          musicVolume *
          interpolate(
            f,
            [0, 6, durationInFrames - fps * 0.8, durationInFrames],
            [0, 1, 1, 0],
            { extrapolateRight: "clamp" },
          )
        }
      />
    </AbsoluteFill>
  );
};

export const MtbTipComposition = () => {
  return (
    <Composition
      id="MtbTip"
      component={MtbTip}
      durationInFrames={628}
      fps={30}
      width={1080}
      height={1920}
      defaultProps={{ accentColor: "#ff2b2b", musicVolume: 0.16 }}
    />
  );
};
