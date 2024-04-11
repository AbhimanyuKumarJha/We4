import cv2
from deepface import DeepFace
import tensorflow as tf

# Load TensorFlow with GPU support
physical_devices = tf.config.list_physical_devices('GPU')
if physical_devices:
    tf.config.experimental.set_memory_growth(physical_devices[0], True)

def process_video(video_path):
    # Open the video file
    cap = cv2.VideoCapture(video_path)
    if not cap.isOpened():
        print("Error: Could not open video file.")
        return
    
    # Get the video's frame rate and dimensions
    fps = cap.get(cv2.CAP_PROP_FPS)
    total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
    
    # Initialize variables to store total face confidence and number of frames analyzed
    total_confidence = 0
    frames_analyzed = 0
    
    # Process every 120 frame in the video
    frame_count = 0
    while True:
        ret, frame = cap.read()
        if not ret:
            break
        
        # Analyze only every tenth frame
        if frame_count % 120 == 0:
            # Perform face analysis on the current frame
            try:
                predictions = DeepFace.analyze(frame, actions=["emotion"], enforce_detection=False)
            except ValueError:
                print("Face could not be detected in a frame. Skipping...")
                continue
            
            # Sum up face confidence scores from all faces detected in the frame
            for prediction in predictions:
                total_confidence += prediction["face_confidence"]
            
            frames_analyzed += 1
        
        frame_count += 1
        print(f"Processed frame {frame_count}/{total_frames}")
    
    # Calculate the overall face confidence score
    if frames_analyzed > 0:
        overall_score = total_confidence / frames_analyzed
    else:
        overall_score = 0
    
    # Release VideoCapture object
    cap.release()
    
    return overall_score

# Example usage:
input_video_path = 'test.mp4'
overall_score = process_video(input_video_path)
print("Overall face confidence score:", overall_score)
