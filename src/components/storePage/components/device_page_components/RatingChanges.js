import React, { useContext, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../../../../index";
import yellow_star from "../../assets/yellow-star.png";
import black_star from "../../assets/black-star.png";

const RatingChanges = observer(({ deviceRated = (f) => f }) => {
  const [rating, setRating] = useState(null);

  const { users, devices } = useContext(Context);

  const sendRate = () => {
    if (users.loggedIn) {
      users.addRating({ deviceId: devices.selectedDevice.id, rating });
      devices.recalculateRating(rating);
    }
  };

  useEffect(() => {
    if (rating) {
      sendRate();
    }
  }, [rating]);

  return (
    <div className="data-change-rating__stars">
      {[...Array(5)].map((item, i) => {
        if (!rating) {
          return (
            <img
              key={i}
              width={16}
              height={16}
              src={yellow_star}
              alt="Star"
              onClick={() => {
                deviceRated();
                setRating(i + 1);
              }}
            />
          );
        } else {
          if (rating > i) {
            return (
              <img
                key={i}
                width={16}
                height={16}
                src={yellow_star}
                alt="Star"
                onClick={() => {
                  deviceRated();
                  setRating(i + 1);
                }}
              />
            );
          } else {
            return (
              <img
                key={i}
                width={16}
                height={16}
                src={black_star}
                alt="Star"
                onClick={() => {
                  deviceRated();
                  setRating(i + 1);
                }}
              />
            );
          }
        }
      })}
    </div>
  );
});

export default RatingChanges;
