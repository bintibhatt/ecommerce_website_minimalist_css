import * as React from "react";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import { useTheme } from "../../context/ThemeContext";

export default function ProductCard({
  pTitle,
  pImg,
  pDesc,
  pCategory,
  pPrice,
  pId,
}) {
  const { theme } = useTheme();
  const productImg = pImg[0];
  const textColor = theme ? "#000" : "#fff";
  return (
    <div className="card_div">
      <Card sx={{ minHeight: "250px", width: 250, border: "none" }}>
        <CardCover>
          <img src={productImg} alt="" />
        </CardCover>
        <CardCover
          sx={{
            background: theme
              ? "linear-gradient(rgba(0,0,0,0.1), rgba(255, 255, 255, 0.5) 200px)"
              : "linear-gradient(rgba(255, 255, 255, 0.1),rgba(0,0,0,0.5) 200px)",
          }}
        />
        <CardContent sx={{ justifyContent: "flex-end" }}>
          <Typography level="title-lg" textColor={textColor}>
            {pTitle}
          </Typography>
          <Typography textColor={textColor}>
            ${pPrice} {pCategory}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
