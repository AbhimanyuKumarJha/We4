import tensorflow as tf
import librosa
import numpy as np

def extract_mfcc(filename):
    y, sr = librosa.load(filename, duration=3, offset=0.5)
    mfcc = np.mean(librosa.feature.mfcc(y=y, sr=sr, n_mfcc=40).T, axis=0)
    return mfcc

# Path to your audio file
file_path = r"C:\Users\Ayush\My projects\We4\speech_emotion_recognition\dataset\YAF_fear\YAF_back_fear.wav"

# Extract MFCC features from the audio file
mfcc_features = extract_mfcc(file_path)

# Reshape the features to match the input shape expected by the model
mfcc_features = mfcc_features.reshape(1, -1)

# Load the pre-trained model
model = tf.keras.models.load_model("your_model_name.h5")

# Make prediction using the loaded model
prediction = model.predict(mfcc_features)

# Assuming you have class labels and their corresponding indices
class_labels = ['angry', 'disgust', 'fear', 'happy', 'neutral', 'pleasant', 'sad']

# Get the index of the class with the highest probability
predicted_class_index = np.argmax(prediction)

# Get the predicted class label
predicted_class_label = class_labels[predicted_class_index]

# Print the predicted class label
print("Predicted class:", predicted_class_label)

