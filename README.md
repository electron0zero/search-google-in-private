# Search Google in Private
Adds a `Search Google in Private for <selected text>` when you select something, it's just like Search Google for <selected-text>` context menu but it opens a new private windows for your search

## [For Firefox - Get it on AMO](https://addons.mozilla.org/en-US/firefox/addon/search-google-in-private/)

### How-to build
#### Firefox
1. `git clone https://github.com/electron0zero/search-google-in-private.git`
2. install [web-ext](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Getting_started_with_web-ext) by running `npm install --global web-ext`
3. `cd search-google-in-private/firefox`
4. run `web-ext run` and it will add this extension to your firefox
5. go to `about:debugging` in opened browser and you can access [extension debugger](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Debugging)

## Screenshots
### Firefox
<p align="center">
<img src="screenshots/ff/closeup.png" width="300">
<br>
<img src="screenshots/ff/getit.png" width="300">
<img src="screenshots/ff/page.png" width="300">
<br>
<img src="screenshots/ff/full-wiki.png" width="300">
<img src="screenshots/ff/full-result.png" width="300">
</p>

### License
Mozilla Public License Version 2.0