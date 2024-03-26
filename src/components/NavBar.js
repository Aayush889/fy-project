import "../styles/Navbar.css";

import React from "react";

// components
import BaseText from "./BaseText";

// redux
import { useSelector } from "react-redux";

// constants
import { navbarRoutes } from "../navigation/AppRouter";
import { COLORS } from "../constants/Color";

export default function NavBar() {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <div className="nav-bar">
      {navbarRoutes.map((route) => (
        <a href={route.path} style={{ textDecoration: "none" }}>
          <BaseText
            className="nav-button"
            fontSize="16px"
            fontColor={COLORS(theme).Text}
          >
            {route.name}
          </BaseText>
        </a>
      ))}
    </div>
  );
}
