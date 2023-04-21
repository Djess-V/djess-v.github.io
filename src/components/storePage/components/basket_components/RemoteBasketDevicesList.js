import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../../../../index";
import Card from "../universalComponents/card/Card";
import CardBody from "../universalComponents/card/CardBody";
import Button from "../universalComponents/Button";
import Image from "../universalComponents/image/Image";
import { getBrandType } from "../../utils/servicesFunction";

const RemoteBasketDevicesList = observer(() => {
  const { basket, devices } = useContext(Context);

  return (
    <>
      {basket.remoteDevices.length > 0 && (
        <Card customStyle="basket__remote-devices remote-devices">
          <CardBody>
            <h5 className="remote-devices__title">Удалённые устройства</h5>
            <hr />
            <ul className="remote-devices__list-remote-devices list-remote-devices">
              {basket.remoteDevices.map((device) => (
                <li
                  key={device.id}
                  className="list-remote-devices__remote-device remote-device"
                >
                  <div className="remote-device__image-name">
                    <Image
                      customStyle="remote-device__image-name_image"
                      id={device.id}
                    />
                    <div className="remote-device__image-name_name">{`${getBrandType(
                      null,
                      devices.brands,
                      null,
                      device.brandId
                    )} ${device.name}`}</div>
                  </div>
                  <Button
                    customStyle="remote-device__button"
                    variant="outline-success"
                    onClick={() => basket.reestablishBasketDevice(device)}
                  >
                    Восстановить
                  </Button>
                </li>
              ))}
            </ul>
          </CardBody>
        </Card>
      )}
    </>
  );
});

export default RemoteBasketDevicesList;
