# Ashika Play — LG webOS

A separate LG webOS TV streaming-app project. It does not modify or reuse the existing Ashika Live TV project.

## App identity
- App name: Ashika Play
- App ID: `com.ashika.play.webos`
- Version: `1.0.0`
- Target: LG webOS TV, including LG 32LM636BPTB

## Features in this starter
- TV-first 1920×1080 layout
- Home, Live TV, Movies, Series, Sports and My List sections
- M3U playlist import and local persistence
- Full-screen HTML video playback
- Search and TV remote keyboard navigation
- Separate application ID and source tree

## Build in Termux
Keep this project in its own folder, separate from Ashika-webOS.

```sh
mkdir -p ~/Ashika-Play-webOS
cd ~/Ashika-Play-webOS
# Download/clone this repository into this directory
npm install -g @webosose/ares-cli
ares-package .
```

## Install on your LG TV
Use your existing physical-TV device alias:

```sh
ares-install --device ashikatv ./com.ashika.play.webos_1.0.0_all.ipk
ares-launch --device ashikatv com.ashika.play.webos
```

## Playlist notes
Paste a direct M3U/M3U8 URL in Settings. The playlist server must allow browser requests from the TV app (CORS). Stream compatibility depends on the TV media stack, codec, provider authentication, DRM, region restrictions and network conditions.

This project does not include Toffee proprietary code, private APIs, paid channels, or subscription bypasses. Add only content you are authorized to access. Official Toffee integration requires provider authorization and a supported API/authentication flow.

## Development roadmap
1. Verify installation and playback on the physical TV.
2. Add authorized content-provider integration.
3. Improve EPG, channel logos, favourites and playback recovery.
4. Tune remote-control focus behavior against real-TV testing.
