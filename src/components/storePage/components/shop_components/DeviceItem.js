import React, { useCallback, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { Context } from "../../../../index";
import Card from "../universalComponents/card/Card";
import Button from "../universalComponents/Button";
import Image from "../universalComponents/image/Image";
import { DEVICE_ROUTE } from "../../utils/consts";
import star from "../../assets/yellow-star.png";

const DeviceItem = observer(({ device, addItemToCart = (f) => f }) => {
  const { devices, basket } = useContext(Context);
  const history = useNavigate();

  const [addDevice, setAddDevice] = useState(false);

  const brand = devices.brands.find((item) => item.id === device.brandId);

  const selectDevice = useCallback(() => {
    devices.setSelectedDevice(device);
    history(DEVICE_ROUTE + "/" + device.id);
  }, [devices, history]);

  const addToShoppingCart = async () => {
    if (addDevice) {
      const basketDevice = basket.basketDevices.find(
        (item) => item.id === device.id
      );
      if (!basketDevice) {
        basket.setBasketDevice(device);
      }

      const remoteBasketDevice = basket.remoteDevices.find(
        (item) => item.id === device.id
      );
      if (remoteBasketDevice) {
        basket.removeDeviceFromRemoteDevices(device);
      }

      setAddDevice(false);
    }
  };

  useEffect(() => {
    addToShoppingCart();
  }, [addDevice]);

  return (
    <div className="device-list__device-item device-item">
      <Card
        title={`Для того, чтобы посмотреть дополнительную 
информацию о товаре - нажмите на карточку`}
        customStyle="device-item__card-device-item card-device-item"
        onClick={() => selectDevice()}
      >
        <Image
          customStyle="device-item__card-device-item_image"
          id={device.id}
        />
        <div className="card-device-item__brand-rating brand-rating">
          <div className="card-device-item__brand-rating_brand">
            {brand.name}
          </div>
          <div className="brand-rating__rating">
            <div className="brand-rating__rating_count">{device.rating}</div>
            <img className="brand-rating__rating_image" src={star} alt="Star" />
          </div>
        </div>
        <div className="card-device-item__name">{device.name}</div>
        <div className="card-device-item__price">Цена: {device.price} руб.</div>
        <Button
          customStyle="card-device-item__button"
          variant="info"
          onClick={(e) => {
            e.stopPropagation();
            setAddDevice(true);
            addItemToCart();
          }}
        >
          В корзину
        </Button>
      </Card>
    </div>
  );
});

export default DeviceItem;
