# Ashika Play — LG webOS

A standalone LG webOS streaming and playlist entertainment app with a premium, Toffee-inspired dark interface and warm orange accent styling. Independently branded and developed.

## Version 1.3.0

- Refreshed premium streaming UI, responsive navigation and orange accent theme
- Improved hero presentation and content shelves for Live TV, Sports, Movies, Series and My List
- Horizontal poster rails with category-specific artwork treatments
- Search, category filtering, favorites and channel details
- M3U/M3U8 playlist import by URL or local file
- M3U metadata parsing: channel name, group, logo and EPG ID
- Optional XMLTV EPG import with current/next programme display
- Full-screen playback through the native webOS HTML video stack with clearer playback errors
- LG remote directional navigation and Back/Escape support
- Local persistence for playlist, favorites and guide
- Updated webOS app metadata and package version

## Build and install

```sh
npm install -g @webosose/ares-cli
ares-package .
ares-install --device ashikatv ./com.ashika.play.webos_1.3.0_all.ipk
ares-launch --device ashikatv com.ashika.play.webos
```

GitHub Actions may package an IPK when its workflow is configured for the repository. Download the generated artifact from the relevant Actions run.

## Provider, rights and playback

Ashika Play is an independently branded app, not Toffee's official client. It does not use Toffee proprietary source code, private APIs, catalog assets, credentials, paid streams or DRM keys. Official Toffee sign-in, subscription catalog and protected channels require provider-authorized integration and credentials. No paywall or DRM is bypassed.

Use only playlists and streams you are authorized to access. Playlist and XMLTV servers must allow CORS requests from the TV app. Playback depends on LG webOS firmware, stream protocol, codecs, DRM and provider authentication. The HTML video element cannot guarantee support for every HLS/DASH variant.

## Validation

After packaging, install on the target LG TV and test remote focus, Back behavior, playlist loading, EPG timezone, and actual stream playback. A successful GitHub commit does not by itself confirm a successful IPK build or TV playback.
