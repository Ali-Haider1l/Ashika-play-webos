# Ashika Play — LG webOS

A standalone LG webOS entertainment app with an OTT-style discovery interface. This repository is independent from Ashika Live TV.

## Version 1.2.1

Bug-fix release: correct home-shelf channel selection, improve native playback error reporting, add LG remote directional/Back-key focus handling, and generate the required PNG app icon during CI packaging.

## Version 1.2.0
- OTT-style home screen with Live TV, Sports, Movies, Series and My List shelves
- M3U/M3U8 playlist import by URL or local file
- M3U metadata parsing: channel name, group, logo and EPG ID
- Optional XMLTV EPG import with current/next programme display
- Search, category filtering, channel details and favorites
- Full-screen playback through the native webOS HTML video stack
- TV remote keyboard focus and Back/Escape support
- Local persistence for playlist, favorites and guide

## Build and install
```sh
npm install -g @webosose/ares-cli
ares-package .
ares-install --device ashikatv ./com.ashika.play.webos_1.2.0_all.ipk
ares-launch --device ashikatv com.ashika.play.webos
```

GitHub Actions packages an IPK on pushes to main. Download the artifact from the Actions run.

## Provider, rights and playback
This is an independently branded OTT-style app, not Toffee's official client. It does not use Toffee proprietary source code, private APIs, catalog assets, credentials, paid streams or DRM keys. Official Toffee sign-in, subscription catalog and protected channels require authorization and integration supplied by the provider. No paywall or DRM is bypassed.

Use only playlists and streams you are authorized to access. Playlist and XMLTV servers must allow CORS requests from the TV app. Playback depends on LG webOS firmware, stream protocol, codecs, DRM and provider authentication. The HTML video element cannot guarantee support for every HLS/DASH variant.

## Known next steps
- Test playlist formats and remote focus on the physical TV.
- Add provider-approved catalog/API integration if access credentials and documentation are supplied.
- Validate actual EPG timezone and stream playback against the target TV.
