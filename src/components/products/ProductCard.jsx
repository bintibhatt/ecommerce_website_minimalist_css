import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function ProductCard({
  pTitle,
  pImg,
  pDesc,
  pCategory,
  pPrice,
  pId,
}) {
  return (
    <Card sx={{ maxWidth: 250, maxHeight: 400, border: "1px solid black" }}>
      <Typography
        variant="subtitle1"
        style={{
          margin: "5px",
          fontSize: "15px",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
      >
        {pTitle.split(" ").slice(0, 5).join(" ")}{" "}
      </Typography>

      <CardMedia component="img" src={pImg[0]} alt={pImg} />
      <CardContent>
        <Typography variant="body2" style={{ fontWeight: "700" }}>
          ${pPrice} Id={pId}
        </Typography>
        <Typography variant="body2">{pCategory}</Typography>
      </CardContent>
    </Card>
    // <div>
    //   <div className="card_div" style={{ backgroundImage: { pImg } }}>
    //     <img src={pImg} alt={pImg} />
    //     {pTitle}
    //   </div>
    // </div>
  );
}
