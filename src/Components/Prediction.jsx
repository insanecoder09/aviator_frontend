import React, { useContext, useState } from "react";
import { MyContext } from "./Context";

function Prediction() {
  const { roundValue, nextRound, btnEnable, setBtnEnable } =
    useContext(MyContext);
  const [pId, setPId] = useState("");
  return (
    <div className="flex flex-col items-center h-full justify-evenly bg-black py-7">
      <h1 className="w-full pl-5">SELECT APP</h1>
      <div className="flex flex-col gap-5">
        <div className="flex justify-center gap-5">
          <div className="h-[110px] w-[110px] bg-red-300 rounded-full"></div>
          <div className="h-[110px] w-[110px] bg-red-300 rounded-full"></div>
        </div>
        <div className="flex justify-center gap-5">
          <div className="h-[110px] w-[110px] bg-red-300 rounded-[20px]"></div>
          <div className="h-[110px] w-[110px] bg-red-300 rounded-[20px]"></div>
        </div>
      </div>
      <div className="w-[70%]">
        <h1 className="mb-1 ">Period ID</h1>
        <div className="flex">
          <input
            onChange={(e) => {
              setPId(e.target.value);
            }}
            className="bg-transparent border p-2 outline-none w-[75%]"
            type="text"
            placeholder="Enter Last 4 digit"
          />
          <button onClick={()=>{
            if(pId>999 && pId<10000) setBtnEnable(1);
          }} className="bg-transparent p-3 bg-white text-black text-sm font-bold w-[25%]">
            OK
          </button>
        </div>
      </div>
      <div className="w-[70%] flex flex-col items-center text-center gap-5">
        <div className="w-full h-[100px] border p-1 flex flex-col items-center text-center justify-center">
          <h1 className="text-[45px] font-bold">{roundValue}X</h1>
        </div>
        <button
          onClick={() => {
            if (btnEnable && pId>999 && pId<10000) {
              nextRound();
              setBtnEnable(0);
              setTimeout(() => {
                setBtnEnable(1);
              }, 2000);
            }

          }}
          className={`p-3 ${btnEnable?' bg-white text-black':'bg-zinc-500 text-zinc-400 cursor-not-allowed'} text-sm font-bold w-full`}
        >
          NEXT ROUND
        </button>
      </div>
    </div>
  );
}

export default Prediction;
