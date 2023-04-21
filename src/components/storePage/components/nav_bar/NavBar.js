import React, { useContext, useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { Context } from "../../../../index";
import NavToggle from "../universalComponents/nav/NavToggle";
import NavCollapse from "../universalComponents/nav/NavCollapse";
import Container from "../universalComponents/container/Container";
import {
  SHOP_ROUTE,
  ADMIN_ROUTE,
  LOGIN_ROUTE,
  BASKET_ROUTE,
  ORDER_ROUTE,
} from "../../utils/consts";

const NavBar = observer(() => {
  const { users, basket } = useContext(Context);

  const [showMenu, setShowMenu] = useState(false);

  const location = useLocation();
  const history = useNavigate();

  const logOut = async () => {
    users.setUser({});
    users.setLoggedIn(false);
    basket.setBasketDevices([]);
    basket.setRemoteDevices([]);
    basket.setTotalCount(0);
    history(SHOP_ROUTE);
  };

  return (
    <div id="store">
      <nav className="store-navbar">
        <Container customStyle="store-navbar_container">
          <Link className="navbar_navlink" to={SHOP_ROUTE}>
            {location.pathname === "/store/shop"
              ? "Магазин"
              : "Вернуться в магазин"}
          </Link>
          <NavToggle
            customStyle="navbar_toggle"
            onClick={() => setShowMenu(!showMenu)}
          />
          <NavCollapse show={showMenu}>
            {users.loggedIn && location.pathname !== "/store/orders" && (
              <Link className="navbar_navlink" to={ORDER_ROUTE}>
                Мои заказы
                <span className="navbar_quantity-icon">
                  {users.user.orders.length > 99
                    ? "..."
                    : users.user.orders.length}
                </span>
              </Link>
            )}

            {location.pathname !== "/store/basket" && (
              <Link className="navbar_navlink" to={BASKET_ROUTE}>
                Корзина
                <span className="navbar_quantity-icon">
                  {basket.totalCount > 99 ? "..." : basket.totalCount}
                </span>
              </Link>
            )}

            {users.user.role === "ADMIN" &&
              location.pathname !== "/store/admin" && (
                <Link className="navbar_navlink" to={ADMIN_ROUTE}>
                  Админ панель
                </Link>
              )}
            {users.loggedIn ? (
              <div
                className="navbar_navlink"
                onClick={(e) => {
                  e.preventDefault();
                  logOut();
                }}
              >
                Выйти
              </div>
            ) : (
              <>
                {location.pathname !== "/store/registration" &&
                  location.pathname !== "/store/login" && (
                    <Link className="navbar_navlink" to={LOGIN_ROUTE}>
                      Войти
                    </Link>
                  )}
              </>
            )}
          </NavCollapse>
        </Container>
      </nav>
      <Outlet />
    </div>
  );
});

export default NavBar;
