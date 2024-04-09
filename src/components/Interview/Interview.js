import { Link } from "react-router-dom";
import { useState } from "react";

const Interview = () => {
  const [postID, setPostID] = useState("General");
  const [typeID, setTypeID] = useState("Behavioural");

  return (
    <>
      <div className="w-full h-full bg-slate-900 py-28 m-0">
        <div className="h-screen flex flex-col items-center justify-around ">
          <div className="w-1/2 h-10  bg-slate-200 flex justify-around">
            <select
              name="POST"
              id="POST"
              onChange={(e) => {
                setPostID(e.target.value);
              }}
            >
              <option value="SDE">SDE</option>
              <option value="CEO">CEO</option>
              <option value="CTO">CTO</option>
              <option value="CFO">CFO</option>
              <option value="CFO">PM</option>
            </select>

            <select
              name="Type"
              id="Type"
              onChange={(e) => {
                setTypeID(e.target.value);
              }}
            >
              <option value="Technical">Technical</option>
              <option value="Behaviour">Behaviour</option>
            </select>
          </div>

          {/* //! Type of AI and connect any other */}
          <div className="flex w-1/2 h-1/2 gap-10">
            <div className="w-10 h-12 inline-block bg-slate-500 text-white">
              AI1
            </div>
            <div className="w-10 h-12 inline-block bg-slate-500 text-white">
              AI2
            </div>
            <div className="w-10 h-12 inline-block bg-slate-500 text-white">
              AI3
            </div>
            <div className="w-10 h-12 inline-block bg-slate-500 text-white">
              AI4
            </div>
            <div className="w-10 h-12 inline-block bg-slate-500 text-white">
              ONline
            </div>
          </div>
          <div className="w-12 bg-red-500 h-8 text-white">
            <Link
              to={"Details/" + postID + "/" + typeID + "/Interviewer/Rohan"}
            >
              {" "}
              Start
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Interview;
