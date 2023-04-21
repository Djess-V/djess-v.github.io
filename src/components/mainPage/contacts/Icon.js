import React from "react";
import vk from "./img/vk.svg";
import whatsapp from "./img/whatsapp.svg";
import viber from "./img/viber.svg";
import youtube from "./img/youtube.svg";
import telegram from "./img/telegram.svg";

const contactsIcons = [vk, whatsapp, viber, youtube, telegram];

const contactsIconsName = ["VK", "Whatsapp", "Viber", "Youtube", "Telegram"];

let Icon = ({ index }) => {
  return (
    <div className="MPcontacts__icons_icon">
      <img src={contactsIcons[index]} alt={contactsIconsName[index]} />
    </div>
  );
};

Icon = React.memo(Icon);

export default Icon;
