import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../../../../index";
import Pagination from "../universalComponents/pagination/Pagination";
import PaginationItem from "../universalComponents/pagination/PaginationItem";

const Pages = observer(() => {
  const { devices } = useContext(Context);

  let pageCount;

  if (devices.selectedDevices.length === 0) {
    pageCount = Math.ceil(devices.devices.length / devices.limit);
  } else {
    pageCount = Math.ceil(devices.selectedDevices.length / devices.limit);
  }

  const pages = [];

  for (let i = 0; i < pageCount; i++) {
    pages.push(i + 1);
  }

  return (
    <Pagination customStyle="shop__pagination-shop-row pagination-shop">
      {pages.map((page) => (
        <PaginationItem
          key={page}
          active={devices.page === page}
          onClick={() => devices.setPage(page)}
        >
          {page}
        </PaginationItem>
      ))}
    </Pagination>
  );
});

export default Pages;
