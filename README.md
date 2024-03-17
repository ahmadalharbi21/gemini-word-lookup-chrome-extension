# Gemini Word Lookup Chrome Extension

This Chrome extension is a handy tool that allows you to quickly look up word definitions and examples using the Gemini API. It provides a convenient way to enhance your vocabulary and understand the usage of words in context.

## Features

- **Word Explanation**: Simply select a word and click the "Explain" button to retrieve its definition and examples using the Gemini API. The extension will display the information in a user-friendly manner.

- **YouTube Caption Retrieval**: When you're watching a video on YouTube, this extension enables you to easily retrieve the captions. Click the "Caption" button once to retrieve the upper caption, and click it again to retrieve the lower caption. The captions will be appended to the text area for easy reading or copying.

- **Character Removal Toggle**: The extension includes a toggle switch that allows you to remove specific characters from the retrieved HTML content. This feature is particularly useful when you want to clean up the text and remove any unwanted characters or formatting.

## Requirements

The Gemini Word Lookup Chrome Extension requires the following Python libraries:

- Flask
  ```python
  from flask import Flask, request, jsonify
  
