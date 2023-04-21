import React, { useState } from "react";
import CreateType from "../components/modals/CreateType";
import CreateBrand from "../components/modals/CreateBrand";
import CreateDevice from "../components/modals/CreateDevice";
import DeleteUserModal from "../components/modals/DeleteUserModal";
import DeleteTypeModal from "../components/modals/DeleteTypeModal";
import DeleteBrandModal from "../components/modals/DeleteBrandModal";
import DeleteDeviceModal from "../components/modals/DeleteDeviceModal";
import Execution from "../components/modals/Execution";
import Button from "../components/universalComponents/Button";
import Container from "../components/universalComponents/container/Container";

const initialModalPanel = {
  showTypeModal: false,
  showBrandModal: false,
  showDeviceModal: false,
  showDeleteUserModal: false,
  showDeleteTypeModal: false,
  showDeleteBrandModal: false,
  showDeleteDeviceModal: false,
  showExecution: false,
  message: "",
};

const modalsInfo = [
  { text: "Добавить новый тип", modal: "showTypeModal", Component: CreateType },
  {
    text: "Добавить новый бренд",
    modal: "showBrandModal",
    Component: CreateBrand,
  },
  {
    text: "Добавить новое устройство",
    modal: "showDeviceModal",
    Component: CreateDevice,
  },
  {
    text: "Удалить пользователя",
    modal: "showDeleteUserModal",
    Component: DeleteUserModal,
  },
  {
    text: "Удалить тип",
    modal: "showDeleteTypeModal",
    Component: DeleteTypeModal,
  },
  {
    text: "Удалить бренд",
    modal: "showDeleteBrandModal",
    Component: DeleteBrandModal,
  },
  {
    text: "Удалить устройство",
    modal: "showDeleteDeviceModal",
    Component: DeleteDeviceModal,
  },
];

const Admin = () => {
  const [modalPanel, setModalPanel] = useState(initialModalPanel);

  const handlerClick = (type) => {
    setModalPanel({ ...modalPanel, [type]: !modalPanel[type] });
  };

  const showModalExecution = (message) => {
    setModalPanel({ ...modalPanel, showExecution: true, message });
    setTimeout(() => {
      setModalPanel({
        ...modalPanel,
        showExecution: false,
        message: "",
      });
    }, 2000);
  };

  return (
    <>
      <div className="page-admin">
        <Container customStyle="page-admin__container">
          {modalsInfo.map((item, i) => (
            <Button
              key={item.text}
              variant="outline-success"
              customStyle={`page-admin__button ${
                i === 3 ? "page-admin__button_delete-user" : ""
              }`}
              onClick={() => handlerClick(item.modal)}
            >
              {item.text}
            </Button>
          ))}
          {modalsInfo.map(({ modal, Component }) => {
            if (modalPanel[modal]) {
              return (
                <Component
                  key={modal}
                  onHide={() => handlerClick(modal)}
                  showModalWindowExecution={showModalExecution}
                />
              );
            }
          })}
        </Container>
      </div>
      {modalPanel.showExecution && <Execution message={modalPanel.message} />}
    </>
  );
};

export default Admin;
