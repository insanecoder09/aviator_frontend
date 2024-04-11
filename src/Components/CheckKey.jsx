import React, { useContext, useEffect } from "react";
import { MyContext } from "./Context";
import { useNavigate } from "react-router-dom";

function CheckKey() {
  const navigate = useNavigate();
  const { setKey, key, CheckKey, setUsername, username } =
    useContext(MyContext);

  return (
    <div className="p-2 bg-black h-full flex flex-col items-center justify-around">
      <h1 className="text-3xl text-center">Login</h1>
      {/* form */}
      <div className="flex flex-col w-[80%]">
        <h1 className="mb-1">Username</h1>
        <input
          onChange={(e) => setUsername(e.target.value)}
          className="bg-transparent border p-2 outline-none mb-7"
          type="text"
          placeholder="Enter Username"
          value={username}
        />
        <h1 className="mb-1">Key</h1>
        <input
          onChange={(e) => setKey(e.target.value)}
          className="bg-transparent border p-2 outline-none mb-7"
          type="text"
          placeholder="Enter Key"
          value={key}
        />
        <button
          onClick={() => {
            if (key && username) CheckKey();
            else alert("Please fill all details.");
          }}
          className="bg-transparent p-3 bg-white text-black font-bold"
        >
          Login
        </button>
      </div>

      {/* banner */}
      <div className=" w-[55%] border p-1 flex flex-col items-center text-center">
        <h1 className="text-yellow-300">HOW TO BUY KEY</h1>
        <h1 className="text-[12px] mb-1">Contact us on Telegram</h1>
        <button className="bg-transparent p-2 bg-white text-black text-sm font-bold w-full">
          CONTACT US
        </button>
      </div>
    </div>
  );
}

export default CheckKey;
