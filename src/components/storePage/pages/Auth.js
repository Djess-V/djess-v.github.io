import React, { useContext, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { Context } from "../../../index";
import Button from "../components/universalComponents/Button";
import Container from "../components/universalComponents/container/Container";
import Card from "../components/universalComponents/card/Card";
import Form from "../components/universalComponents/form/Form";
import FormInput from "../components/universalComponents/form/FormInput";
import { LOGIN_ROUTE, REGISTRATION_ROUTE, BASKET_ROUTE } from "../utils/consts";
import { logIn, registerUser } from "../utils/servicesFunction";

const Auth = observer(() => {
  const { users } = useContext(Context);
  const location = useLocation();
  const history = useNavigate();

  const isLogin = location.pathname === LOGIN_ROUTE;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState({ status: false, message: "" });

  const click = (e) => {
    e.preventDefault();

    try {
      let isAuth = false,
        newUser;
      if (isLogin) {
        newUser = logIn(users.users, email, password);
        if (newUser) {
          isAuth = true;
        }
      } else {
        newUser = registerUser(users.users, email, password);
        if (newUser) {
          users.addUser(newUser);
          isAuth = true;
        }
      }

      if (isAuth) {
        users.setUser(newUser);
        users.setLoggedIn(true);
      }

      history(BASKET_ROUTE);
    } catch (e) {
      setIsError({ status: true, message: e.message });
    }
  };

  return (
    <div className="page-auth auth">
      <Container
        customStyle="auth__container"
        style={{ height: window.innerHeight - 54 }}
      >
        <Card customStyle="auth__card card-auth">
          <h2>{isLogin ? "Авторизация" : "Регистрация"}</h2>
          <Form className="card-auth__form">
            <FormInput
              type="email"
              customStyle="card-auth__form_input"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <FormInput
              type="password"
              customStyle="card-auth__form_input"
              placeholder="Пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {isError.status && (
              <div className="card-auth__error">{isError.message}</div>
            )}
            <div className="card-auth__form-group">
              {isLogin ? (
                <div className="card-auth__form-group_link">
                  Нет аккаунта!{" "}
                  <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink>
                </div>
              ) : (
                <div className="card-auth__form-group_link">
                  Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
                </div>
              )}

              <Button
                customStyle="card-auth__form-group_button"
                variant="outline-success"
                onClick={(e) => click(e)}
              >{`${isLogin ? "Войти" : "Регистрация"}`}</Button>
            </div>
          </Form>
        </Card>
      </Container>
    </div>
  );
});

export default Auth;
