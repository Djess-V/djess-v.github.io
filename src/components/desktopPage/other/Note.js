import React from "react";
import cupidon from "../assets/img/other/cupidon.png";
import snowman from "../assets/img/other/snowman.png";
import stars from "../assets/img/other/stars.png";
import girls from "../assets/img/other/girls-fly-peace-pigeons.png";

const image = [cupidon, snowman, stars, girls];

let Note = ({ data, modificator }) => {
  return (
    <div className={`note_${modificator}`}>
      {data.map((item) => (
        <p key={item}>{item}</p>
      ))}
      <img
        className={`image_${modificator}`}
        src={image[modificator - 1]}
        alt=""
      />
    </div>
  );
};

/* ---------------------------------------------------------------------------------- */

Note = React.memo(Note);

export default Note;
