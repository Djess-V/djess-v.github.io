import React, { useContext, useState } from "react";
import Modal from "../universalComponents/modal/Modal";
import FormInput from "../universalComponents/form/FormInput";
import { Context } from "../../../..";

const DeleteUserModal = ({
  onHide = (f) => f,
  showModalWindowExecution = (f) => f,
}) => {
  const { users } = useContext(Context);
  const [email, setEmail] = useState("");

  const destroyUser = () => {
    const userExists = users.users.find((item) => item.email === email);

    if (userExists) {
      users.deleteUser(email);
      showModalWindowExecution("Пользователь удалён!");
      setEmail("");
    } else {
      showModalWindowExecution("Пользователь с таким email не обнаружен!");
    }
  };

  return (
    <Modal
      title="Удалить поьзователя"
      action="Удалить"
      onClick={destroyUser}
      onHide={onHide}
    >
      <FormInput
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </Modal>
  );
};

export default DeleteUserModal;
