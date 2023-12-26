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
  const border = theme ? "2px solid black" : "1px solid white";
  return (
    <div className="card_div">
      <Card sx={{ minHeight: "250px", width: 250, border: { border } }}>
        <CardCover>
          <img src={productImg} loading="lazy" alt="" />
        </CardCover>
        <CardCover
          sx={{
            background: theme
              ? "linear-gradient(to bottom, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0) 200px),linear-gradient(to bottom, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0) 300px)"
              : "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
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
