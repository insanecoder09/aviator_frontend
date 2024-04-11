import React from "react";

function Errors({ massage }) {
  return (
    <div className="h-full w-full bg-black flex items-center justify-center">
      <h1 className="p-3 bg-white text-black text-xl font-bold w-[80%] text-center">{massage}</h1>
    </div>
  );
}

export default Errors;
