import { createSlice } from "@reduxjs/toolkit";
import { store } from "../index";

export const basketSlice = createSlice({
  name: "basket",
  initialState: {
    products: [],
  },
  reducers: {
    set_products: (state, action) => {
      return {
        products: action.payload,
      };
    },
  },
});

export const { set_products } = basketSlice.actions;

export const addProductToBasket = (product, amount) => (dispatch) => {
  const basketProducts = store.getState().basket.products;
  let products = [...basketProducts];
  let productToAdd = product;
  if (
    !products.some((productInBasket) => productInBasket.id === productToAdd.id)
  ) {
    productToAdd = { ...productToAdd, ...{ amountInBasket: amount } };
    products.push(productToAdd);
  } else {
    let foundedProduct = products.findIndex(
      (product) => product.id === productToAdd.id
    );
    let filtered = products;
    products = products.filter((product) => product.id !== productToAdd.id);
    productToAdd = {
      ...productToAdd,
      ...{
        amountInBasket:
          filtered[foundedProduct].amountInBasket + amount <= product.quantity
            ? filtered[foundedProduct].amountInBasket + amount
            : filtered[foundedProduct].amountInBasket,
      },
    };

    products.push(productToAdd);
  }
  dispatch(set_products(products));
};

export const removeOneProductFromBasket = (product) => (dispatch) => {
  const basketProducts = store.getState().basket.products;
  let products = [...basketProducts];
  let productToChange = { ...product };
  let foundedProduct = products.findIndex(
    (product) => product.id === productToChange.id
  );
  if (products[foundedProduct].amountInBasket === 1) {
    removeProductFromBasket(product);
  } else {
    let filtered = products;
    products = products.filter((product) => product.id !== productToChange.id);
    productToChange = {
      ...productToChange,
      ...{
        amountInBasket: filtered[foundedProduct].amountInBasket - 1,
      },
    };
    products.push(productToChange);
    dispatch(set_products(products));
  }
};

export const removeProductFromBasket = (product) => (dispatch) => {
  const basketProducts = store.getState().basket.products;
  let products = [...basketProducts];
  products = products.filter((productData) => productData.id !== product.id);

  dispatch(set_products(products));
};

export default basketSlice.reducer;
