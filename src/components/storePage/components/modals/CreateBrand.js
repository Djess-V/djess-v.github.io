import React, { useContext, useState } from "react";
import { Context } from "../../../..";
import Modal from "../universalComponents/modal/Modal";
import FormInput from "../universalComponents/form/FormInput";
import { createTypeBrand } from "../../utils/servicesFunction";

const CreateBrand = ({
  onHide = (f) => f,
  showModalWindowExecution = (f) => f,
}) => {
  const { devices } = useContext(Context);
  const [value, setValue] = useState("");

  const addBrand = () => {
    if (value) {
      const newBrand = createTypeBrand(devices.brands, value);

      devices.addBrand(newBrand);
      showModalWindowExecution("Бренд создан!");
      setValue("");
    } else {
      showModalWindowExecution("Заполните имя бренда!");
    }
  };

  return (
    <Modal
      title="Добавить бренд"
      action="Добавить"
      onClick={addBrand}
      onHide={onHide}
    >
      <FormInput
        placeholder="Название бренда"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </Modal>
  );
};

export default CreateBrand;
