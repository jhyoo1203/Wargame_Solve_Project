import React from "react";
import Main from "./Main/main";
import Wargame from "./Wargame/wargame"

const Content = ({ activeMainContent }) => {
  return (
    <div>
      {activeMainContent === "Main" && <Main />}
      {activeMainContent === "Wargame" && <Wargame />}
    </div>
  );
};

export default Content;
