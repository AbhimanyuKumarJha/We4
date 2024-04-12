import cv2
from deepface import DeepFace
import time
import threading

# Global variables
processing_flag = 0
cap = cv2.VideoCapture(0)  # Use 0 for the default camera, or change to the appropriate index for multiple cameras

def process_frame(frame):
    try:
        predictions = DeepFace.analyze(frame, actions=["emotion"], enforce_detection=False)
        total_confidence = 0
        for prediction in predictions:
            total_confidence += (prediction["face_confidence"])
        return total_confidence / len(predictions) if len(predictions) > 0 else 0
    except ValueError:
        print("Face could not be detected in the frame.")
        return 0

def process_live_video():
    global processing_flag
    global cap
    frame_count = 0  # Initialize frame count
    while processing_flag == 1:
        ret, frame = cap.read()
        if not ret:
            print("Error: Failed to capture frame.")
            break
        
        # Process the frame
        confidence = process_frame(frame)
        print("Face confidence for this frame:", confidence)
        
        frame_count += 1  # Increment frame count
        if frame_count == 100:  # Check if 30 frames have been processed
            break  # Reset frame count
            # Perform desired action after processing every 30 frames
        
        if cv2.waitKey(20) == ord('q'):
            break

    # Release the camera and close OpenCV windows
    cap.release()
    cv2.destroyAllWindows()

# Function to start the video processing
def start_video_processing():
    global processing_flag
    processing_flag = 1
    process_live_video()


# Function to stop the video processing
def stop_video_processing():
    global processing_flag  # Declare processing_flag as global
    processing_flag = 0  # Set flag to stop the processing loop
    print("Video processing stopped.")

# Example of starting and stopping video processing at API calls
start_thread = threading.Thread(target=start_video_processing)
start_thread.start()

# Sleep for some time to allow processing to run
time.sleep(20)

stop_thread = threading.Thread(target=stop_video_processing)
stop_thread.start()
