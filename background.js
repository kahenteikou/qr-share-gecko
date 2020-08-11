
function onCreated() {
    if (browser.runtime.lastError) {
      console.log(`Error: ${browser.runtime.lastError}`);
    } else {
      console.log("Item created successfully");
    }
  }
browser.contextMenus.create({
    id: "qr-share-selection",
    title: "Share QR Code",
    contexts: ["all"]
}, onCreated);
browser.contextMenus.onClicked.addListener((info, tab) => {
    switch (info.menuItemId) {
        case "qr-share-selection":

        browser.tabs.query({ windowId: browser.windows.WINDOW_ID_CURRENT, active:true }).then(tabs => {
        for (tab of tabs) {
            console.log(tab.url);
            browser.tabs.sendMessage(tab.id,{message: tab.url},function(respkun) {
                console.log(respkun);
            });

        }
        }, error => {
        console.error(error)
        })
            break;
    }
});