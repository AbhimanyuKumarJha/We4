import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import fetch from "../../helper/question";

const InterviewMEET = (props) => {
  const { postID, typeID, InterviewID } = useParams();
  const [qid, setQid] = useState(0);
  const [questions, setQuestions] = useState([]);
  // const {
  //   transcript,
  //   listening,
  //   resetTranscript,
  //   browserSupportsSpeechRecognition
  // } = useSpeechRecognition();

  // const [timer, setTimer] = useState(120); // 120 seconds = 2 minutes

  // const startListening = () => {
  //   resetTranscript(); // Reset transcript
  //   setTimer(120); // Reset timer
  //   SpeechRecognition.startListening({continuous: true});
  // };

  // const stopListening = () => {
  //   SpeechRecognition.stopListening();
  // };

  // if (!browserSupportsSpeechRecognition) {
  //   return <span>Browser doesn't support speech recognition.</span>;
  // }

  const speak = (text) => {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    synth.speak(utterance);
  };

  useEffect(() => {
  const getQ = async () => {
    try {
      const ques = await fetch(postID); 
    
      setQuestions(ques);
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  };

  
  if (questions.length === 0) {
    getQ();
  }
  }, [questions]); // Run effect when questions state changes

  // useEffect(() => {
  //   let interval;
  //   if (listening) {
  //     interval = setInterval(() => {
  //       setTimer(prevTimer => prevTimer - 1);
  //     }, 1000); // Update timer every second
  //   }

  //   if (timer === 0) {
  //     stopListening();
  //   }

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, [listening, timer]);


  const start = Date.now();

  const calculateTimeLeft = () => {
    let difference = Date.now() - start;
    return props.QuestionTimer - difference / 1000;
  };
  const [sec, setSec] = useState();

  //todo Remove the header from the meet
  const RemoveHeader = document.getElementById("layout-header");
  if (RemoveHeader) {
    console.log("Header Removed");
    RemoveHeader.style.display = "none";
  }

  //todo Toggle Exit options from where
  const [exitOption, setExitOption] = useState(false);
  const Confirmation = document.getElementById("exits-options");

  const toggleExitOption = () => {
    setExitOption(!exitOption);
    if (Confirmation)
      Confirmation.style.display = exitOption === true ? "flex" : "none";
  };

  const backToHome = () => {
    RemoveHeader.style.display = "flex";
    console.log("Back to Home");
  };

  const startInterview = () => {
    let idx = 0;
    speak(questions[idx]);
    setInterval(() => {
      if(idx == questions.length - 1) {
        clearInterval();
      }
      speak(questions[++idx]);
      setQid(qid => qid+1);
    }, 180 * 1000);
  }

  return (
    <>
      <div className="w-full h-screen bg-slate-950 m-0 p-0 z-9 flex items-center">
        {/* EXIT */}
        <button
          onClick={toggleExitOption}
          className="text-white text-lg absolute top-3 left-3"
        >
          <img src="" alt="Exit" />
        </button>

        {/* Main meet */}
        <div className="main-meet flex w-11/12 h-4/5 m-auto items-center px-auto justify-around">
          <div className="w-3/5 h-full rounded-lg bg-slate-500 ">
            <button onClick={startInterview}>start</button>
            <button onClick={() => speak(questions[qid])}>Speak</button>
            <div>{questions[qid]}</div>
          </div>
          <div id="RIGHT-SIDE-OPTIONS" className="h-full flex items-center">
            <div className="logo-meet absolute top-10 right-14 h-14 w-14 bg-slate-50">
              <img src="" alt="LOGO" />{" "}
            </div>

            {/* time and command component */}
            <div className="w-60 h-40 bg-slate-600 rounded-2xl">
              <div className="w-full h-[70%] bg-red-400 rounded-t-2xl  ">
                {props.QuestionTimer}
              </div>
              <div className="flex w-full h-[30%] justify-around rounded-b-2xl">
                <button className="h-full w-[49%] bg-slate-400 rounded-bl-2xl ">
                  Ask
                </button>
                <button className="rounded-br-2xl h-full w-[49%] bg-slate-400">
                  Next
                </button>
              </div>
            </div>

            {/* OUR_CAMERA */}
            <div className="absolute w-96 h-56 bottom-10 right-10 bg-slate-500 rounded-lg">
              {" "}
              Camera
            </div>
          </div>
        </div>
      </div>

      <div
        id="exits-options"
        className="w-full h-full backdrop-blur-lg absolute top-0 bg-[rgba(23, 23, 23, 0.44)] items-center justify-center hidden"
      >
        <button
          onClick={toggleExitOption}
          className="text-white text-lg absolute top-3 left-3"
        >
          <img src="" alt="Exit" />
        </button>
        {/* //todo exit confirmation */}
        <div className="w-[300px] h-28 flex flex-col items-center justify-around">
          <div className="w-[299px] h-[77px] bg-slate-400 rounded-t-2xl p-2 text-center ">
            Do you want to quit the interview
          </div>
          <div className="flex w-full h-[33px] justify-around rounded-b-2xl">
            <button
              className="h-full w-[149px] bg-slate-400 rounded-bl-2xl "
              onClick={toggleExitOption}
            >
              No
            </button>
            <button
              className="rounded-br-2xl h-full w-[149px] bg-slate-400"
              onClick={backToHome}
            >
              <Link to="/">Yes</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default InterviewMEET;

InterviewMEET.defaultProps = {
  QuestionTimer: 100,
};
