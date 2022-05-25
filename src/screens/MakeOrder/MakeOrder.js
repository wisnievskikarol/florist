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
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import monstera from "../../img/monstera.png";
import aloes from "../../img/aloes.png";
import GooglePayButton from "@google-pay/button-react";

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
          Płatność
        </Typography>
        <Grid item xs={12} sx={{ marginBottom: 5 }}>
          <GooglePayButton
            environment="TEST"
            paymentRequest={{
              apiVersion: 2,
              apiVersionMinor: 0,
              allowedPaymentMethods: [
                {
                  type: "CARD",
                  parameters: {
                    allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
                    allowedCardNetworks: ["MASTERCARD"],
                  },
                  tokenizationSpecification: {
                    type: "PAYMENT_GATEWAY",
                    parameters: {
                      gateway: "example",
                      gatewayMerchantId: "exampleGatewayMerchantId",
                    },
                  },
                },
              ],
              merchantInfo: {
                merchantId: "12345678901234567890",
                merchantName: "Demo Merchant",
              },
              transactionInfo: {
                totalPriceStatus: "FINAL",
                totalPriceLabel: "Total",
                totalPrice: "10000",
                currencyCode: "PLN",
                countryCode: "PL",
              },
            }}
            onLoadPaymentData={(paymentRequest) => {
              console.log("Success", paymentRequest);
            }}
            existingPaymentMethodRequired={false}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MakeOrder;
