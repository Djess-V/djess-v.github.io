import React from "react";
import { FcDown, FcUp } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { clickHistory } from "../store/reducerGame/gameSlice";

let TableHead = () => {
  const dispatch = useDispatch();

  return (
    <thead>
      <tr>
        <th className="game-table-th">
          <span className="game-table-th__span">История</span>
          <button
            className="game-table-th-sort game-table-th-sort_mode_up"
            onClick={(e) => dispatch(clickHistory(e))}
          >
            <FcUp fill="#0ee8f8" />
          </button>
          <button
            className="game-table-th-sort game-table-th-sort_mode_down"
            onClick={(e) => dispatch(clickHistory(e))}
          >
            <FcDown fill="#0ee8f8" />
          </button>
        </th>
        <th className="game-table-th game-table-th_style_short">Позиция</th>
        <th className="game-table-th">Выделить</th>
      </tr>
    </thead>
  );
};

/* ---------------------------------------------------------------------------------- */

TableHead = React.memo(TableHead);

export default TableHead;
