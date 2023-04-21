import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AdaptivePage from "./components/adaptivePage/AdaptivePage";
import DesktopPage from "./components/desktopPage/DesktopPage";
import MainPage from "./components/mainPage/MainPage";
import Summary from "./components/mainPage/summary/Summary";

import { Context } from "./index";
import NavBar from "./components/storePage/components/nav_bar/NavBar";
import Admin from "./components/storePage/pages/Admin";
import Basket from "./components/storePage/pages/Basket";
import Shop from "./components/storePage/pages/Shop";
import Auth from "./components/storePage/pages/Auth";
import DevicePage from "./components/storePage/pages/DevicePage";
import Orders from "./components/storePage/pages/Orders";
import {
  ADMIN_ROUTE,
  BASKET_ROUTE,
  SHOP_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  DEVICE_ROUTE,
  ORDER_ROUTE,
} from "./components/storePage/utils/consts";
import { observer } from "mobx-react-lite";

const AppRouter = observer(() => {
  const { users } = useContext(Context);

  const authRoutes = [
    {
      path: ADMIN_ROUTE,
      Component: Admin,
    },
    {
      path: ORDER_ROUTE,
      Component: Orders,
    },
  ];

  const publicRoutes = [
    {
      path: SHOP_ROUTE,
      Component: Shop,
    },
    {
      path: BASKET_ROUTE,
      Component: Basket,
    },
    {
      path: LOGIN_ROUTE,
      Component: Auth,
    },
    {
      path: REGISTRATION_ROUTE,
      Component: Auth,
    },
    {
      path: DEVICE_ROUTE + "/:id",
      Component: DevicePage,
    },
  ];

  return (
    <Routes>
      <Route path="/" element={<MainPage />} exact />
      <Route path="/summary" element={<Summary />} exact />
      <Route path="/adaptive" element={<AdaptivePage />} exact />
      <Route path="/desktop" element={<DesktopPage />} exact />
      <Route path="/store" element={<NavBar />} exact>
        {users.loggedIn &&
          authRoutes.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} exact />
          ))}
        {publicRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} exact />
        ))}
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
});

export default AppRouter;
