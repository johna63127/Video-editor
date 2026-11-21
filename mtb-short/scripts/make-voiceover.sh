#!/usr/bin/env bash
# Generates public/audio/voiceover.wav from script.txt with Piper TTS (en_US-ryan-high).
# Needs: pip install piper-tts, and the voice files from
#   https://huggingface.co/rhasspy/piper-voices/tree/main/en/en_US/ryan/high
# Usage: scripts/make-voiceover.sh path/to/en_US-ryan-high.onnx
set -euo pipefail
cd "$(dirname "$0")/.."
piper -m "$1" --length-scale 0.88 --sentence-silence 0.15 -f /tmp/vo-raw.wav < script.txt
ffmpeg -v error -y -i /tmp/vo-raw.wav -af "highpass=f=80,acompressor=threshold=-18dB:ratio=3:attack=5:release=80,equalizer=f=3000:t=q:w=1:g=3,loudnorm=I=-14:TP=-1.5" -ar 48000 public/audio/voiceover.wav
echo "If you change script.txt, re-time the captions (words.json was made with faster-whisper small.en word timestamps)."
