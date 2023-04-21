import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import OrderItem from "../components/orders_components/OrderItem";
import { Context } from "../../..";
import Accordion from "../components/universalComponents/accordion/Accordion";
import Container from "../components/universalComponents/container/Container";

const Orders = observer(() => {
  const { users } = useContext(Context);

  return (
    <div className="page-orders orders">
      <Container>
        <h5>Список заказов:</h5>
        <hr />
        <Accordion customStyle="orders__orders">
          {users.user.orders.map((order, i) => (
            <OrderItem key={order.id} order={order} />
          ))}
        </Accordion>
      </Container>
    </div>
  );
});

export default Orders;
