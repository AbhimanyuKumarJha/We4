import React from "react";
import DownArrow from "../../helper/svg";
const ResumeScore = () => {
  return (
    <>
      <div className="w-full h-screen flex items-center justify-center">
        {" "}
        <div className=" relative w-[50vh] h-[50vh] bg-orange-600 rounded-full flex flex-col items-center p-auto">
          <p className="mt-[10%]">Your Score</p>
          <p className=" text-8xl mt-[26%]">00</p>
          <p></p>
        </div>
        <DownArrow Class="animate-bounce w-8 h-8 absolute left-[49.5%] bottom-3" />
      </div>
      <div className="w-full h-screen">
        mere ko ye nhi smj aa rha ki analysis me kya dikhao isske liye ek baar
        phle ye smjhna daruri h ki ML model kese kaam kar rha h
      </div>
    </>
  );
};
export default ResumeScore;
