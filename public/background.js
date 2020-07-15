chrome.browserAction.onClicked.addListener(tab => {
  const query = tab.url ? '?url=' + encodeURIComponent(tab.url) : '';
  chrome.tabs.create({
    url: 'page/index.html' + query,
  });
});
