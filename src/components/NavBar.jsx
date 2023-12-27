import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import LightSwitch from "./theme/LightSwitch";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import { useMain } from "../context/MainContext";
import CartCounter from "./cart/CartCounter";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "../context/ThemeContext";

function NavBar() {
  const navigate = useNavigate();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { productCart } = useMain();
  const { theme } = useTheme();

  console.log(productCart.length);

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
          E-COMMERCE
        </p>
        <NavLink className="NavLink" to="/">
          <div className="sectionDashboardName">
            <p>All</p>
          </div>
        </NavLink>
      </section>
      <section className="nav_section_right">
        <ShoppingCartIcon onClick={handleDrawerOpen} />
        <LightSwitch />
      </section>

      <Drawer anchor="right" open={isDrawerOpen} onClose={handleDrawerClose}>
        <div
          className="drawer_content"
          style={{
            backgroundColor: `${bgColor}`,
            minHeight: "100%",
            color: `${textColor}`,
          }}
        >
          <IconButton onClick={handleDrawerClose}>
            <CloseIcon sx={{ color: `${textColor}` }} />
          </IconButton>
          <div>
            {!productCart.length ? (
              <h3> Cart is empty!</h3>
            ) : (
              productCart?.map((item) => {
                return (
                  <ul key={item.id}>
                    <li>
                      Id: {item.id} <CartCounter pId={item.id} />
                    </li>
                  </ul>
                );
              })
            )}
          </div>
        </div>
      </Drawer>
    </div>
  );
}

export default NavBar;
