# Search Google in Private
Adds a `Search Google in Private for <selected text>` when you select something, it's just like Search Google for <selected-text>` context menu but it opens a new private windows for your search

## [For Firefox - Get it on AMO](https://addons.mozilla.org/en-US/firefox/addon/search-google-in-private/)

### How-to build
1. `git clone https://github.com/electron0zero/search-google-in-private.git`

#### Firefox
2. install [web-ext](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Getting_started_with_web-ext) by running `npm install --global web-ext`
3. `cd search-google-in-private/firefox`
4. run `web-ext run` and it will add this extension to your firefox
5. go to `about:debugging` in opened browser and you can access [extension debugger](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Debugging)

#### Chrome
2. Visit `chrome://extensions` in your browser
3. Ensure that the Developer mode checkbox in the top right-hand corner is checked.
4. Click Load unpacked extension… to pop up a file-selection dialog.
5. Navigate to the `../search-google-in-private/chrome`
- Alternatively, you can drag and drop the directory where your extension files live onto `chrome://extensions` in your browser to load it. 

## Screenshots
<p align="center">
<img src="screenshots/firefox/closeup.png" width="400">
<img src="screenshots/chrome/closeup.png" width="400">
<br>
<img src="screenshots/firefox/page.png" width="400">
<img src="screenshots/chrome/page.png" width="400">
<br>
<img src="screenshots/firefox/full-wiki.png" width="400">
<img src="screenshots/chrome/full-wiki.png" width="400">
<br>
<img src="screenshots/firefox/full-result.png" width="400">
<img src="screenshots/chrome/full-result.png" width="400">
</p>

### License
Mozilla Public License Version 2.0