import React from "react";
import Main from "./Main/main";
import Wargame from "./Wargame/wargame"
import Community from "./Community/community";

const Content = ({ activeMainContent }) => {
  return (
    <div>
      {activeMainContent === "Main" && <Main />}
      {activeMainContent === "Wargame" && <Wargame />}
      {/* {activeMainContent === "Ranking" && <Rank />} */}
      {activeMainContent === "Community" && <Community />}
    </div>
  );
};

export default Content;
