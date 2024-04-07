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
          <div className="w-3/5 h-full rounded-lg bg-slate-500 "></div>
          <div id="RIGHT-SIDE-OPTIONS" className="h-full flex items-center">
            <div className="logo-meet absolute top-10 right-14 h-14 w-14 bg-slate-50">
              <img src="" alt="LOGO" />{" "}
            </div>

            {/* time and command component */}
            <div className="w-60 h-40 bg-slate-600 rounded-2xl">
              <div className="w-full h-[70%] bg-red-400 rounded-t-2xl  ">
                {QuestionTimer}
              </div>
              <div className="flex w-full h-[30%] justify-around rounded-b-2xl">
                <div className="h-full w-[49%] bg-slate-400 rounded-bl-2xl ">
                  Ask
                </div>
                <div className="rounded-br-2xl h-full w-[49%] bg-slate-400">
                  Next
                </div>
              </div>
            </div>

            {/* OUR_CAMERA */}
          </div>
        </div>
      </div>
      <div
        id="exits-options"
        className="w-full h-full backdrop-blur-lg absolute top-0 bg-[rgba(23, 23, 23, 0.44)] "
      >
        <button
          onClick={toggleExitOption}
          className="text-white text-lg absolute top-3 left-3"
        >
          <img src="" alt="Exit" />
        </button>
        <div className=""></div>
      </div>
    </>
  );
};
export default InterviewMEET;
