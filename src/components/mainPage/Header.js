import React from "react";

const menuLink = ["Home", "About Me", "Skills", "Portfolio", "Contacts"];

let Header = () => {
  const lis = menuLink.map((link, i) => (
    <li key={i} className="MPmenu__item">
      <a href={`#${link}`} className="MPmenu__link">
        {link}
      </a>
    </li>
  ));

  return (
    <header className="MPheader">
      <div className="MPheader__container _containerMP">
        <nav className="MPheader_menu menuMP">
          <ul className="MPmenu__list">{lis}</ul>
        </nav>
      </div>
    </header>
  );
};

Header = React.memo(Header);

export default Header;
