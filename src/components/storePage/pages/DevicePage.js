import React, { useEffect, useState, useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../../../index";
import BasicData from "../components/device_page_components/BasicData";
import Execution from "../components/modals/Execution";
import Button from "../components/universalComponents/Button";
import Row from "../components/universalComponents/row/Row";
import Container from "../components/universalComponents/container/Container";
import Image from "../components/universalComponents/image/Image";

const DevicePage = observer(() => {
  const { devices, basket } = useContext(Context);

  const [addDevice, setAddDevice] = useState(false);

  const addToShoppingCart = async () => {
    if (addDevice) {
      const deviceInCart = basket.basketDevices.find(
        (item) => item.id === devices.selectedDevice.id
      );

      if (!deviceInCart) {
        basket.setBasketDevice(devices.selectedDevice);
      }

      const deviceInRemote = basket.remoteDevices.find(
        (item) => item.id === devices.selectedDevice.id
      );

      if (deviceInRemote) {
        basket.removeDeviceFromRemoteDevices(devices.selectedDevice);
      }

      setTimeout(() => setAddDevice(false), 1000);
    }
  };

  useEffect(() => {
    addToShoppingCart();
  }, [addDevice]);

  return (
    <>
      <div className="page__device-page device-page">
        <Container customStyle="device-page__container">
          <div className="device-page__main main-device-page">
            <div className="device-page__main_image">
              <Image
                customStyle="image-device-page"
                id={devices.selectedDevice.id}
              />
            </div>
            <div className="device-page__main_data data-device-page">
              <BasicData />
              <div className="data-device-page__basket-panel">
                <div className="data-device-page__basket-panel_prices basket-panel__prices">
                  <div className="basket-panel__prices_small">
                    {devices.selectedDevice.price}&#8381;
                  </div>
                  <div className="basket-panel__prices_big">
                    {(devices.selectedDevice.price * 1.35).toFixed(0)}&#8381;
                  </div>
                  <div className="basket-panel__prices_discount">
                    -
                    {
                      ~~(
                        (devices.selectedDevice.price * 100) /
                        (~~devices.selectedDevice.price * 1.35)
                      )
                    }
                    %
                  </div>
                </div>
                <a
                  className="data-device-page__basket-panel_link"
                  href="https://ru.wikipedia.org/wiki/%D0%A1%D0%BA%D0%B8%D0%B4%D0%BA%D0%B0"
                  target="_blank"
                  rel="noreferrer"
                >
                  Узнайте больше о скидках
                </a>
                <Button
                  customStyle="data-device-page__basket-panel_button"
                  variant="info"
                  onClick={() => setAddDevice(true)}
                >
                  Добавить в корзину
                </Button>
                <div className="data-device-page__basket-panel_delivery">
                  Доставка <span>завтра</span>
                </div>
              </div>
            </div>
          </div>
          <div className="device-page__description">
            <h2 className="device-page__description_title">Описание</h2>
            <p className="device-page__description_text">
              {devices.selectedDevice.description}
            </p>
          </div>
          <div className="device-page__records">
            <h2 className="m-2">Характеристики</h2>
            {devices.selectedDevice.info.length ? (
              devices.selectedDevice.info.map((info, index) => (
                <Row
                  key={index}
                  customStyle="device-page__records_record"
                  style={{
                    backgroundColor: `${
                      index % 2 === 0 ? "lightgreen" : "transparent"
                    }`,
                  }}
                >
                  {" "}
                  {info.title}: {info.description}
                </Row>
              ))
            ) : (
              <p>Нет характеристик!</p>
            )}
          </div>
        </Container>
      </div>
      {addDevice && <Execution message="Товар добавлен в корзину" />}
    </>
  );
});

export default DevicePage;
