import React from "react";
import { useParams } from "react-router-dom";
const InterviewMEET = () => {
  const { postID, typeID, InterviewID } = useParams();
  return (
    <div className="w-full h-screen bg-slate-950 m-0 p-0 z-9">
      {/* EXIT */}
      <img src="" alt="" />
      {/* Main meet */}
      <div className="main-meet flex h-full m-auto items-center px-auto">
        <div className="w-3/4 h-3/4 rounded-lg bg-slate-500 ml-10"></div>
      </div>
    </div>
  );
};
export default InterviewMEET;
