import React, { useState, useEffect } from "react";
import {
  Typography,
  Box,
  Grid,
  Divider,
  TextField,
  Avatar,
} from "@mui/material";
import ProductOrderItem from "../../components/ProductOrderItem/ProductOrderItem";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import monstera from "../../img/monstera.png";
import aloes from "../../img/aloes.png";
import { order } from "../../api/FetchData";
import GooglePayButton from "@google-pay/button-react";
import { useParams } from "react-router-dom";

const OrderOverview = () => {
  const [orderInfo, setOrderInfo] = useState({});

  const { id } = useParams();

  useEffect(() => {
    order.takeOne(id).then((res) => {
      console.log("orderek", res);
      setOrderInfo(res.data);
    });
  }, []);

  const changeOrderStatus = () => {
    order.updateStatus(id, { status: "Opłacone" }).then(() => {
      window.location.reload();
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
            {orderInfo?.itemsOrders?.map((item) => (
              <Grid item xs={orderInfo?.itemsOrders?.length === 1 ? 12 : 4}>
                <ProductOrderItem
                  product={item.plant}
                  quantity={item.quantity}
                />
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
                  InputLabelProps={{ shrink: true }}
                  fullWidth
                  value={orderInfo?.phoneNumber}
                />
              </Box>
              <Box sx={{ marginTop: 1 }}>
                <TextField
                  label="Kod pocztowy"
                  variant="standard"
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                  value={orderInfo?.postalCode}
                />
              </Box>
              <Box sx={{ marginTop: 1 }}>
                <TextField
                  label="Miasto"
                  variant="standard"
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                  value={orderInfo?.city}
                />
              </Box>
              <Box sx={{ marginTop: 1 }}>
                <TextField
                  label="Ulica"
                  variant="standard"
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                  value={orderInfo?.street}
                />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={2}>
            <Avatar sx={{ height: 200, width: 200 }} src={aloes} />
          </Grid>
        </Grid>
      </Grid>
      {orderInfo?.status === "Waiting for payment" ? (
        <Grid item xs={12} align="center" sx={{ marginBottom: 5 }}>
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
                    allowedCardNetworks: ["MASTERCARD", "VISA"],
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
                merchantName: `Zamówienie ${orderInfo?.id}`,
              },
              transactionInfo: {
                totalPriceStatus: "FINAL",
                totalPriceLabel: "Do zapłaty",
                totalPrice: `${orderInfo?.totalPrice}`,
                currencyCode: "PLN",
                countryCode: "PL",
              },
            }}
            onLoadPaymentData={(paymentRequest) => {
              changeOrderStatus();
            }}
            existingPaymentMethodRequired={false}
          />
        </Grid>
      ) : null}
    </Grid>
  );
};

export default OrderOverview;
