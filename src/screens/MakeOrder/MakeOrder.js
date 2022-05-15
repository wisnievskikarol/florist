import React from "react";
import {
  Typography,
  Box,
  Grid,
  Divider,
  TextField,
  Avatar,
  Button,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import OrderItem from "../../components/OrderItem/OrderItem";
import blik from "../../img/blik.png";
import gpay from "../../img/gpay.png";
import masterCard from "../../img/mastercard.jpeg";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import monstera from "../../img/monstera.png";
import aloes from "../../img/aloes.png";
import PaymentIcon from "@mui/icons-material/Payment";

const MakeOrder = () => {
  const products = useSelector((state) => state.basket.products);
  const dispatch = useDispatch();
  const [paymentMethod, setPaymentMethod] = React.useState(0);

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
            Twoje Zamówienie
          </Typography>
          <Grid container direction="row">
            {products.map((product) => (
              <Grid item xs={products.length === 1 ? 12 : 6}>
                <OrderItem product={product} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Grid>
      <Grid item xs={12} align="center">
        <Divider />
        <Typography
          sx={{
            color: "#0a5c5c",
            fontWeight: "bold",
            textAlign: "center",
            fontSize: 30,
            marginTop: 5,
            marginBottom: 5,
          }}
        >
          Dane dostawy
        </Typography>
        <LocalShippingIcon />
        <Grid container direction="row">
          <Grid item xs={2}>
            <Avatar sx={{ height: 200, width: 200 }} src={monstera} />
          </Grid>
          <Grid item xs={8}>
            <Box
              sx={{
                width: "50%",
                padding: 5,
                borderRadius: 5,
                border: "1px solid #0a5c5c",
                align: "center",
                marginBottom: 5,
              }}
            >
              <Box>
                <TextField label="Imię" variant="standard" fullWidth />
              </Box>
              <Box sx={{ marginTop: 1 }}>
                <TextField label="Nazwisko" variant="standard" fullWidth />
              </Box>
              <Box sx={{ marginTop: 1 }}>
                <TextField label="Telefon" variant="standard" fullWidth />
              </Box>
              <Box sx={{ marginTop: 1 }}>
                <TextField label="Email" variant="standard" fullWidth />
              </Box>
              <Box sx={{ marginTop: 1 }}>
                <TextField label="Adres dostawy" variant="standard" fullWidth />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={2}>
            <Avatar sx={{ height: 200, width: 200 }} src={aloes} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} align="center">
        <Divider />
        <Typography
          sx={{
            color: "#0a5c5c",
            fontWeight: "bold",
            textAlign: "center",
            fontSize: 30,
            marginTop: 5,
            marginBottom: 5,
          }}
        >
          Forma płatności
        </Typography>
        <Grid container direction="row" sx={{ marginBottom: 10 }}>
          <Grid item xs={4}>
            <Avatar
              src={blik}
              onClick={() => setPaymentMethod(0)}
              variant="rounded"
              sx={{
                width: 200,
                height: 200,
                cursor: "pointer",
                border: paymentMethod === 0 ? "1px solid" : null,
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <Avatar
              onClick={() => setPaymentMethod(1)}
              variant="rounded"
              src={gpay}
              sx={{
                width: 200,
                height: 200,
                cursor: "pointer",
                border: paymentMethod === 1 ? "1px solid" : null,
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <Avatar
              onClick={() => setPaymentMethod(2)}
              variant="rounded"
              src={masterCard}
              sx={{
                width: 300,
                height: 200,
                cursor: "pointer",
                border: paymentMethod === 2 ? "1px solid" : null,
              }}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} align="center">
        <Button
          variant="contained"
          sx={{ marginBottom: 10, backgroundColor: "#0a5c5c" }}
          endIcon={<PaymentIcon />}
        >
          <Typography sx={{ fontWeight: "bold" }}>
            Przejdź do płatności
          </Typography>
        </Button>
      </Grid>
    </Grid>
  );
};

export default MakeOrder;
