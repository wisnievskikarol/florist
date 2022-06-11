import React from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

const OrderItem = ({ order }) => {
  const navigate = useNavigate();

  return (
    <Card
      sx={{
        maxWidth: 500,
        marginBottom: 10,
        cursor: "pointer",
      }}
      onClick={() => navigate(`/podgladZamowienia/${order?.id}`)}
    >
      <CardMedia
        component="img"
        alt="green iguana"
        height="250"
        sx={{
          "&:hover": {
            transition: "all 0.3s ease 0s",
            transform: "scale(1.05)",
          },
        }}
        image={order?.itemsOrders[0].plant.imgURL}
      />
      <CardContent>
        <Grid container direction="row" alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{
                fontWeight: "bold",
                textAlign: "left",
              }}
            >
              {`Zamówienie #${order?.id}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              gutterBottom
              component="div"
              sx={{
                fontWeight: "bold",
                textAlign: "right",
                color:
                  order.status === "Waiting for payment" ? "orange" : "green",
              }}
            >
              {`Status: ${
                order?.status === "Waiting for payment"
                  ? "Nieopłacone"
                  : order?.status
              }`}
            </Typography>
          </Grid>
        </Grid>
        <Typography
          variant="body2"
          sx={{ textAlign: "left", color: "#0a5c5c", fontWeight: "bold" }}
        >
          {`Data zamówienia : ${format(
            new Date(order?.createdDate),
            "dd-MM-yyy H:mm"
          )}`}
        </Typography>
        <Typography
          variant="body2"
          sx={{ textAlign: "left", color: "#0a5c5c", fontWeight: "bold" }}
        >
          {`Ilość produktów: ${order?.itemsOrders?.length}`}
        </Typography>
        <Typography
          variant="body2"
          sx={{ textAlign: "left", color: "#0a5c5c", fontWeight: "bold" }}
        >
          {`Cena: ${order?.totalPrice} zł`}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default OrderItem;
