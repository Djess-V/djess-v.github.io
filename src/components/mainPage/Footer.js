import React from "react";
import Contacts from "./contacts/Contacts";

let Footer = () => {
  return (
    <footer className="MPfooter">
      <Contacts />
    </footer>
  );
};

Footer = React.memo(Footer);

export default Footer;
