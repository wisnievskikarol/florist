import React, { useEffect, useState } from "react";
import { Typography, Box, Grid } from "@mui/material";
import { order } from "../../api/FetchData";
import OrderItem from "../../components/OrderItem/OrderItem";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    order.takeAll().then((res) => {
      setOrders(res.data);
    });
  }, []);

  return (
    <Grid container direction="row">
      <Grid item xs={12} align="center">
        <Box sx={{ width: "80vw", marginTop: "10vh" }}>
          <Typography
            sx={{
              fontWeight: "bold",
              textAlign: "center",
              marginTop: 10,
              marginBottom: 5,
              fontSize: 30,
              color: "#0a5c5c",
            }}
          >
            Twoje Zamówienia
          </Typography>
        </Box>

        {orders.map((order) => (
          <OrderItem order={order} />
        ))}
      </Grid>
    </Grid>
  );
};

export default MyOrders;
