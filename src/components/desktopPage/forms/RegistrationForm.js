import React, { useState } from "react";

let RegistrationForm = () => {
  const [valuesInput, setValuesInput] = React.useState({
    login: "",
    password: "",
    email: "",
    tel: "",
  });

  const [message, setMessage] = useState("");

  const messageSuccess = "Регистрация прошла успешно!";

  const messageFail = "Пожалуйста, заполните обязательные поля!";

  const handlerChangeValueInput = (e) => {
    if (e.target.id === "userLogin") {
      setValuesInput({ ...valuesInput, login: e.target.value });
    } else if (e.target.id === "userPassword") {
      setValuesInput({ ...valuesInput, password: e.target.value });
    } else if (e.target.id === "userEmail") {
      setValuesInput({ ...valuesInput, email: e.target.value });
    } else if (e.target.id === "userTel") {
      setValuesInput({ ...valuesInput, tel: e.target.value });
    }
  };

  const handlerSubmitForm = (e) => {
    e.preventDefault();

    if (valuesInput.login && valuesInput.password) {
      setMessage(messageSuccess);
      setTimeout(() => {
        setValuesInput({
          login: "",
          password: "",
          email: "",
          tel: "",
        });
        setMessage("");
      }, 3000);
    } else {
      setMessage(messageFail);
      setTimeout(() => setMessage(""), 3000);
    }
  };

  return (
    <div className="wrapper__form form">
      <div className="form__form-registration form-registration">
        <form action="#" className="form-registration__form">
          <h2 className="form-registration__form_title">
            Регистрационная форма
          </h2>
          <fieldset className="form-registration__fieldset">
            <legend className="form-registration__fieldset_title">
              Данные для регистрации
            </legend>
            <p className="form-registration__field">
              <label
                className="form-registration__field_title"
                htmlFor="userLogin"
              >
                Логин<span>*</span>:
              </label>
              <input
                value={valuesInput.login}
                className="form-registration__field_input"
                type="text"
                id="userLogin"
                name="userLogin"
                onChange={(e) => handlerChangeValueInput(e)}
                required
              />
            </p>
            <p className="form-registration__field">
              <label
                className="form-registration__field_title"
                htmlFor="userLogin"
              >
                Пароль<span>*</span>:
              </label>

              <input
                value={valuesInput.password}
                className="form-registration__field_input"
                type="password"
                id="userPassword"
                name="userPassword"
                onChange={(e) => handlerChangeValueInput(e)}
                required
              />
            </p>
            <p className="form-registration__field">
              <label
                className="form-registration__field_title"
                htmlFor="userEmail"
              >
                E-mail:
              </label>
              <input
                value={valuesInput.email}
                className="form-registration__field_input"
                type="email"
                id="userEmail"
                name="userEmail"
                onChange={(e) => handlerChangeValueInput(e)}
              />
            </p>
            <p className="form-registration__field">
              <label
                className="form-registration__field_title"
                htmlFor="userTel"
              >
                Phone:
              </label>
              <input
                value={valuesInput.tel}
                className="form-registration__field_input"
                type="tel"
                id="userTel"
                name="userTel"
                onChange={(e) => handlerChangeValueInput(e)}
              />
            </p>
            <div className="form-registration__field form-registration__field_forButton">
              <div>{message && <p>{message}</p>}</div>
              <div>
                <button
                  className="form-registration__field_button"
                  type="buttton"
                  onClick={(e) => handlerSubmitForm(e)}
                >
                  Регистрация
                </button>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

/* ---------------------------------------------------------------------------------- */

RegistrationForm = React.memo(RegistrationForm);

export default RegistrationForm;
