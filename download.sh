#!/usr/bin/env bash
# Download a YouTube video (<=1080p, best video + best audio) merged to MP4.
# Usage: ./download.sh <url> [output.mp4]
set -euo pipefail

URL="${1:-https://youtu.be/yWvFwtH4Zzs}"
OUT="${2:-src.mp4}"

command -v yt-dlp >/dev/null || { echo "yt-dlp not found: pip install -U yt-dlp" >&2; exit 1; }
command -v ffmpeg >/dev/null || { echo "ffmpeg not found (needed to merge streams)" >&2; exit 1; }

yt-dlp -f "bv*[height<=1080]+ba/b" --merge-output-format mp4 -o "$OUT" "$URL"
