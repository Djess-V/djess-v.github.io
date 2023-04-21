import React from "react";
import { v4 } from "uuid";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { handleClickA } from "../store/reducerGame/gameSlice";

let TableTrTd = ({ index, style, desc, position, strHl }) => {
  const dispatch = useDispatch();

  return (
    <tr key={v4()} style={{ backgroundColor: style }}>
      <td className="game-table-td">
        <Button modify="" index={index} desc={desc} />
      </td>
      <td className="game-table-td">{position}</td>
      <td className="game-table-td">
        <button
          className="game-table-td__link"
          onClick={(e) => dispatch(handleClickA(e, index))}
        >
          {strHl}
        </button>
      </td>
    </tr>
  );
};

/* ---------------------------------------------------------------------------------- */

TableTrTd = React.memo(TableTrTd);

export default TableTrTd;
