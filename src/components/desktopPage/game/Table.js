import React from "react";
import TableBody from "./TableBody";
import TableHead from "./TableHead";

let Table = ({ moves }) => {
  return (
    <>
      <TableHead />
      <TableBody moves={moves} />
    </>
  );
};

/* ---------------------------------------------------------------------------------- */

Table = React.memo(Table);

export default Table;
