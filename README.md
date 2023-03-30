# ChatGPT

ChatGPT is a simple Flask web application that allows users to interact with the OpenAI GPT model. It features a modern chat interface using Bootstrap and includes request limits to prevent abuse.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Customization](#customization)

## Installation

1. Clone this repository to your local machine:

git clone https://github.com/yourusername/yourrepository.git


2. Install the required dependencies:

pip install -r requirements.txt


3. Make sure you have the necessary files in place:

- Flask application script (e.g., `app.py`)
- ChatGPT script (e.g., `chatgpt.js`)
- HTML template (e.g., `index.html`)
- Custom CSS stylesheet (optional)

## Usage

1. Run the Flask application:

python app.py


2. Open your web browser and navigate to the address where the Flask application is running (default: `http://127.0.0.1:5000/`).

3. Start chatting with ChatGPT by typing a message in the input field and clicking the "Send" button or pressing the "Enter" key.

## Customization

You can customize the chat interface by modifying the HTML, CSS, and JavaScript files. 
The chat UI is built using Bootstrap. 
To further customize the appearance or behavior, you can:

- Modify the `index.html` file to add, remove, or change elements in the chat interface.
- Adjust the `chatgpt.js` file to alter the behavior of the chat interface or interact with the ChatGPT API differently.

