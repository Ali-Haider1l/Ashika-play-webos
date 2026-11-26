# Ashika Play — LG webOS

A standalone LG webOS streaming and playlist entertainment app with a premium, Toffee-inspired dark interface and warm orange accent styling. Independently branded and developed.

## Version 1.4.0

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
- Added official international live news channels: Al Jazeera English, Sky News, Euronews, CNA, TRT World, CBS News 24/7, ABC News Australia, DW News and France 24 English
- Fixed favorites so external-link channels can be saved individually
- Removed unverified direct-stream entries rather than presenting dead or untested links as working
- Added official ABP Network live TV access for ABP Ananda, ABP Majha and ABP Asmita, plus India Today Live TV
- Fixed favorites so external-link channels can be saved individually
- Added ABP Ananda, ABP Majha, ABP Asmita and India Today using their official live TV pages (no third-party restream URLs)
- Updated webOS app metadata and package version

## Build and install

```sh
npm install -g @webosose/ares-cli
ares-package .
ares-install --device ashikatv ./com.ashika.play.webos_1.3.5_all.ipk
ares-launch --device ashikatv com.ashika.play.webos
```

GitHub Actions may package an IPK when its workflow is configured for the repository. Download the generated artifact from the relevant Actions run.

## Provider, rights and playback

Ashika Play is an independently branded app, not Toffee's official client. It does not use Toffee proprietary source code, private APIs, catalog assets, credentials, paid streams or DRM keys. Official Toffee sign-in, subscription catalog and protected channels require provider-authorized integration and credentials. No paywall or DRM is bypassed.

Use only playlists and streams you are authorized to access. Playlist and XMLTV servers must allow CORS requests from the TV app. Playback depends on LG webOS firmware, stream protocol, codecs, DRM and provider authentication. The HTML video element cannot guarantee support for every HLS/DASH variant.

## Validation

After packaging, install on the target LG TV and test remote focus, Back behavior, playlist loading, EPG timezone, and actual stream playback. A successful GitHub commit does not by itself confirm a successful IPK build or TV playback.


## Official free live channels

Ashika Play includes public links to Bangladesh Television's portal (BTV, BTV News, BTV Chattogram and Sangsad Television), plus DBC News, Somoy TV, Star News and RTV. The International group now also links Bloomberg Originals, CBC News, Citizen TV Kenya, Global News, KBS News, KBS World, LiveNOW from FOX, NASA TV, NDTV 24x7, WION, eNCA, ABC News Live, NHK World-Japan, CGTN, Canal 24 Horas, TV Brasil and UN Web TV. These links open broadcaster-owned live pages or verified broadcaster YouTube channels; they are not copied or re-hosted stream URLs. Availability, regional restrictions and playback are controlled by each broadcaster.


## Version 1.4.0
- Updated the TV-first streaming interface with Live TV, Sports, Movies, Series, Kids, Music, Recently Watched and My List sections
- Added persistent watch history and resume position for direct playlist video streams
- Fixed favorites for channels that open official broadcaster pages
- Clearing a custom playlist now keeps the built-in official free-channel directory
- M3U and XMLTV EPG imports remain supported; Movies/Series/Kids/Music sections are populated by matching categories in your own authorized playlist
- This is an independently branded app with a Toffee-inspired streaming layout, not the Toffee service or its proprietary catalogue; paid/DRM-protected streams are not included
