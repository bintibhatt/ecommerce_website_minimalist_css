import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import { useMain } from "../context/MainContext";
import CartCounter from "./cart/CartCounter";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "../context/ThemeContext";
import Badge from "@mui/material/Badge";

function DrawerCart() {
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
    <div>
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
                  <div key={item.id}>
                    <section>
                      {item.title} :: ${item.price}
                      <CartCounter pId={item.id} />
                    </section>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </Drawer>
    </div>
  );
}

export default DrawerCart;
