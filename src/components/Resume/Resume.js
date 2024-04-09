import {useState} from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Resume = () => {
  const [form, setForm] = useState({});
  const [result, setResult] = useState();

  const submitForm = () => {
    const formData = new FormData();
    formData.append('pdf_file', form.pdf_data);
    formData.append('text_data', form.message);

    axios.post("http://localhost:5000/predict", formData, {
      headers: {
          'Content-Type': 'multipart/form-data'
      }
    }).then((res) => {
      console.log(res.data);
      setResult(res.data);
    });
  }

  return (
    <>
      <div className=" bg-slate-800">
        <div className="h-screen w-full flex flex-col items-center justify-center">
          <p className="text-2xl text-slate-300"> Choose the role</p>
          <select
            name="role"
            id="role"
            className="w-1/4 h-[10%] text-3xl rounded-xl"
            onChange={(e) => setForm({ ...form, role: e.target.value })}
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
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
          </div>
          <button className=" bg-amber-800 border-1 rounded-sm p-2">
            NEXT
          </button>
        </div>
        <div className="h-screen w-full flex flex-col items-center justify-center relative">
          <p className="text-2xl text-slate-300">Upload your Resume</p>
          <input type="file" onChange={(e) => setForm({...form, pdf_data: e.target.files[0]})} />


          <button className="absolute bottom-[5%] left-1/2 bg-amber-800 border-1 rounded-sm p-2">
            <Link href={{
              to : "ResumeScore",
              query: {result}
            }} onClick={()=>{
              console.log(form)
              submitForm()
            }}>SUBMIT</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Resume;
