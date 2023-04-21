import React from "react";
import * as Images from "../../../utils/uploadingPictures";

const Image = ({ customStyle = "", id = "", alt = "Device" }) => {
  return (
    <img
      className={`${customStyle}`}
      src={Images[`img${id > 24 ? 0 : id}`]}
      alt={alt}
    />
  );
};

export default Image;
