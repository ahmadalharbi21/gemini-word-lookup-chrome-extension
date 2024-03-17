// Get the 'Save' and 'Caption' buttons, text area, and caption element
var saveButton = document.getElementById('saveButton');
var captionButton = document.getElementById('captionButton');
var textArea = document.getElementById('message1');
var captionIndex = 0;

// Add event listener to the toggle switch


// Add click event listener to the 'Save' button
// Add click event listener to the 'Save' button
saveButton.addEventListener('click', function() {
  var message = textArea.value;
  fetch('http://localhost:5000/process_input', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ input: message })
  })
  .then(response => {
    if (!response.ok) {
      throw new Error("Error fetching data from server: " + response.status);
    }
    return response.json();
  })
  .then(data => {
    console.log('Result:', data.result);
    document.getElementById('output').innerHTML = data.result;
    console.log(data.result);
  })
  .catch(error => {
    console.error('Error:', error);
    document.getElementById('output').innerHTML = "An error occurred: " + error.message;
  });
});

// Add click event listener to the 'Caption' button
captionButton.addEventListener('click', function() {
  console.log("Caption button clicked!");

  // Check if the extension is installed and running
  if (typeof chrome !== 'undefined' && chrome.runtime && chrome.runtime.id) {
    // Extension is installed and running
    chrome.runtime.sendMessage({ action: 'getCaptionText', index: captionIndex }, function(response) {
      if (chrome.runtime.lastError) {
        console.error('Error communicating with background script:', chrome.runtime.lastError);
      } else if (response && response.captionText) {
        // Clear the text area and append the new caption
        textArea.value = response.captionText + ' ';
        captionIndex++;

      } else {
        document.getElementById('output').innerHTML = "no caption found "
        captionIndex = 0; // Reset the index if no more captions are found
      }
    });
  } else {
    // Extension is not installed or not running
    console.error('Extension is not installed or running');
  }
});