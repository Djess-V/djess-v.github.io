import React from "react";
import Note from "./Note";

let Papers = ({ info }) => {
  return (
    <div className="papers">
      {info.map((item) => (
        <Note
          key={item.modificator}
          data={item.data}
          modificator={item.modificator}
        />
      ))}
    </div>
  );
};

/* ---------------------------------------------------------------------------------- */

Papers = React.memo(Papers);

export default Papers;
