import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { Context } from "../../../index";
import BasketDeviceItem from "../components/basket_components/BasketDeviceItem";
import Total from "../components/basket_components/Total";
import RemoteBasketDevicesList from "../components/basket_components/RemoteBasketDevicesList";
import Execution from "../components/modals/Execution";
import Row from "../components/universalComponents/row/Row";
import Container from "../components/universalComponents/container/Container";
import Modal from "../components/universalComponents/modal/Modal";
import { LOGIN_ROUTE, ORDER_ROUTE } from "../utils/consts";
import {
  createOrder,
  createPendingPurchase,
  getBrandType,
} from "../utils/servicesFunction";

const Basket = observer(() => {
  const { users, devices, basket } = useContext(Context);
  const history = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const [orderIsProcessed, setOrderIsProcessed] = useState(false);

  const checkout = async () => {
    if (users.loggedIn) {
      const order = createOrder(users.user, basket.basketDevices);

      users.addOrder(order);

      if (basket.remoteDevices.length) {
        const pendingPurchase = createPendingPurchase(
          users.user,
          basket.remoteDevices
        );
        users.addPendingPurchase(pendingPurchase);
        basket.setRemoteDevices([]);
      }

      basket.setBasketDevices([]);
      basket.setTotalCount(0);

      setOrderIsProcessed(true);

      setTimeout(() => {
        setOrderIsProcessed(false);
        history(ORDER_ROUTE);
      }, 2000);
    } else {
      setShowModal(true);
    }
  };

  return (
    <>
      <div className="page-basket basket">
        <Container>
          <RemoteBasketDevicesList />

          {basket.basketDevices.length === 0 ? (
            <>
              <h4 className="basket__title">Корзина пуста</h4>
              <p className="basket__title">
                Для того, чтобы посмотреть список своих заказов -{" "}
                <Link to={users.loggedIn ? ORDER_ROUTE : LOGIN_ROUTE}>
                  {users.loggedIn ? "перейдите по ссылке." : "авторизуйтесь."}
                </Link>
              </p>
            </>
          ) : (
            <>
              <div className="basket-devices__title">
                Корзина
                <span className="basket-devices__title_quantity-icon">
                  {basket.totalCount > 99 ? "..." : basket.totalCount}
                </span>
              </div>
              <Row customStyle="basket__basket-devices basket-devices">
                {basket.basketDevices.map((item) => (
                  <BasketDeviceItem
                    key={item.id}
                    device={item}
                    brand={getBrandType(
                      null,
                      devices.brands,
                      null,
                      item.brandId
                    )}
                    type={getBrandType(devices.types, null, item.typeId, null)}
                  />
                ))}
              </Row>
              <div className="basket__total-basket total-basket">
                <Total checkout={checkout} />
              </div>
              {showModal && (
                <Modal
                  title="Подтвердите действие на странице"
                  action="Войти"
                  onClick={() => history(LOGIN_ROUTE)}
                  onHide={() => setShowModal(false)}
                >
                  <p>Чтобы оформить заказ, пожалуйста пройдите авторизацию!</p>
                </Modal>
              )}
            </>
          )}
        </Container>
      </div>
      {orderIsProcessed && <Execution message="Заказ оформлен" />}
    </>
  );
});

export default Basket;
