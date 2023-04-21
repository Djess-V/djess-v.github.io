import React from "react";

import StartModalWindow from "./other/StartModalWindow";
import Wrapper from "./Wrapper";

import "./css/desktop.css";
import "./css/game.css";
import "./css/parts/sponge.css";

let DesktopPage = () => {
  const [start, setStart] = React.useState(true);

  const closeModalWindow = () => {
    setStart(false);
  };

  return (
    <>
      <Wrapper />
      {start && <StartModalWindow closeModalWindow={closeModalWindow} />}
    </>
  );
};

/* ---------------------------------------------------------------------------------- */

DesktopPage = React.memo(DesktopPage);

export default DesktopPage;
