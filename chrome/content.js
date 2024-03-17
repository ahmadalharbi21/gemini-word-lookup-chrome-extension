// Inject extension ID
var idScript = document.createElement("script");
idScript.setAttribute("type", "application/javascript");
idScript.textContent = 'var myExtId = "' + chrome.runtime.id + '";';
var parent = (document.head || document.documentElement);
parent.insertBefore(idScript, parent.firstChild);

// Get caption text and send it to the background script
var captionElement = document.querySelector('.ytp-caption-segment');
if (captionElement) {
  var captionText = captionElement.textContent.trim();
  chrome.runtime.sendMessage(myExtId, { action: 'getCaptionText', captionText: captionText }, response => {
    console.log("Received response from background script: ", response);
  });
} else {
  // Send a message to the script indicating that no caption was found
  chrome.runtime.sendMessage(myExtId, { action: 'noCaptionFound' }, response => {
    console.log("Received response from background script: ", response);
  });
}

// Clean up injected script
idScript.remove();