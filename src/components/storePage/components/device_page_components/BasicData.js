import React, { useContext, useState } from "react";
import { Context } from "../../../../index";
import RatingChanges from "./RatingChanges";
import yellow_star from "../../assets/yellow-star.png";

const BasicData = () => {
  const { users, devices } = useContext(Context);

  const [deviceRated, setDeviceRated] = useState(false);

  const getBrand = (id) => {
    if (devices.brands.length === 0) {
      return "";
    }
    return devices.brands.filter((brand) => brand.id === id)[0].name;
  };

  return (
    <div className="data-device-page__data">
      <div className="data-device-page__data_brand">
        {getBrand(devices.selectedDevice.brandId)}
      </div>
      <div className="data-device-page__data_name-rating data-name-rating">
        <div className="data-name-rating__name">
          {devices.selectedDevice.name}
        </div>
        <div className="data-name-rating__rating">
          <span>{devices.selectedDevice.rating}</span>
          <img width={16} height={16} src={yellow_star} alt="Star" />
        </div>
      </div>
      <div className="data-device-page__data_change-rating data-change-rating">
        <RatingChanges
          deviceRated={() => {
            setDeviceRated(true);
            setTimeout(() => setDeviceRated(false), 5000);
          }}
        />
        <div className="data-change-rating__text">
          &#10229;&nbsp;{" "}
          {deviceRated ? "Спасибо за оценку!" : "Оцените устройство"}
        </div>
      </div>
      {!users.loggedIn && deviceRated && (
        <div className="data-change-rating__data_message">
          Для того чтобы Ваш рейтинг был учтён необходимо войти в систему!
        </div>
      )}
      <div className="data-device-page__price">
        Цена: {devices.selectedDevice.price} &#8381;
      </div>
    </div>
  );
};

export default BasicData;
