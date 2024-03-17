Gemini Word Lookup Chrome Extension
This Chrome extension is a handy tool that allows you to quickly look up word definitions and examples using the Gemini API. It provides a convenient way to enhance your vocabulary and understand the usage of words in context.

Features
Word Explanation: Simply select a word and click the "Explain" button to retrieve its definition and examples using the Gemini API. The extension will display the information in a user-friendly manner.
YouTube Caption Retrieval: When you're watching a video on YouTube, this extension enables you to easily retrieve the captions. Click the "Caption" button once to retrieve the upper caption, and click it again to retrieve the lower caption. The captions will be automatically appended to the text area, making it convenient for you to read or copy the text.
Character Removal Toggle: The extension includes a toggle switch that allows you to remove specific characters from the retrieved HTML content. This feature is particularly useful when you want to clean up the text and remove any unwanted characters or formatting.
Requirements
The Gemini Word Lookup Chrome Extension requires the following Python libraries:

Flask

Copy code
from flask import Flask, request, jsonify
Flask-CORS

Copy code
from flask_cors import CORS
Markdown

Copy code
import markdown
Google Generative AI

Copy code
import google.generativeai
Pillow (PIL)

Copy code
from PIL import Image, ImageSequence
Please note that in order to use the PIL library, you need to install the Pillow package. You can install it using the following command:


Copy code
pip install pillow
Make sure you have these libraries installed in your Python environment before running the extension.

Installation
To install the Gemini Word Lookup Chrome Extension, follow these steps:

Clone the repository or download the source code as a ZIP file.
Open Google Chrome and navigate to the Extensions page (chrome://extensions/).
Enable the "Developer mode" toggle switch located in the top right corner.
Click on the "Load unpacked" button and select the directory where you cloned or extracted the extension's source code.
The Gemini Word Lookup Chrome Extension should now be installed and visible in your Chrome browser.
Usage
To look up a word, simply select the word on any webpage and click the extension icon. Then, click the "Explain" button to retrieve its definition and examples.
When watching a YouTube video, click the extension icon and then click the "Caption" button once to retrieve the upper caption. Click it again to retrieve the lower caption. The captions will be appended to the text area for easy reading or copying.
If you want to remove specific characters from the retrieved HTML content, toggle the switch provided in the extension's popup window.
Contributing
Contributions to the Gemini Word Lookup Chrome Extension are welcome! If you have any ideas, suggestions, or bug reports, please open an issue on the GitHub repository. If you'd like to contribute code improvements, feel free to fork the repository and submit a pull request.

License
This project is licensed under the MIT License.

Contact
If you have any questions or inquiries, please contact the project maintainer:

Name: Ahmad Alharbi
Email: ahmad@example.com
GitHub: ahmadalharbi21
Feel free to reach out with any feedback or concerns.
