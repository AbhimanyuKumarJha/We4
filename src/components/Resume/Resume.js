import React from "react";
import { Link } from "react-router-dom";

const Resume = () => {
  let randomNo = Math.random() / 1000000;
  return (
    <>
      <div className=" bg-slate-800">
        <div className="h-screen w-full flex flex-col items-center justify-center">
          <p className="text-2xl text-slate-300"> Choose the role</p>
          <select
            name="role"
            id="role"
            className="w-1/4 h-[10%] text-3xl rounded-xl"
          >
            <option value="" className=" text-slate-500 hover:bg-white ">
              Role
            </option>
            <option value="CA">CA</option>
            <option value="SDE">SDE</option>
            <option value="UI/UX Designer">UI/UX Designer</option>
            <option value="Y">Y</option>
            <option value="Y">Y</option>
          </select>
        </div>
        <div className="h-screen w-full flex flex-col items-center justify-center">
          <div className="w-2/5 h-1/2">
            <p className="text-2xl text-slate-300">Enter your JD</p>
            <input
              type="text"
              placeholder="Describe about your the role"
              className=" w-full h-2/5 text-start"
            />
          </div>
          <button className=" bg-amber-800 border-1 rounded-sm p-2">
            NEXT
          </button>
        </div>
        <div className="h-screen w-full flex flex-col items-center justify-center relative">
          <p className="text-2xl text-slate-300">Upload your Resume</p>
          <input type="file" />

          <button className="absolute bottom-[5%] left-1/2 bg-amber-800 border-1 rounded-sm p-2">
            <Link to={"ResumeScore/" + randomNo}>SUBMIT</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Resume;
