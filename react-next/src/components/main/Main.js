import Header from "../header/Header";
import React from "react";
import Popup from "../sharedComp/Popup";
import { useState } from "react";
import { popupContext } from "../../context/context";

const Main = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="home-page-container">
      <popupContext.Provider>
        <Header />
        <popup />
      </popupContext.Provider>
    </div>
  );
};

export default Main;
