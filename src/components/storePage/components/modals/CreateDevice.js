import React, { useContext, useState, useRef } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../../../../index";
import Dropdown from "../universalComponents/dropdown/Dropdown";
import Modal from "../universalComponents/modal/Modal";
import Button from "../universalComponents/Button";
import FormInput from "../universalComponents/form/FormInput";

const description =
  "Выпуску первых телевизоров предшествовала история изобретения самого телевидения, в которой активно участвовали русские ученые Константин Перский (первым использовавший термин «телевидение»), Борис Розинг (получивший первый патент на используемые до сих пор технологии электронного телевидения) и его ученик Владимир Зворыкин, который считается одним из создателей современного телевидения: изобретенный им иконоскоп стал прорывом в сфере четкости изображения и позволил приступить к массовому производству телевизионных приемников.\r\n\r\nКроме того, первую в истории (после Логи Бэрда в 1926) передачу движущегося изображения при помощи электронно-лучевой трубки осуществили 26 июля 1928 года в Ташкенте советские изобретатели Б. П. Грабовский и И. Ф. Белянский[1].\r\n\r\nПервые серийные телевизионные приемники «Вижнетт» (англ. Visionette) с 45-строчной механической развёрткой начали выпускаться американской компанией Western Television в 1929 году по цене чуть меньше 100 долларов[2]. Изображение таких телевизоров чаще всего было не крупнее почтовой марки, и даже при увеличении с помощью линзы могло рассматриваться одним человеком. Невысокая чёткость позволяла различать лишь общие контуры предметов и узнавать лица на очень крупных планах. Из-за неудовлетворительного качества механические телевизоры не получили широкого распространения, оставаясь экзотикой. Кроме того, механические телевизоры выполнялись в виде приставки к радиоприёмнику, который служил для приёма видеосигнала. Для приёма звукового сопровождения был нужен ещё один радиоприёмник, настроенный на другую частоту.\r\n\r\nПревращение телевизоров в привычный предмет быта связано с появлением электронного телевидения, полностью основанного на электровакуумных приборах. Массовое производство телевизоров было впервые налажено в Германии, где с 1934 года телестанцией DFR («Deutscher Fernseh-Rundfunk» — «Немецкое телевизионное радиовещание») были начаты регулярные передачи по 180-строчной системе. Первые серийные телевизоры с кинескопом выпущены в том же году компанией Telefunken[3]. Спустя два года производство электронных телевизоров было налажено в большинстве развитых стран: Франции, Великобритании и США. Самая дешёвая модель с диагональю экрана 30 сантиметров продавалась по цене 445 долларов, что сегодня составило бы почти семь с половиной тысяч[4]. В СССР эксперименты по электронному телевидению начались в 1929 году, а 1 сентября 1938 года стартовали регулярные трансляции в стандарте разложения 120 строк[5]. Серийный выпуск электронных телевизоров начался в 1940 году, но освоению их массового производства помешала начавшаяся война.";

const CreateDevice = observer(
  ({ onHide = (f) => f, showModalWindowExecution = (f) => f }) => {
    const [selectedType, setSelectedType] = useState("");
    const [selectedBrand, setSelectedBrand] = useState("");
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState("");
    const [desc, setDesc] = useState(null);
    const [descName, setDescName] = useState("");
    const [info, setInfo] = useState([]);

    const imageRef = useRef();
    const descRef = useRef();

    const { devices } = useContext(Context);

    const selectedFile = (e, condition) => {
      const file = e.target.files[0];

      if (condition === "image") {
        if (file === undefined) {
          if (fileName) {
            setFileName("");
          }
          return;
        }
        if (file.type !== "image/webp" && file.type !== "image/jpeg") {
          setFileName("Выберите правильный формат файла!");
          setTimeout(() => setFileName(""), 2000);
          return;
        }
        setFile(file);
        setFileName(file.name);
      } else if (condition === "desc") {
        if (file === undefined) {
          if (descName) {
            setDescName("");
          }
          return;
        }
        if (file.type !== "text/plain") {
          setDescName("Выберите правильный формат файла!");
          setTimeout(() => setDescName(""), 2000);
          return;
        }
        setDesc(file);
        setDescName(file.name);
      }
    };

    const addInfo = () => {
      setInfo([...info, { title: "", description: "", number: Date.now() }]);
    };

    const removeInfo = (number) => {
      setInfo(info.filter((i) => i.number !== number));
    };

    const changeInfo = (key, value, number) => {
      setInfo(
        info.map((i) => (i.number === number ? { ...i, [key]: value } : i))
      );
    };

    const addDevice = () => {
      if (selectedType && selectedBrand && name && price && file && desc) {
        const newDevice = {
          id: devices.devices[devices.devices.length - 1].id + 1,
          name,
          price,
          rating: 5,
          img: "funny_mobile.jpg",
          description,
          brandId: selectedBrand.id,
          typeId: selectedType.id,
          info,
        };

        devices.addDevice(newDevice);
        showModalWindowExecution("Устройство добавлено!");
        setSelectedType("");
        setSelectedBrand("");
        setName("");
        setPrice("");
        setFile(null);
        setFileName("");
        setDesc(null);
        setDescName("");
        setInfo([]);
      } else {
        showModalWindowExecution("Вы не заполнили все обязательные поля!");
      }
    };

    return (
      <Modal
        title="Добавить устройство"
        action="Добавить"
        onClick={addDevice}
        onHide={onHide}
      >
        <Dropdown
          items={devices.types}
          nameToggle={selectedType.name || "Выберите тип"}
          selectItem={setSelectedType}
        />
        <Dropdown
          items={devices.brands}
          nameToggle={selectedBrand.name || "Выберите бренд"}
          selectItem={setSelectedBrand}
        />

        <FormInput
          placeholder="Название устройства"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <FormInput
          placeholder="Стоимость устройства"
          type="number"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
        />
        <Button
          customStyle="store-create-device_button-addImg"
          variant="primary"
          onClick={() => imageRef.current.click()}
        >
          Выберите изображение (*.webp, *.jpg)
        </Button>
        <div>{fileName}</div>
        <input
          type="file"
          ref={imageRef}
          style={{ display: "none" }}
          placeholder="Изображение"
          onChange={(e) => selectedFile(e, "image")}
        />
        <Button
          customStyle="store-create-device_button-addDesc"
          variant="primary"
          onClick={() => descRef.current.click()}
        >
          Выберите файл описания (*.txt)
        </Button>
        <div>{descName}</div>
        <input
          type="file"
          ref={descRef}
          style={{ display: "none" }}
          placeholder="Описание"
          onChange={(e) => selectedFile(e, "desc")}
        />
        <hr />
        <Button
          customStyle="store-create-device_button-addInfo"
          variant="outline-dark"
          onClick={addInfo}
        >
          Добавить свойство
        </Button>
        {info.map((i) => (
          <div className="store-create-device__info_item" key={i.number}>
            <FormInput
              value={i.title}
              onChange={(e) => changeInfo("title", e.target.value, i.number)}
              placeholder="Название"
            />
            <FormInput
              value={i.description}
              onChange={(e) =>
                changeInfo("description", e.target.value, i.number)
              }
              placeholder="Описание"
            />
            <Button
              variant="outline-danger"
              onClick={() => removeInfo(i.number)}
            >
              Удалить
            </Button>
          </div>
        ))}
      </Modal>
    );
  }
);

export default CreateDevice;
