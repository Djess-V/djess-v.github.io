import React, { useContext, useState } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../../../index";
import Pages from "../components/shop_components/Pages";
import DeviceList from "../components/shop_components/DeviceList";
import Execution from "../components/modals/Execution";
import Button from "../components/universalComponents/Button";
import Row from "../components/universalComponents/row/Row";
import Container from "../components/universalComponents/container/Container";
import Modal from "../components/universalComponents/modal/Modal";
import ListGroup from "../components/universalComponents/list/ListGroup";
import ListItem from "../components/universalComponents/list/ListItem";
import { changeSelectedDevices } from "../utils/servicesFunction";
import { isEmpty } from "../utils/servicesFunction";

const Shop = observer(() => {
  const { devices } = useContext(Context);

  const [showTypes, setShowTypes] = useState(false);
  const [showBrands, setShowBrands] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);
  const [notFound, setNotFound] = useState(false);

  const displayDirectory = (field) => {
    if (field === "types") {
      setShowTypes(true);
    } else {
      setShowBrands(true);
    }
  };

  const highlightListItem = (type, brand) => {
    let selectedDevices = [];

    if (type) {
      const selectedType = { ...type };

      selectedDevices = changeSelectedDevices(
        devices.devices,
        selectedType.id,
        devices.selectedBrand.id
      );

      devices.setSelectedType(selectedType);
    } else {
      const selectedBrand = { ...brand };

      selectedDevices = changeSelectedDevices(
        devices.devices,
        devices.selectedType.id,
        selectedBrand.id
      );

      devices.setSelectedBrand(selectedBrand);
    }

    if (selectedDevices.length === 0) {
      setNotFound(true);
    } else {
      setNotFound(false);
    }

    devices.setSelectedDevices(selectedDevices);
  };

  return (
    <>
      {" "}
      <div className="page-shop shop">
        <Container>
          <Row customStyle="shop__row">
            <Button
              customStyle="shop__row_type-or-brand-button"
              variant="outline-success"
              onClick={() => displayDirectory("types")}
            >
              {isEmpty(devices.selectedType)
                ? "Выберите тип устройства"
                : devices.selectedType.name}
            </Button>
          </Row>
          <Row customStyle="shop__row">
            <Button
              customStyle="shop__row_type-or-brand-button"
              variant="outline-success"
              onClick={() => displayDirectory("brands")}
            >
              {isEmpty(devices.selectedBrand)
                ? "Выберите бренд устройства"
                : devices.selectedBrand.name}
            </Button>
          </Row>
          {notFound && (
            <div className="shop__row shop-message-not-found">
              К сожалению по Вашему запросу ничего не найдено!
            </div>
          )}
          <div className="shop__device-list-row device-list-row shop__row">
            <DeviceList
              addItemToCart={() => {
                setAddedToCart(true);
                setTimeout(() => setAddedToCart(false), 1000);
              }}
            />
            {!notFound && <Pages />}
          </div>
          {showTypes && (
            <Modal
              title="Выберите тип устройства"
              onHide={() => setShowTypes(false)}
            >
              <ListGroup>
                <ListItem
                  active={isEmpty(devices.selectedType)}
                  onClick={() => highlightListItem({}, null)}
                >
                  Все типы
                </ListItem>
                {devices.types.map((type) => (
                  <ListItem
                    key={type.id}
                    active={type.id === devices.selectedType.id}
                    onClick={() => highlightListItem(type, null)}
                  >
                    {type.name}
                  </ListItem>
                ))}
              </ListGroup>
            </Modal>
          )}
          {showBrands && (
            <Modal
              title="Выберите бренд устройства"
              onHide={() => setShowBrands(false)}
            >
              <ListGroup>
                <ListItem
                  active={isEmpty(devices.selectedBrand)}
                  onClick={() => highlightListItem(null, {})}
                >
                  Все бренды
                </ListItem>
                {devices.brands.map((brand) => (
                  <ListItem
                    key={brand.id}
                    active={brand.id === devices.selectedBrand.id}
                    onClick={() => highlightListItem(null, brand)}
                  >
                    {brand.name}
                  </ListItem>
                ))}
              </ListGroup>
            </Modal>
          )}
        </Container>
      </div>
      {addedToCart && <Execution message="Товар добавлен в корзину" />}
    </>
  );
});

export default Shop;
