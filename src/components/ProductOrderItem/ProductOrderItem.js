import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const ProductOrderItem = ({ product, quantity }) => {
  return (
    <Card sx={{ maxWidth: 345, marginBottom: 10 }}>
      <CardMedia
        component="img"
        height="200"
        image={product.imgURL}
        alt="green iguana"
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ fontWeight: "bold" }}
        >
          {product.name}
        </Typography>
        <Typography
          variant="body2"
          sx={{ textAlign: "left", color: "#0a5c5c", fontWeight: "bold" }}
        >
          {`Cena: ${product.price} zł / szt`}
        </Typography>
        <Typography
          variant="body2"
          sx={{ textAlign: "left", color: "#0a5c5c", fontWeight: "bold" }}
        >
          {`Ilość: ${quantity ? quantity : product.amountInBasket} szt`}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductOrderItem;
