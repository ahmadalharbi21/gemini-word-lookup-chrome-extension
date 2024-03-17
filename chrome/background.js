console.log("Background Script Running!");

// Listen for messages from the content script (script.js)
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log("Received message from content script: ", request);
  if (request.action === 'getCaptionText') {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: getCaptionText,
        args: [request.index]
      }, function(results) {
        if (chrome.runtime.lastError) {
          console.error('Error executing content script:', chrome.runtime.lastError);
          sendResponse({ error: 'Error executing content script' });
        } else {
          sendResponse({ captionText: results[0].result });
        }
      });
    });
    return true; // Required to use sendResponse asynchronously
  }
});

// Function to be executed in the content script
function getCaptionText(index) {
  var captionElements = document.querySelectorAll('.ytp-caption-segment');
  if (captionElements && captionElements[index]) {
    var captionText = captionElements[index].textContent.trim();
    return captionText;
  }
  return null;
}