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

export const addProductToBasket = (product) => (dispatch) => {
  const basketProducts = store.getState().basket.products;
  let products = [...basketProducts];
  console.log("proukciki", products, product);
  let productToAdd = product;
  if (
    !products.some((productInBasket) => productInBasket.id === productToAdd.id)
  ) {
    productToAdd = { ...productToAdd, ...{ amountInBasket: 1 } };
    products.push(productToAdd);
  } else {
    let foundedProduct = products.findIndex(
      (product) => product.id === productToAdd.id
    );
    let filtered = products;
    products = products.filter((product) => product.id !== productToAdd.id);
    productToAdd = {
      ...productToAdd,
      ...{ amountInBasket: filtered[foundedProduct].amountInBasket + 1 },
    };

    products.push(productToAdd);
  }
  dispatch(set_products(products));
};

export default basketSlice.reducer;
