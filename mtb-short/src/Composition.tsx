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
        <Sequence name="Stop staring at your front wheel" from={0} durationInFrames={48}>
          <Shot src="40887.mp4" trimBefore={30} focusFrom={30} focusTo={35} />
        </Sequence>
        <Sequence name="Bike goes where your eyes go" from={48} durationInFrames={50}>
          <Shot src="44340.mp4" trimBefore={0} focusFrom={68} focusTo={87} />
        </Sequence>
        <Sequence name="Look ten feet ahead" from={98} durationInFrames={39}>
          <Shot src="46247.mp4" trimBefore={0} focusFrom={87} focusTo={72} />
        </Sequence>
        <Sequence name="Not at the rock" from={137} durationInFrames={45}>
          <Shot src="40893.mp4" trimBefore={120} focusFrom={35} focusTo={35} />
        </Sequence>
        <Sequence name="Drop your heels" from={182} durationInFrames={27}>
          <Shot src="40891.mp4" trimBefore={126} focusFrom={90} focusTo={85} />
        </Sequence>
        <Sequence name="Bend your elbows" from={209} durationInFrames={28}>
          <Shot src="44323.mp4" trimBefore={15} focusFrom={43} focusTo={43} />
        </Sequence>
        <Sequence name="Let the bike move under you" from={237} durationInFrames={44}>
          <Shot src="44332.mp4" trimBefore={66} focusFrom={15} focusTo={5} />
        </Sequence>
        <Sequence name="Brake before the corner" from={281} durationInFrames={36}>
          <Shot src="44629.mp4" trimBefore={60} focusFrom={40} focusTo={30} />
        </Sequence>
        <Sequence name="Not in it" from={317} durationInFrames={21}>
          <Shot src="44319.mp4" trimBefore={138} focusFrom={88} focusTo={92} />
        </Sequence>
        <Sequence name="Look through the exit and pump" from={338} durationInFrames={63}>
          <Shot src="44333.mp4" trimBefore={26} focusFrom={30} focusTo={70} />
        </Sequence>
        <Sequence name="Try this on your next ride" from={401} durationInFrames={36}>
          <Shot src="44324.mp4" trimBefore={90} focusFrom={40} focusTo={45} />
        </Sequence>
        <Sequence name="Feel the difference" from={437} durationInFrames={58}>
          <Shot src="44322.mp4" trimBefore={390} focusFrom={50} focusTo={50} />
        </Sequence>
        <Sequence name="Follow for more" from={495} durationInFrames={75}>
          <Shot src="48515.mp4" trimBefore={0} focusFrom={68} focusTo={45} />
        </Sequence>
      </AbsoluteFill>

      <WordCaptions
        accentColor={accentColor}
        top={46}
        words={[
          {text: "STOP", startMs: 0, endMs: 260, highlight: true},
          {text: "STARING", startMs: 260, endMs: 540, highlight: false},
          {text: "AT", startMs: 540, endMs: 740, highlight: false},
          {text: "YOUR", startMs: 740, endMs: 880, highlight: false},
          {text: "FRONT", startMs: 880, endMs: 1080, highlight: false},
          {text: "WHEEL", startMs: 1080, endMs: 1640, highlight: true},
          {text: "YOUR", startMs: 1640, endMs: 1720, highlight: false},
          {text: "BIKE", startMs: 1720, endMs: 1920, highlight: false},
          {text: "GOES", startMs: 1920, endMs: 2160, highlight: false},
          {text: "WHEREVER", startMs: 2160, endMs: 2400, highlight: false},
          {text: "YOUR", startMs: 2400, endMs: 2600, highlight: false},
          {text: "EYES", startMs: 2600, endMs: 2800, highlight: true},
          {text: "GO", startMs: 2800, endMs: 3300, highlight: false},
          {text: "SO", startMs: 3300, endMs: 3420, highlight: false},
          {text: "LOOK", startMs: 3420, endMs: 3620, highlight: false},
          {text: "TEN", startMs: 3620, endMs: 3860, highlight: false},
          {text: "FEET", startMs: 3860, endMs: 4080, highlight: false},
          {text: "AHEAD", startMs: 4080, endMs: 4620, highlight: true},
          {text: "NOT", startMs: 4620, endMs: 4800, highlight: false},
          {text: "AT", startMs: 4800, endMs: 4940, highlight: false},
          {text: "THE", startMs: 4940, endMs: 5040, highlight: false},
          {text: "ROCK", startMs: 5040, endMs: 5200, highlight: true},
          {text: "YOU'RE", startMs: 5200, endMs: 5420, highlight: false},
          {text: "SCARED", startMs: 5420, endMs: 5640, highlight: false},
          {text: "OF", startMs: 5640, endMs: 6120, highlight: false},
          {text: "DROP", startMs: 6120, endMs: 6300, highlight: false},
          {text: "YOUR", startMs: 6300, endMs: 6480, highlight: false},
          {text: "HEELS", startMs: 6480, endMs: 7040, highlight: true},
          {text: "BEND", startMs: 7040, endMs: 7200, highlight: false},
          {text: "YOUR", startMs: 7200, endMs: 7360, highlight: false},
          {text: "ELBOWS", startMs: 7360, endMs: 7980, highlight: true},
          {text: "AND", startMs: 7980, endMs: 8100, highlight: false},
          {text: "LET", startMs: 8100, endMs: 8240, highlight: false},
          {text: "THE", startMs: 8240, endMs: 8360, highlight: false},
          {text: "BIKE", startMs: 8360, endMs: 8520, highlight: false},
          {text: "MOVE", startMs: 8520, endMs: 8720, highlight: false},
          {text: "UNDER", startMs: 8720, endMs: 9000, highlight: false},
          {text: "YOU", startMs: 9000, endMs: 9400, highlight: false},
          {text: "BRAKE", startMs: 9400, endMs: 9660, highlight: true},
          {text: "BEFORE", startMs: 9660, endMs: 9900, highlight: true},
          {text: "THE", startMs: 9900, endMs: 10060, highlight: false},
          {text: "CORNER", startMs: 10060, endMs: 10600, highlight: false},
          {text: "NOT", startMs: 10600, endMs: 10720, highlight: false},
          {text: "IN", startMs: 10720, endMs: 10900, highlight: false},
          {text: "IT", startMs: 10900, endMs: 11280, highlight: false},
          {text: "THEN", startMs: 11280, endMs: 11360, highlight: false},
          {text: "LOOK", startMs: 11360, endMs: 11520, highlight: false},
          {text: "THROUGH", startMs: 11520, endMs: 11780, highlight: false},
          {text: "THE", startMs: 11780, endMs: 11920, highlight: false},
          {text: "EXIT", startMs: 11920, endMs: 12220, highlight: true},
          {text: "AND", startMs: 12220, endMs: 12480, highlight: false},
          {text: "PUMP", startMs: 12480, endMs: 12660, highlight: true},
          {text: "OUT", startMs: 12660, endMs: 12880, highlight: false},
          {text: "OF", startMs: 12880, endMs: 13000, highlight: false},
          {text: "IT", startMs: 13000, endMs: 13420, highlight: false},
          {text: "TRY", startMs: 13420, endMs: 13540, highlight: false},
          {text: "THIS", startMs: 13540, endMs: 13700, highlight: false},
          {text: "ON", startMs: 13700, endMs: 13900, highlight: false},
          {text: "YOUR", startMs: 13900, endMs: 14040, highlight: false},
          {text: "NEXT", startMs: 14040, endMs: 14260, highlight: false},
          {text: "RIDE", startMs: 14260, endMs: 14620, highlight: false},
          {text: "AND", startMs: 14620, endMs: 14800, highlight: false},
          {text: "YOU'LL", startMs: 14800, endMs: 15020, highlight: false},
          {text: "FEEL", startMs: 15020, endMs: 15160, highlight: false},
          {text: "THE", startMs: 15160, endMs: 15360, highlight: false},
          {text: "DIFFERENCE", startMs: 15360, endMs: 15640, highlight: true},
          {text: "INSTANTLY", startMs: 15640, endMs: 16580, highlight: false},
          {text: "FOLLOW", startMs: 16580, endMs: 16700, highlight: true},
          {text: "FOR", startMs: 16700, endMs: 17000, highlight: false},
          {text: "MORE", startMs: 17000, endMs: 17180, highlight: false},
          {text: "TRAIL", startMs: 17180, endMs: 17440, highlight: false},
          {text: "TIPS", startMs: 17440, endMs: 18380, highlight: false},
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
      durationInFrames={570}
      fps={30}
      width={1080}
      height={1920}
      defaultProps={{ accentColor: "#ff2b2b", musicVolume: 0.16 }}
    />
  );
};
