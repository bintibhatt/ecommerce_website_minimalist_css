import * as React from "react";
import Box from "@mui/material/Box";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ClearIcon from "@mui/icons-material/Clear";
import { useMain } from "../../context/MainContext";
import { useTheme } from "@emotion/react";

export default function CartCounter({ pId }) {
  const { productCart, setProductCart } = useMain();
  const { theme } = useTheme();

  const counterBorder = theme ? "1px solid white" : "1px solid black";
  const counterColor = theme ? "white" : "black";

  function addCount() {
    if (!productCart.find((element) => element.id === pId)) {
      setProductCart((prev) => [...prev, { id: pId, productCount: 1 }]);
    } else {
      setProductCart((prev) =>
        prev.map((element) =>
          element.id === pId
            ? { ...element, productCount: element.productCount + 1 }
            : element
        )
      );
    }
  }

  function subtractCount() {
    productCart.forEach((element) => {
      if (element.id === pId && element.productCount > 0) {
        element.productCount--;
        setProductCart([...productCart]);
      }
    });
  }

  function clearCount() {
    setProductCart(null);
  }

  return (
    <Box
      sx={{
        color: "black",
        display: "flex",
        flexDirection: "column",
        "& > *": {
          marginBottom: 2,
        },
        "& .MuiBadge-root": {
          marginRight: 4,
        },
      }}
    >
      <ButtonGroup>
        <Button
          aria-label="reduce"
          onClick={subtractCount}
          style={{ color: { counterColor }, border: { counterBorder } }}
        >
          <RemoveIcon fontSize="small" />
        </Button>
        <Button
          disabled
          style={{ color: { counterColor }, border: { counterBorder } }}
        >
          {productCart.find((item) => item.id === pId)?.productCount || 0}
        </Button>

        <Button
          aria-label="increase"
          onClick={addCount}
          style={{ color: { counterColor }, border: { counterBorder } }}
        >
          <AddIcon fontSize="small" />
        </Button>
        <Button
          aria-label="increase"
          onClick={clearCount}
          style={{ color: { counterColor }, border: { counterBorder } }}
        >
          <ClearIcon fontSize="small" />
        </Button>
      </ButtonGroup>
    </Box>
  );
}
