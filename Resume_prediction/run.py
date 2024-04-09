from flask import Flask,jsonify,request
from flask_cors import CORS
from app import get_response

# import os

app = Flask(__name__)
CORS(app)


@app.post('/')
def get_data():
    if 'pdf_file' not in request.files:
        return 'No file part', 400

    pdf_file = request.files['pdf_file']
    text_data = request.form.get('text_data')
    # Do something with the PDF file (e.g., save it to disk)
    print(pdf_file.filename, text_data)

    
    return 'File uploaded successfully'


@app.post('/predict')
def predict():
    if 'pdf_file' not in request.files:
        return 'No file part', 400

    pdf_file = request.files['pdf_file']
    text_data = request.form.get('text_data')
    print(pdf_file.filename, text_data)
    # Call a function and pass text and PDF data as parameters
    result = get_response(pdf_file, text_data)
    print(result)
    # Return the result
    return jsonify(result)

if __name__ == '__main__':
    app.run(host='0.0.0.0',debug=True)
