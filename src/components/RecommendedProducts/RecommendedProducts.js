import React from "react";
import { ProductCard } from "../ProductCard/ProductCard";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const RecommendedProducts = (props) => {
  const items = useSelector((state) => state.plants.store);
  const matches = useMediaQuery("(min-width:1040px)");

  let itemsRecommended = [];

  for (let i = 0; i < 4; i++) {
    itemsRecommended.push(items[i]);
  }

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
          justifyContent: matches ? "space-between" : "center",
          flexWrap: "wrap",
        }}
      >
        {itemsRecommended.map((el) => {
          return (
            <Link to={`/sklep/${el?.id}`}>
              {" "}
              <ProductCard
                name={el?.name}
                price={el?.price}
                img={el?.imgURL}
              ></ProductCard>
            </Link>
          );
        })}
      </Box>
    </Box>
  );
};
