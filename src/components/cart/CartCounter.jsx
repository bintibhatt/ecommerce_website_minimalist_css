import * as React from "react";
import Box from "@mui/material/Box";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ClearIcon from "@mui/icons-material/Clear";
import { useMain } from "../context/MainContext";
import { useTheme } from "../context/ThemeContext";

export default function CartCounter({ pId, pPrice, pTitle, pImg }) {
  const { productCart, setProductCart } = useMain();
  const { theme } = useTheme();

  const counterBorder = theme ? "1px solid black" : "1px solid white";
  const counterColor = theme ? "black" : "white";

  function addCount() {
    if (!productCart?.find((element) => element.id === pId)) {
      setProductCart((prev) => [
        ...prev,
        { id: pId, productCount: 1, price: pPrice, title: pTitle, image: pImg },
      ]);
    } else {
      setProductCart((prev) =>
        prev.map((element) =>
          element.id === pId
            ? { ...element, productCount: element.productCount + 1 }
            : element
        )
      );
    }
    console.log(productCart);
  }

  function subtractCount() {
    productCart?.forEach((element) => {
      if (element.id === pId && element.productCount > 1) {
        element.productCount--;
        setProductCart([...productCart]);
      }
    });
    console.log(productCart);
  }

  function clearCount() {
    setProductCart((prev) => prev.filter((element) => element.id !== pId));
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
          sx={{ color: `${counterColor}`, border: `${counterBorder}` }}
        >
          <RemoveIcon fontSize="small" />
        </Button>
        <Button sx={{ color: `${counterColor}`, border: `${counterBorder}` }}>
          {productCart?.find((item) => item.id === pId)?.productCount || 0}
        </Button>

        <Button
          aria-label="increase"
          onClick={addCount}
          sx={{ color: `${counterColor}`, border: `${counterBorder}` }}
        >
          <AddIcon fontSize="small" />
        </Button>
        <Button
          aria-label="increase"
          onClick={clearCount}
          sx={{ color: `${counterColor}`, border: `${counterBorder}` }}
        >
          <ClearIcon fontSize="small" />
        </Button>
      </ButtonGroup>
    </Box>
  );
}
