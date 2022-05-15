import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import image from "../../img/finalPriceImg.jpeg";

const FinalBasketCost = ({ products, navigate }) => {
  const [finalPrice, setFinalPrice] = useState(0);

  useEffect(() => {
    if (products) {
      let price = 0;
      products.forEach((product) => {
        price += product.price * product.amountInBasket;
      });
      setFinalPrice(price);
    }
  }, [products]);

  return (
    <Card sx={{ maxWidth: 345, marginTop: 10, marginBottom: 10 }}>
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Do zapłaty
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ textAlign: "left", fontWeight: "bold" }}
        >
          {`Wartość produktów: ${finalPrice} zł`}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            textAlign: "left",
            fontWeight: "bold",
            color: finalPrice >= 50 ? "green" : "red",
          }}
        >
          {finalPrice >= 50
            ? "Darmowa przesyłka"
            : "Darmowa przesyłka od 50 zł"}
        </Typography>
      </CardContent>

      <Button
        variant="outlined"
        color="secondary"
        sx={{ marginTop: 2, marginBottom: 2 }}
        onClick={() => (finalPrice > 0 ? navigate("/zlozZamowienie") : null)}
      >
        Idź do kasy
      </Button>
    </Card>
  );
};

export default FinalBasketCost;
