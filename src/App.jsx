import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import CheckKey from "./Components/CheckKey";
import Prediction from "./Components/Prediction";
import Errors from "./Components/Errors";
import { MyContext } from "./Components/Context";

function App() {
  const { state } = useContext(MyContext);
  return (
    <div className=" max-w-[350px] w-full bg-indigo-950 h-screen m-auto">
      {state == 9 ? (
        <CheckKey />
      ) : state == 0 ? (
        <Errors massage="Invalid Key" />
      ) : state == 1 ? (
        <Errors massage="Key is Inactive ask the Key provider to Activate the Key" />
      ) : state == 2 ? (
        <Errors massage="Key is Expired" />
      ) : (
        state==3?<Prediction/>:<Errors massage="Key is used in another device" />
      )}
    </div>
  );
}

export default App;
