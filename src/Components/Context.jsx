import axios from "axios";
import React, { createContext, useState } from "react";

export const MyContext = createContext();

const Context = (props) => {
  const [key, setKey] = useState("");
  const [btnEnable, setBtnEnable] = useState(0);
  const [username, setUsername] = useState("");
  const [roundValue, setRoundValue] = useState("");
  const [state, setState] = useState(9); // this state tells which component should be shown
  // 9 - Check Key.

  const CheckKey = () => {
    axios.get(`https://aviator-backend-1.onrender.com/keyCheck/${key}`).then((res) => {
      if (res.data.resCode == 3) {
        const verify = localStorage.getItem("keyToCheck");
        if (verify) setState(res.data.resCode);
        else setState(4);
      } else if (res.data.resCode == 1) {
        localStorage.setItem("keyToCheck", key);
        setState(res.data.resCode);
      } else setState(res.data.resCode);
    });
  };

  const nextRound = () => {
    axios.get(`https://aviator-backend-1.onrender.com/newPrediction/${key}`).then((res) => {
      setRoundValue('Loading...');
      setTimeout(() => {
        setRoundValue(res.data);
      }, 1000);
    });
  };

  return (
    <MyContext.Provider
      value={{
        setKey,
        key,
        CheckKey,
        state,
        username,
        setUsername,
        roundValue,
        setRoundValue,
        nextRound,
        btnEnable,
        setBtnEnable,
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
};

export default Context;
