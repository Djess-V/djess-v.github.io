import React from "react";
import mainImage from "./img/home_image.png";
import menuIcon from "./img/nav_icon.png";

import PopUpMenu from "./PopUpMenu";

let Home = () => {
  const [isPopUpMenu, setIsPopUpMenu] = React.useState(false);

  const handleClick = () => {
    setIsPopUpMenu(!isPopUpMenu);
  };

  return (
    <>
      {isPopUpMenu && <PopUpMenu handleClick={handleClick} />}
      <section id="Home" className="MPpage__home homeMP">
        <div className="MPhome__container _containerMP">
          <div className="MPhome__body">
            <div className="MPhome__about">
              <div className="MPhome__items1">
                <h1 className="MPhome__title">
                  Ageevets <br />
                  Evgeniy
                </h1>
                <div className="MPhome__text">
                  Developer, <br />
                  37 years old, <br />
                  Krasnoyarsk
                </div>
              </div>
              <div className="MPhome__items2">
                {!isPopUpMenu && (
                  <div className="MPhome__icon" onClick={handleClick}>
                    <img src={menuIcon} alt="Menu" />
                  </div>
                )}
                <div className="MPhome__lang">
                  <span className="MPhome__lang_ru MPhome__lang_ru_status_active">
                    RU
                  </span>
                  |<span className="MPhome__lang_eng">ENG</span>
                </div>
              </div>
            </div>
            <div className="MPhome__image">
              <img src={mainImage} alt="I'm" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

Home = React.memo(Home);

export default Home;
