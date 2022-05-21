import React from "react";
import { Link } from "react-router-dom";
import { Box, Grid, Typography, Avatar, Button } from "@mui/material";
import leafImage from "../../img/discoverPlant.png";
import useMediaQuery from "@mui/material/useMediaQuery";
import ProductCard from "../ProductCard/ProductCard"
import { useTheme } from "@mui/material/styles";

const DiscoverPlant = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box sx={{ width: "100%" }}>
      <Grid item xs={12}>
        <Grid container direction="row" alignItems="center">
          <Grid item xs={12} md={6} align="left">
            <Box>
              <Typography
                sx={{
                  fontFamily: "NHaasGroteskTXPro",
                  fontWeight: "bold",
                  fontSize: "50px",
                  textAlign: "",
                }}
              >
                Odkryj roślinę
              </Typography>
              <Typography
                sx={{
                  fontFamily: "NHaasGroteskTXPro",
                  fontWeight: "bold",
                  fontSize: "50px",
                }}
              >
                dla siebie
              </Typography>
              <Link to="OdkryjRosline">
                <Button
                  variant="contained"
                  sx={{
                    padding: "10px 20px",
                    marginTop: "5%",
                    marginBottom: "5%",
                    backgroundColor: "#0a5c5c",
                    boxShadow: "none",
                    textTransform: "none",
                    borderRadius: 30,
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "NHaasGroteskTXPro",
                      fontWeight: "regular",
                      paddingLeft: 1,
                      paddingRight: 1,
                    }}
                  >
                    Sprawdź!
                  </Typography>
                </Button>
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Avatar
              variant="square"
              src={leafImage}
              sx={{ width: "100%", height: "auto" }}
            />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DiscoverPlant;
