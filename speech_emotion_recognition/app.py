from flask import Flask, jsonify,request
from queue import Queue
from threading import Thread
import tensorflow as tf
import librosa
import numpy as np
from flask_cors import CORS

app = Flask(__name__)
recording_queue = Queue()
CORS(app)

class_labels = ['angry', 'disgust', 'fear', 'happy', 'neutral', 'pleasant', 'sad']

def extract_mfcc(audio_data):
    y, sr = librosa.load(audio_data, sr=None)
    mfcc = np.mean(librosa.feature.mfcc(y=y, sr=sr, n_mfcc=40).T, axis=0)
    return mfcc

# Placeholder function for model prediction
def predict_emotion(audio_data):
    mfcc_features = extract_mfcc(audio_data)
    mfcc_features = mfcc_features.reshape(1, -1)
    prediction = model.predict(mfcc_features)
    predicted_class_index = np.argmax(prediction)
    predicted_class_label = class_labels[predicted_class_index]
    return predicted_class_label

def fetch_audio_and_process():
    while True:
        if not recording_queue.empty():
            audio_data = recording_queue.get()  # Get audio data from the recording queue
            predicted_class = predict_emotion(audio_data)
            print("Predicted emotion:", predicted_class)

def fetch_audio_from_api():
    while True:
        # Replace this with your actual API call to fetch audio data
        audio_data = "placeholder_audio.wav"
        recording_queue.put(audio_data)  # Put audio data into the recording queue

@app.post('/start')
def start_processing():
    # Start fetching audio from API in one thread
    audio_file = request.files['blob']
    audio_file.save('audio.wav')  # Specify the path where you want to save the file
    
    fetch_thread = Thread(target=fetch_audio_from_api)
    fetch_thread.start()

    # Start processing audio data in another thread
    process_thread = Thread(target=fetch_audio_and_process)
    process_thread.start()

    return jsonify({'message': 'Processing started'})


@app.route('/stop', methods=['POST'])
def stop_processing():
    # Stop fetching audio from API and wait for the remaining audio in the queue to be processed
    while not recording_queue.empty():
        audio_data = recording_queue.get()
        predicted_class = predict_emotion(audio_data)
        print("Predicted emotion for remaining audio:", predicted_class)
    return jsonify({'message': 'Processing stopped'})

if __name__ == '__main__':
    # Load the pre-trained model
    model = tf.keras.models.load_model("your_model_name.h5")
    app.run(debug=True)
