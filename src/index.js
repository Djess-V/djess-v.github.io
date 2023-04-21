import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import UsersStore from "./components/storePage/store/UsersStore";
import DevicesStore from "./components/storePage/store/DevicesStore";
import BasketStore from "./components/storePage/store/BasketStore";
import store from "./components/desktopPage/store/store";

import "./components/mainPage/css/mainPage.css";
import "./components/storePage/css/styles.css";
import App from "./App";

export const Context = createContext();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Context.Provider
      value={{
        users: new UsersStore(),
        devices: new DevicesStore(),
        basket: new BasketStore(),
      }}
    >
      <App />
    </Context.Provider>
  </Provider>
);
