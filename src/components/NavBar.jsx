import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import LightSwitch from "./theme/LightSwitch";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function NavBar() {
  const navigate = useNavigate();
  return (
    <div className="navbar_div">
      <section className="nav_section_left">
        <p className="website_name" onClick={() => navigate("/")}>
          E-COMMERCE
        </p>
        <NavLink className="NavLink" to="/">
          <div className="sectionDashboardName">
            <p>All </p>
          </div>
        </NavLink>
      </section>
      <section className="nav_section_right">
        <i className="nav_cart_icon">
          <ShoppingCartIcon />
        </i>
        <LightSwitch />
      </section>
    </div>
  );
}

export default NavBar;
