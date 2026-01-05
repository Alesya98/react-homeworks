// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import MyCompName from "./MyComp";
import MyCompAge from "./MyCompAge";
import MyCompGender from "./MyCompBool";
import Address from "./MyCompAddress";
import Arr from "./MyCompArr";
import Func from "./MyCompFunc";

function App() {
  return (
    <>
      <MyCompName name={"Alesia"} />
      <MyCompAge age={27} date={1998} />
      <MyCompGender isMan={false} />
      <Address obj={{ country: "Беларусь", city: "Светлогорск" }} />
      <Arr arr={["JS", "HTML/CSS"]} />
      <Func onClick={() => console.log("Нажата")} />
    </>
  );
}

export default App;
