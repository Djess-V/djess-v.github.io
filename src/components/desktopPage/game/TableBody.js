import React from "react";

let TableBody = ({ moves }) => {
  return <tbody>{moves}</tbody>;
};

/* ---------------------------------------------------------------------------------- */

TableBody = React.memo(TableBody);

export default TableBody;
