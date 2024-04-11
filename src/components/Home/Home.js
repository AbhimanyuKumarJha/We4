// import React, { useEffect, useState } from "react";
// import { useLocation } from 'react-router-dom';
import React, { useEffect } from "react";
import { useSearchParams } from 'react-router-dom';
import axios from "axios";

function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  const access_token = searchParams.get("access_token");
  const username = searchParams.get("username");
  console.log(access_token, username);
 
  if (access_token && username) {
    axios.get(`https://490bj8xz-3001.inc1.devtunnels.ms/callback?access_token=${access_token}&username=${username}`)
    .then((res)=>{
      console.log(res.data);
    })

    // axios.get(`http://localhost:3001/submitCustomJson?access_token=${access_token}&username=${username}`)
    // .then((res)=>{
    //   console.log(res.data);
    // })
  }

  return (
    <>
      <div className="w-full h-full bg-slate-900 text-white p-0 m-0">
        <div className="w-full h-screen flex items-center justify-center">
          HI
        </div>
      </div>
    </>
  );
}

export default Home;
