import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../../../../index";
import AccordionItem from "../universalComponents/accordion/AccordionItem";
import Image from "../universalComponents/image/Image";
import { calculateDataForFieldTotalPageOrderItem } from "../../utils/servicesFunction";
import { getBrandType } from "../../utils/servicesFunction";

const OrderItem = observer(({ order }) => {
  const { devices } = useContext(Context);

  const dataForFieldTotal = calculateDataForFieldTotalPageOrderItem(
    order.devices
  );

  return (
    <AccordionItem title={`Заказ от ${order.created}г.`}>
      <ul className="orders__list">
        {order.devices.map((item) => {
          const device = devices.devices.find(
            (device) => device.id === item.id
          );

          return (
            <li key={item.id} className="orders__item">
              <div className="orders__image-name">
                <Image customStyle="orders__image-name_image" id={item.id} />
                <div className="orders__image-name_name">
                  <p>
                    {getBrandType(null, devices.brands, null, device.brandId)}
                  </p>
                  <p>{device.name}</p>
                </div>
              </div>
              <div className="orders__item_amount">
                <p>{`Количество - ${item.count}шт.`}</p>
                <p>{`Цена - ${item.price}руб.`}</p>
                <p>{`Сумма - ${item.count * item.price}руб.`}</p>
              </div>
            </li>
          );
        })}
      </ul>
      <hr />
      <div className="orders__total">
        <p>ИТОГО</p>
        <div>
          <p>{`Количество - ${dataForFieldTotal.totalCount}шт.`}</p>
          <p>{`Сумма - ${dataForFieldTotal.totalSum}руб.`}</p>
        </div>
      </div>
    </AccordionItem>
  );
});

export default OrderItem;
