import { Link } from "react-router-dom";
import { useState } from "react";

const Interview = () => {
  const [postID, setPostID] = useState("General");
  const [typeID, setTypeID] = useState("Behavioural");

    const [selectedItem, setSelectedItem] = useState(null);
  
    const handleItemClick = (item) => {
      setSelectedItem(item);
      console.log(selectedItem);
      const InterviewerLink = document.getElementById("copy-link")
      if(InterviewerLink){
        InterviewerLink.style.display= selectedItem==="Online" ? "block" : "none";
      }
    };
  return (
    <>
      <div className="w-full h-full bg-slate-900  m-0">
        {/* <div className="h-screen flex flex-col items-center justify-around "> */}
          {/* <div className="w-full h-[200vh]  bg-slate-200 flex flex-col justify-around"> */}
          <div className="h-screen w-full flex flex-col items-center justify-center">
          <p className="text-2xl text-slate-300"> Choose the POST</p>
            <select
              name="POST"
              id="POST"
              className="w-1/4 h-[10%] text-3xl rounded-xl"
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
</div>
<div className="h-screen w-full flex flex-col items-center justify-center">
          <p className="text-2xl text-slate-300"> Choose the POST</p>
            <select
              name="Type"
              id="Type"
              className="w-1/4 h-[10%] text-3xl rounded-xl"
              onChange={(e) => {
                setTypeID(e.target.value);
              }}
            >
              <option value="Technical">Technical</option>
              <option value="Behaviour">Behaviour</option>
            </select>
          </div>

          {/* //! Type of AI and connect any other */}
          

          <div className="h-screen w-full flex flex-col items-center justify-center relative">
          <div className="flex w-1/2 h-1/2 justify-around">
            <div onClick={()=> handleItemClick('bot1')} className="w-[10vw] h-[10vw] inline-block bg-slate-500 text-white cursor-pointer">
              Bot1
            </div>
            <div onClick={()=> handleItemClick('bot2')} className="w-[10vw] h-[10vw] inline-block bg-slate-500 text-white cursor-pointer">
              Bot2
            </div>
            {/* <div className="w-10 h-12 inline-block bg-slate-500 text-white">
              AI3
            </div>
            <div className="w-10 h-12 inline-block bg-slate-500 text-white">
              AI4
            </div> */}
            <div onClick={()=> handleItemClick('Online')} className={" cursor-pointer w-[10vw] h-[10vw] inline-block text-white bg-slate-500" }>
              ONline
            </div>
            </div>
            <div className=" w-1/4 h-[10%] rounded-sm bg-zinc-700" id="copy-link">{"http://localhost:3000/Interviewer/"}</div>
          <div className="absolute bottom-[5%] left-1/2 bg-amber-800 border-1 rounded-sm p-2">
            <Link
              // to={"Details/" + postID + "/" + typeID + "/ManualInterviewer/Hardik"}
              // to={"Mylobby"}
              to={"Details/" + postID + "/" + typeID + "/ManualInterviewer/mylobby"}
            >
              {" "}
              Start
            </Link>
          </div>
              </div>
        {/* </div> */}
      </div>
    </>
  );
};
export default Interview;
