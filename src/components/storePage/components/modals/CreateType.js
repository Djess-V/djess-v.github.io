import React, { useContext, useState } from "react";
import { Context } from "../../../..";
import Modal from "../universalComponents/modal/Modal";
import FormInput from "../universalComponents/form/FormInput";
import { createTypeBrand } from "../../utils/servicesFunction";

const CreateType = ({
  onHide = (f) => f,
  showModalWindowExecution = (f) => f,
}) => {
  const { devices } = useContext(Context);
  const [value, setValue] = useState("");

  const addType = () => {
    if (value) {
      const newType = createTypeBrand(devices.types, value);

      devices.addType(newType);
      showModalWindowExecution("Тип создан!");
      setValue("");
    } else {
      showModalWindowExecution("Заполните имя типа!");
    }
  };

  return (
    <Modal
      title="Добавить тип"
      action="Добавить"
      onClick={addType}
      onHide={onHide}
    >
      <FormInput
        placeholder="Название типа"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </Modal>
  );
};

export default CreateType;
