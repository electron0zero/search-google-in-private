/*
Create all the context menu items.
*/
chrome.contextMenus.create({
  id: "selected-text",
  title: chrome.i18n.getMessage("menuItemSelection"),
  contexts: ["selection"],
});


/*
The click event listener, where we perform the appropriate action given the
ID of the menu item that was clicked.
*/
chrome.contextMenus.onClicked.addListener((info, tab) => {
  switch (info.menuItemId) {
    case "selected-text":
      // create a incognito window
      let searchURL = "https://www.google.com/search?q=" + info.selectionText
      let createData = {
          incognito: true,
          url: [searchURL]
        };
      let creating = chrome.windows.create(createData);
      creating.then(() => {
        console.log("The incognito window has been created");
      });
      break;
  }
});
