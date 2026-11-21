#!/usr/bin/env bash
# Downloads the free Mixkit stock clips and music track used by the MtbTip composition.
# Mixkit license: free for commercial use, no attribution required.
set -euo pipefail
cd "$(dirname "$0")/../public"
mkdir -p clips audio
for id in 40887 44340 46247 40893 40891 44323 44332 44629 44319 44333 44324 44322 48515; do
  [ -f "clips/$id.mp4" ] && continue
  curl -sSf -o "clips/$id.mp4" "https://assets.mixkit.co/videos/$id/$id-1080.mp4" ||
    curl -sSf -o "clips/$id.mp4" "https://assets.mixkit.co/videos/$id/$id-720.mp4"
done
[ -f audio/music.mp3 ] || { curl -sSf -o /tmp/mixkit-51.mp3 https://assets.mixkit.co/music/51/51.mp3 &&
  ffmpeg -v error -y -i /tmp/mixkit-51.mp3 -t 25 -b:a 192k audio/music.mp3; }
echo "Clips + music ready. Voiceover: run scripts/make-voiceover.sh"
