#!/usr/bin/env bash
# Generates public/audio/voiceover.wav from script.txt with Kokoro TTS, voice "am_fenrir",
# speed 1.1, and a medium 0.30s pause at every comma (0.40s between sentences).
# Needs: pip install kokoro-onnx soundfile, plus from
#   https://huggingface.co/onnx-community/Kokoro-82M-v1.0-ONNX : onnx/model.onnx and voices/am_fenrir.bin
# Usage: scripts/make-voiceover.sh path/to/model.onnx path/to/am_fenrir.bin
set -euo pipefail
cd "$(dirname "$0")/.."
python3 - "$1" "$2" <<'PY'
import sys, re, numpy as np, soundfile as sf
from kokoro_onnx import Kokoro
COMMA, SENT = 0.30, 0.40
v = np.fromfile(sys.argv[2], dtype=np.float32).reshape(510, 1, 256)
np.savez('/tmp/voices.npz', am_fenrir=v)
k = Kokoro(sys.argv[1], '/tmp/voices.npz')
out = []
for p in re.findall(r'[^,.]+[,.]', open('script.txt').read().strip()):
    a, sr = k.create(p.strip(), voice='am_fenrir', speed=1.1, lang='en-us')
    idx = np.where(np.abs(a) > 0.01)[0]
    out += [a[max(0, idx[0] - 240):idx[-1] + 480], np.zeros(int(sr * (COMMA if p.endswith(',') else SENT)), np.float32)]
sf.write('/tmp/vo-raw.wav', np.concatenate(out[:-1]), sr)
PY
ffmpeg -v error -y -i /tmp/vo-raw.wav -af "highpass=f=80,acompressor=threshold=-18dB:ratio=3:attack=5:release=80,equalizer=f=3000:t=q:w=1:g=2,loudnorm=I=-14:TP=-1.5" -ar 48000 public/audio/voiceover.wav
echo "If the script or pauses change, re-time the captions and cuts (words.json comes from faster-whisper small.en word timestamps)."
