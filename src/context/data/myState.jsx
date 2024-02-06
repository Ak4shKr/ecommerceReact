import React from "react";
import MyContext from "./myContext";

function myState(props) {
  const state = {
    name: "Akash Saha",
    rollno: 8006,
  };
  return (
    <MyContext.Provider value={state}>{props.children}</MyContext.Provider>
  );
}

export default myState;
