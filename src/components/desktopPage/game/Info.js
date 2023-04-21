import React from "react";
import Button from "./Button";

let Info = ({ moves, status }) => {
  return (
    <>
      <div className="game-info__status">{status}</div>
      <Button modify="start" desc="Ещё разочек..." moves={moves} />
    </>
  );
};

/* ---------------------------------------------------------------------------------- */

Info = React.memo(Info);

export default Info;
