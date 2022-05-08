import React from "react";
import { ProductCard } from "../ProductCard/ProductCard";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
export const RecommendedProducts = (props) => {
  const matches = useMediaQuery("(min-width:1040px)");
  let lorem =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo";
  return (
    <Box sx={{ marginY: "5rem" }}>
      <Box style={{ display: "flex" }}>
        <h2>Polecane</h2>
        <h2
          style={{
            fontFamily: "NHaasGroteskTXPro",
            fontWeight: "lighter",
            marginLeft: "6px",
          }}
        >
          dla Ciebie
        </h2>
      </Box>
      <Box
        sx={{
          display: "flex",
          // justifyContent: "center",
          justifyContent: matches ? "space-between" : "center",
          flexWrap: "wrap",
          // flexDirection: matches ? "row" : "column",
        }}
      >
        <ProductCard name="Kaktus zielony" price = "12.31" />
          <ProductCard name="Kaktus zielony" price = "12.31" />
          <ProductCard name="Kaktus zielony" price = "12.31" />
          <ProductCard name="Kaktus zielony" price = "12.31" />
      </Box>
    </Box>
  );
};
