import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import LightSwitch from "./theme/LightSwitch";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useMain } from "../context/MainContext";
import { useTheme } from "../context/ThemeContext";
import Badge from "@mui/material/Badge";
import AttractionsIcon from "@mui/icons-material/Attractions";
import DrawerComponent from "./cart/DrawerCart";

function NavBar() {
  const navigate = useNavigate();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { productCart } = useMain();
  const { theme } = useTheme();

  let badgeNumber = productCart.length;

  const bgColor = theme ? "white" : "black";
  const textColor = theme ? "black" : "white";

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  return (
    <div className="navbar_div">
      <section className="nav_section_left">
        <p className="website_name" onClick={() => navigate("/")}>
          <AttractionsIcon /> E-COMMERCE
        </p>
        <NavLink className="NavLink" to="/">
          <div className="sectionDashboardName">
            <p>All</p>
          </div>
        </NavLink>
      </section>
      <section className="nav_section_right">
        <Badge badgeContent={badgeNumber} color="success">
          <ShoppingCartIcon onClick={handleDrawerOpen} />
        </Badge>
        <LightSwitch />
      </section>

      <DrawerComponent
        isDrawerOpen={isDrawerOpen}
        bgColor={bgColor}
        textColor={textColor}
        handleDrawerClose={handleDrawerClose}
        productCart={productCart}
      />
    </div>
  );
}

export default NavBar;
