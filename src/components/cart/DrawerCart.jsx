import React from "react";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import CartCounter from "../cart/CartCounter";

function DrawerComponent({
  handleDrawerClose,
  textColor,
  bgColor,
  isDrawerOpen,
  productCart,
}) {
  return (
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
        <div className="cartContent">
          {!productCart.length ? (
            <h3> Your cart is empty!</h3>
          ) : (
            <div>
              {productCart?.map((item) => {
                return (
                  <div key={item.id}>
                    <section className="cartContentSection">
                      <section className="cartContentSection_left">
                        <img src={item.image} alt="" />
                      </section>
                      <section className="cartContentSection_right">
                        <section>
                          <h4>{item.title}</h4>
                          <p>Total: ${item.price * item.productCount}</p>
                        </section>
                        <CartCounter pId={item.id} />
                      </section>
                    </section>
                    <hr></hr>
                  </div>
                );
              })}
              <hr></hr>
              <h2>
                Total: $
                {(() => {
                  let total = 0;
                  productCart.forEach((element) => {
                    total += element.price * element.productCount;
                  });
                  return total;
                })()}
              </h2>
            </div>
          )}
        </div>
      </div>
    </Drawer>
  );
}

export default DrawerComponent;
