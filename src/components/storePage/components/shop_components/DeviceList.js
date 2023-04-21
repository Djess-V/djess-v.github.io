import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../../../../index";
import DeviceItem from "./DeviceItem";
import Row from "../universalComponents/row/Row";
import { isEmpty } from "../../utils/servicesFunction";

const DeviceList = observer(({ addItemToCart = (f) => f }) => {
  const { devices } = useContext(Context);

  const bottomLine = devices.limit * (devices.page - 1);
  const topLine = devices.limit * devices.page;

  let items = [];

  if (isEmpty(devices.selectedType) && isEmpty(devices.selectedBrand)) {
    items = devices.selectedDevices.map((device, i) => {
      if (i >= bottomLine && i < topLine) {
        return (
          <DeviceItem
            key={device.id}
            device={device}
            addItemToCart={addItemToCart}
          />
        );
      }
    });
  } else {
    items = devices.selectedDevices.map((device) => (
      <DeviceItem
        key={device.id}
        device={device}
        addItemToCart={addItemToCart}
      />
    ));
  }

  return (
    <Row customStyle="device-list-row__device-list device-list">{items}</Row>
  );
});

export default DeviceList;
