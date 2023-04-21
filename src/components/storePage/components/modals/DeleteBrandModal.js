import React, { useContext, useState } from "react";
import { Context } from "../../../..";
import Modal from "../universalComponents/modal/Modal";
import FormInput from "../universalComponents/form/FormInput";
import { whetherSelected } from "../../utils/servicesFunction";

const DeleteBrandModal = ({
  onHide = (f) => f,
  showModalWindowExecution = (f) => f,
}) => {
  const { devices } = useContext(Context);

  const [name, setName] = useState("");

  const destroyBrand = () => {
    const brandExists = devices.brands.find((item) => item.name === name);

    if (brandExists) {
      devices.deleteBrand(name);

      const selected = whetherSelected(devices.selectedBrand, name);

      if (selected) {
        devices.setSelectedBrand({});
        devices.setSelectedType({});
        devices.setSelectedDevices(devices.devices);
      }

      showModalWindowExecution(`Бренд - "${name}" удалён!`);
      setName("");
    } else {
      showModalWindowExecution(`Бренд - "${name}" не найден!`);
    }
  };

  return (
    <Modal
      title="Удалить бренд"
      action="Удалить"
      onClick={destroyBrand}
      onHide={onHide}
    >
      <FormInput
        placeholder="Название бренда"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </Modal>
  );
};

export default DeleteBrandModal;
