from flask import Flask, request, jsonify
from flask_cors import CORS
import markdown
import google.generativeai as genai
app = Flask(__name__)
CORS(app)

@app.route('/process_input', methods=['POST'])
def process_input():
    # Receive the input data from the Chrome extension
    input_data = request.json.get('input')

    # Check if input data is provided
    if not input_data:
        return jsonify({'result': 'You need to write a word.'})



    def to_markdown(text):
        # Replace the special character with a Markdown bullet point
        text = text.replace('•', ' *')
        return text

    # Used to securely store your API key
    GOOGLE_API_KEY = 'API-Key '
    # Or use `os.getenv('GOOGLE_API_KEY')` to
    genai.configure(api_key=GOOGLE_API_KEY)
    model = genai.GenerativeModel('gemini-1.0-pro')
    response = model.generate_content(
        f"If the input is a single word:Start with a general, overarching definition of the word. Avoid definitions that are overly specific to a particular subject area.Give two examples of the word used in sentences.Explain a different context where the word could be used and provide an example sentence.If the input is a sentence:Break down the sentence word by word.For each word:Provide the definition.Explain how the word contributes to the overall meaning of the sentence.:{input_data} ")

    result = to_markdown(response.text)

    # Convert the Markdown text to HTML
    html_result = markdown.markdown(result)

    # Return the result as JSON with the Access-Control-Allow-Origin header
    return jsonify({'result': html_result})

if __name__ == '__main__':
    app.run(debug=True)