import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../../../../index";
import Card from "../universalComponents/card/Card";
import CardBody from "../universalComponents/card/CardBody";
import Button from "../universalComponents/Button";
import { getBrandType } from "../../utils/servicesFunction";

const Total = observer(({ checkout = (f) => f }) => {
  const { basket, devices } = useContext(Context);

  return (
    <Card>
      <CardBody>
        <h5 className="total-basket_title">ИТОГО</h5>
        <table className="total-basket__table">
          <tbody>
            {basket.basketDevices.map((device) => (
              <tr key={device.id}>
                <td style={{ lineHeight: "220%" }}>{`${getBrandType(
                  null,
                  devices.brands,
                  null,
                  device.brandId
                )} ${device.name}`}</td>

                <td style={{ textAlign: "end" }}>{`${device.count}шт`}</td>
                <td style={{ textAlign: "end" }}>{`${
                  device.price * device.count
                } руб.`}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="total-basket__buttons">
          <Button
            customStyle="total-basket__buttons_button total-basket__buttons_button_mode_order"
            variant="outline-success"
            onClick={checkout}
          >
            Оформить заказ
          </Button>
          <Button
            customStyle="total-basket__buttons_button"
            variant="outline-danger"
            onClick={() => basket.emptyTrash()}
          >
            Удалить все товары из корзины
          </Button>
        </div>
      </CardBody>
    </Card>
  );
});

export default Total;
