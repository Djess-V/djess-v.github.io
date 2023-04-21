import React from "react";
import { Link } from "react-router-dom";
import Icon from "./Icon";

let Contacts = () => {
  const icons = [...Array(5)].map((icon, i) => <Icon key={i} index={i} />);

  return (
    <section id="Contacts" className="MPpage__contacts contactsMP">
      <div className="MPcontacts__container _containerMP">
        <div className="MPcontacts__body">
          <h2 className="MPcontacts__title default-titleMP">Contacts</h2>
          <p className="MPcontacts__text">
            Want to know more or just chat? <br />
            You are welcome!
          </p>
          <div className="MPcontacts__button MPcontacts__button_email">
            <a href="mailto:e.ageevets@yandex.ru">e.ageevets@yandex.ru</a>
          </div>
          <div className="MPcontacts__button MPcontacts__button_tel">
            <a href="tel:+79504101509">+7-950-410-15-09</a>
          </div>
          <div className="MPcontacts__button MPcontacts__button_resume">
            <Link to={"/summary"}>Summary</Link>
          </div>
          <div className="MPcontacts__icons">{icons}</div>
          <p className="MPcontacts__tagline">Peace to your home!</p>
        </div>
      </div>
    </section>
  );
};

Contacts = React.memo(Contacts);

export default Contacts;
