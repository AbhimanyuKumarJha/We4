import React, { useState } from "react";
import { useParams } from "react-router-dom";
const InterviewMEET = () => {
  const { postID, typeID, InterviewID } = useParams();
  const QuestionTimer = <></>;

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
    Confirmation.style.display = exitOption ? "block" : "none";
  };

  return (
    <>
      <div className="w-full h-screen bg-slate-950 m-0 p-0 z-9">
        <div
          id="meet-navbar"
          className="w-4/5 h-24 flex justify-between ml-10 items-center"
        >
          {/* EXIT */}
          <button onClick={toggleExitOption} className="text-white text-lg">
            <img src="" alt="Exit" />
          </button>
          <img src="" alt="LOGO" />
        </div>

        {/* Main meet */}
        <div className="main-meet flex h-4/5 m-auto items-center px-auto justify-around">
          <div className="w-3/5 h-full rounded-lg bg-slate-500 "></div>
          {/* time and command component */}
          <div className="w-60 h-40 bg-slate-600 rounded-2xl">
            <div className="w-full h-[70%] bg-red-400 rounded-t-2xl  ">
              {QuestionTimer}
            </div>
            <div className="flex w-full h-[30%] bg-slate-400 rounded-b-2xl"></div>
          </div>
        </div>
      </div>
      <div id="exits-options"></div>
    </>
  );
};
export default InterviewMEET;
