import React, { useState } from "react";
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
import ProductOrderItem from "../../components/ProductOrderItem/ProductOrderItem";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import monstera from "../../img/monstera.png";
import aloes from "../../img/aloes.png";
import { clear_basket } from "../../stores/basketStore";
import { order } from "../../api/FetchData";
import { useNavigate } from "react-router-dom";

const MakeOrder = () => {
  const products = useSelector((state) => state.basket.products);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const makeOrder = () => {
    order
      .addToBasket({
        products: products.map((product) => {
          return {
            plantId: product.id,
            amountInBasket: product.amountInBasket,
          };
        }),
      })
      .then(() => {
        order
          .makeOrder({ phoneNumber, postalCode, street, city })
          .then((res) => {
            dispatch(clear_basket());
            navigate("/mojeZamowienia");
          })
          .catch((err) => {
            console.log(err);
            setError("Błąd składania zamówienia");
          });
      })
      .catch((err) => {
        console.log(err);
        setError("Błąd składania zamówienia");
      });
  };

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
          <Grid container direction="row" justifyContent="center">
            {products.map((product) => (
              <Grid item xs={products.length === 1 ? 12 : 4}>
                <ProductOrderItem product={product} />
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
                <TextField
                  label="Telefon"
                  variant="standard"
                  fullWidth
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </Box>
              <Box sx={{ marginTop: 1 }}>
                <TextField
                  label="Kod pocztowy"
                  variant="standard"
                  fullWidth
                  onChange={(e) => setPostalCode(e.target.value)}
                />
              </Box>
              <Box sx={{ marginTop: 1 }}>
                <TextField
                  label="Miasto"
                  variant="standard"
                  fullWidth
                  onChange={(e) => setCity(e.target.value)}
                />
              </Box>
              <Box sx={{ marginTop: 1 }}>
                <TextField
                  label="Ulica"
                  variant="standard"
                  fullWidth
                  onChange={(e) => setStreet(e.target.value)}
                />
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
        <Button
          variant="outlined"
          sx={{
            marginTop: "20px",
            color: "#0a5c5c",
            borderColor: "#0a5c5c",
            borderRadius: "30px",
            "&:hover": {
              background: "#0a5c5c",
              color: "white",
            },
          }}
          onClick={makeOrder}
        >
          <Typography>Złóż zamówienie</Typography>
        </Button>
        <Grid item xs={12} sx={{ marginBottom: 5 }}></Grid>
      </Grid>
    </Grid>
  );
};

export default MakeOrder;
