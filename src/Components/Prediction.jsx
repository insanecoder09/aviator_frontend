import React, { useContext, useState } from "react";
import { MyContext } from "./Context";

function Prediction() {
  const { roundValue, nextRound, btnEnable, setBtnEnable } =
    useContext(MyContext);
  const [pId, setPId] = useState("");
  const [upper, setUpper] = useState(0);
  const [lower, setLower] = useState(0);
  const [martingale, setmartingale] = useState('2')

  const mart = ()=>{
    setmartingale(()=>{
      return ((Math.random() * 2)+1).toFixed();
      
    })
  }

  return (
    <div className="flex flex-col items-center h-full justify-evenly bg-black py-7">
      <h1 className="w-full pl-5">SELECT APP</h1>
      <div className="flex flex-col gap-5">
        <div className="flex justify-center gap-5">
          <img onClick={()=>setUpper(1)} className={`h-[110px] w-[110px] rounded-xl border-sky-400 ${upper==1? 'border-[3px]':''}`} src="https://i.postimg.cc/ncHxS2S9/3.png" alt="photo" />
          <img onClick={()=>setUpper(2)} className={`h-[110px] w-[110px] rounded-xl border-sky-400 ${upper==2? 'border-[3px]':''}`} src="https://i.postimg.cc/3rj7ZV1H/4.png" alt="photo" />
        </div>
        <div className="flex justify-center gap-5">
          <img onClick={()=>setLower(1)} className={`h-[110px] w-[110px] rounded-xl border-sky-400 ${lower==1? 'border-[3px]':''}`} src="https://i.postimg.cc/PJMjrvJq/2.png" alt="photo" />
          <img onClick={()=>setLower(2)} className={`h-[110px] w-[110px] rounded-xl border-sky-400 ${lower==2? 'border-[3px]':''}`} src="https://i.postimg.cc/hjTn65qT/1.png" alt="photo" />
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
        <div className="relative w-full h-[100px] border p-1 flex flex-col items-center text-center justify-center">
          <h1 className="text-[45px] font-bold">{roundValue}</h1>
          <h1 className="absolute bottom-1 right-1 leading-none text-xs text-red-500">use {martingale}x</h1>
        </div>
        <button
          onClick={() => {
            if (btnEnable && pId>999 && pId<10000) {
              nextRound();
              setBtnEnable(0);
              mart();
              setTimeout(() => {
                setBtnEnable(1);
              }, 20000);
            }

          }}
          className={`p-3 ${btnEnable?' bg-white text-black':'bg-zinc-500 text-zinc-400 cursor-not-allowed'} text-sm font-bold w-full`}
        >
          {btnEnable?'NEXT ROUND':'Wait for 20s'}
        </button>
      </div>
    </div>
  );
}

export default Prediction;
