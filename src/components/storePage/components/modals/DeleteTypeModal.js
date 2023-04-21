import React, { useContext, useState } from "react";
import { Context } from "../../../..";
import Modal from "../universalComponents/modal/Modal";
import FormInput from "../universalComponents/form/FormInput";
import { whetherSelected } from "../../utils/servicesFunction";

const DeleteTypeModal = ({
  onHide = (f) => f,
  showModalWindowExecution = (f) => f,
}) => {
  const { devices } = useContext(Context);

  const [name, setName] = useState("");

  const destroyType = () => {
    const typeExists = devices.types.find((item) => item.name === name);

    if (typeExists) {
      devices.deleteType(name);

      const selected = whetherSelected(devices.selectedType, name);

      if (selected) {
        devices.setSelectedType({});
        devices.setSelectedBrand({});
        devices.setSelectedDevices(devices.devices);
      }

      showModalWindowExecution(`Тип - "${name}" удалён!`);
      setName("");
    } else {
      showModalWindowExecution(`Тип - "${name}" не найден!`);
    }
  };

  return (
    <Modal
      title="Удалить тип"
      action="Удалить"
      onClick={destroyType}
      onHide={onHide}
    >
      <FormInput
        placeholder="Название типа"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </Modal>
  );
};

export default DeleteTypeModal;
