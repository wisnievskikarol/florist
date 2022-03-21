import React from "react";
import { Box } from "@mui/material";
import DiscoverPlant from "../../components/DiscoverPlant/DiscoverPlant";
import Container from "@mui/material/Container";
import { RecommendedProducts } from "../../components/RecommendedProducts/RecommendedProducts";
function Home() {
  return (
    <Box>
      {/* <DiscoverPlant /> */}
      <Container>
        <RecommendedProducts />
      </Container>
    </Box>
  );
}

export default Home;
