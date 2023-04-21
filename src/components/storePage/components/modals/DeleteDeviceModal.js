import React, { useContext, useState } from "react";
import { Context } from "../../../..";
import Modal from "../universalComponents/modal/Modal";
import FormInput from "../universalComponents/form/FormInput";
import { whetherSelected } from "../../utils/servicesFunction";

const DeleteDeviceModal = ({
  onHide = (f) => f,
  showModalWindowExecution = (f) => f,
}) => {
  const { devices } = useContext(Context);

  const [id, setId] = useState("");
  const [name, setName] = useState("");

  const destroyDevice = () => {
    let deviceExists;

    const _id = Number(id);

    if (!id && !name) {
      showModalWindowExecution("Заполните хотя бы одно из полей!");
      return;
    }

    if (_id) {
      deviceExists = devices.devices.find((item) => item.id === _id);

      if (deviceExists) {
        devices.deleteDevice(_id, null);
        devices.setSelectedDevices(devices.devices);

        if (whetherSelected(devices.selectedDevice, null, _id)) {
          devices.setSelectedDevice({});
        }

        showModalWindowExecution("Устройство удалёно!");
        return;
      }
    }

    deviceExists = devices.devices.find((item) => item.name === name);

    if (deviceExists) {
      devices.deleteDevice(null, name);
      devices.setSelectedDevices(devices.devices);

      if (whetherSelected(devices.selectedDevice, name)) {
        devices.setSelectedDevice({});
      }

      showModalWindowExecution("Устройство удалёно!");
      setId("");
      setName("");
    } else {
      showModalWindowExecution("Устройство не найдено!");
    }
  };

  return (
    <Modal
      title="Удалить устройство"
      action="Удалить"
      onClick={destroyDevice}
      onHide={onHide}
    >
      <FormInput
        placeholder="Id устройства"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <FormInput
        placeholder="Название устройства"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </Modal>
  );
};

export default DeleteDeviceModal;
