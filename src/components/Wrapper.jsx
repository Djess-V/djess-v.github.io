import React from "react";
import Game from "./game/Game";
import Computer from "./computer/Computer";
import Menu from "./other/Menu";
import Field from "./other/Field";
import Papers from "./other/Papers";
import Sponge from "./other/Sponge";
import { notesData, menuInfo } from "../data/data";

let Wrapper = ({ opacity }) => {
  const [buttonHidden, setButtonHidden] = React.useState(false);
  const [missingButtons, setMissingButtons] = React.useState([]);
  const [isChangeBackground, setIsChangeBackground] = React.useState(false);
  const [indexDisplayImage, setIndexDisplayImage] = React.useState(0);

  const startMissingButtons = (id) => {
    setMissingButtons([...missingButtons, id]);
  };

  const handlerClickModalDisplayBg = (index) => {
    setIsChangeBackground(false);
    setIndexDisplayImage(index);
  };

  const onClickMenuButton = (item) => {
    switch (item) {
      case 0:
        setButtonHidden(!buttonHidden);
        break;
      case 2:
        setIsChangeBackground(true);
        break;
      case 3:
        //...
        break;
      case 4:
      //...
    }
  };

  React.useEffect(() => {
    if (!buttonHidden) {
      setMissingButtons([]);
    }
  }, [buttonHidden]);

  return (
    <div className={`wrapper ${opacity ? "wrapper__opacity" : ""}`}>
      <div className="wrapper_game_computer">
        <Game />
        <Computer
          indexDisplayImage={indexDisplayImage}
          missingButtons={missingButtons}
          startMissingButtons={startMissingButtons}
          buttonHidden={buttonHidden}
        />
      </div>
      <div className="wrapper_menu">
        <Menu
          buttonHidden={buttonHidden}
          isChangeBackground={isChangeBackground}
          closeModalDisplayBg={() => setIsChangeBackground(false)}
          info={menuInfo}
          handleClick={onClickMenuButton}
          handlerClickModalDisplayBg={handlerClickModalDisplayBg}
        />
      </div>
      <Field />
      <Papers info={notesData} />
      <Sponge />
    </div>
  );
};

/* ---------------------------------------------------------------------------------- */

Wrapper = React.memo(Wrapper);

export default Wrapper;
