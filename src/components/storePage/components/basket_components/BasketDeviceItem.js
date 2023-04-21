import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../../../../index";
import Card from "../universalComponents/card/Card";
import CardBody from "../universalComponents/card/CardBody";
import Button from "../universalComponents/Button";
import Image from "../universalComponents/image/Image";

const BasketDeviceItem = observer(({ device, brand, type }) => {
  const { basket } = useContext(Context);

  const changeCountDevice = async (id, bool) => {
    if (bool) {
      basket.changeCountBasketDevice(id, bool);
    } else {
      basket.changeCountBasketDevice(id, bool);
    }
  };

  return (
    <Card
      customStyle="basket-devices__basket-device basket-device"
      style={{
        width: "16rem",
      }}
    >
      <Image customStyle="basket-device__image" id={device.id} />
      <CardBody className="basket-device__body">
        <h5 className="basket-device__body_brand">{brand}</h5>
        <p className="basket-device__body_name">{device.name}</p>
        <div className="basket-device__body_category category-basket-device">
          <div className="category-basket-device__title">Категория:</div>
          <div className="category-basket-device__type">{type}</div>
        </div>
        <div className="basket-device__body_quantity quantity-basket-device">
          <div className="quantity-basket-device__title">Количество:</div>
          <div className="quantity-basket-device__count">
            <div
              className="quantity-basket-device__count_dicr"
              style={{
                opacity: `${device.count === 1 ? "0.3" : "1"}`,
              }}
              onClick={() => changeCountDevice(device.id, false)}
              title="Уменьшить"
            >
              -
            </div>
            <div className="quantity-basket-device__count_count">
              {device.count}
            </div>
            <div
              className="quantity-basket-device__count_incr"
              onClick={() => changeCountDevice(device.id, true)}
              title="Увеличить"
            >
              +
            </div>
          </div>
        </div>
        <div className="basket-device__body_price price-basket-device">
          <div className="price-basket-device__title">Стоимость:</div>
          <div className="price-basket-device__price">{`${
            Number(device.price) * device.count
          } руб.`}</div>
        </div>
      </CardBody>
      <div className="basket-device__button">
        <Button
          variant="outline-danger"
          onClick={() => basket.removeBasketDevice(device)}
        >
          Удалить из корзины
        </Button>
      </div>
    </Card>
  );
});

export default BasketDeviceItem;
