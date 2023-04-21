import React from "react";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

let YandexMap = () => {
  const [zoom] = React.useState(10);
  const mapState = React.useMemo(
    () => ({ center: [56.02081101239866, 92.8571793681262], zoom }),
    [zoom]
  );

  return (
    <YMaps
      query={{
        lang: "ru_RU",
        load: "package.full",
      }}
    >
      <Map state={mapState} height="240px" width="350px">
        <Placemark
          defaultGeometry={[56.02081101239866, 92.8571793681262]}
          properties={{
            balloonContentBody:
              "This is balloon loaded by the Yandex.Maps API module system",
          }}
        />
      </Map>
    </YMaps>
  );
};

/* ---------------------------------------------------------------------------------- */

YandexMap = React.memo(YandexMap);

export default YandexMap;
