import React from "react";
import { Typography, Box, Grid, List } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import BasketItem from "../../components/BaketItem/BasketItem";
import {
  addProductToBasket,
  removeOneProductFromBasket,
  removeProductFromBasket,
} from "../../stores/basketStore";
import FinalBasketCost from "../../components/FinalBasketCost/FinalBasketCost";
import { useNavigate } from "react-router-dom";

const Basket = () => {
  const products = useSelector((state) => state.basket.products);
  const userInfo = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addOneProductToBasket = (product) => {
    dispatch(addProductToBasket(product, 1));
  };

  const removeOneFromBasket = (product) => {
    dispatch(removeOneProductFromBasket(product));
  };

  const removeFromBasket = (product) => {
    dispatch(removeProductFromBasket(product));
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
              marginBottom: 10,
              fontSize: 30,
            }}
          >
            {products.length > 0 ? "Twój koszyk" : "Koszyk pusty"}
          </Typography>
          <List>
            {products.map((product) => (
              <BasketItem
                product={product}
                addProductToBasket={addOneProductToBasket}
                removeFromBasket={removeFromBasket}
                removeOneFromBasket={removeOneFromBasket}
              />
            ))}
          </List>
          {products.length > 0 ? (
            <FinalBasketCost
              products={products}
              navigate={navigate}
              isLoggedIn={userInfo?.isLoggedIn}
            />
          ) : null}
        </Box>
      </Grid>
    </Grid>
  );
};

export default Basket;
