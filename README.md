# Ashika Play — LG webOS

A separate LG webOS TV streaming application with a modern, Toffee-inspired entertainment discovery layout. It keeps Ashika branding and does not modify the existing Ashika Live TV / Ashika webOS projects.

## Version 1.1.0

- TV-first 1920×1080 layout with featured hero and horizontal content shelves
- Home, Live TV, Sports, Drama, Movies, Web Series and My List sections
- Search, title detail view and favorites saved locally
- M3U playlist import with channel name and group parsing
- Full-screen playback using the LG webOS HTML media stack
- Keyboard / TV remote focus states and Escape / Back handling
- GitHub Actions workflow to package an installable IPK

## Important content and provider limitations

The interface is inspired by common OTT discovery patterns. It is not the Toffee application and does not contain Toffee's proprietary source code, catalog API, account system, subscription, DRM keys, or licensed streams. Real Toffee catalog playback, sign-in, premium plans and protected live sports require Banglalink/Toffee authorization and supported provider integration. No paid access or DRM is bypassed.

The home shelves currently show sample discovery tiles. Import an authorized M3U playlist to populate actual live streams. Playlist servers must allow CORS requests from the TV application. A stream can still fail if its codec, DRM, authentication, region restriction or delivery format is unsupported by the TV.

## Build in Termux

```sh
cd ~/Ashika-Play-webOS
npm install -g @webosose/ares-cli
ares-package .
```

## Install on LG TV

Use the configured physical TV alias:

```sh
ares-install --device ashikatv ./com.ashika.play.webos_1.1.0_all.ipk
ares-launch --device ashikatv com.ashika.play.webos
```

A successful GitHub Actions run also uploads the generated IPK as a workflow artifact.
