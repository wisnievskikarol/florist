import React from "react";
import { Box, Grid, Typography, Avatar, Button } from "@mui/material";
import leafImage from "../../img/discoverPlant.png";
import useMediaQuery from "@mui/material/useMediaQuery";

import { useTheme } from "@mui/material/styles";

const DiscoverPlant = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  console.log(matches);
  return (
    <Box sx={{ width: "100vw" }}>
      <Grid item xs={12}>
        <Grid container direction="row" alignItems="center" spacing={3}>
          <Grid item xs={12} md={6} align="left">
            <Box sx={{ marginLeft: "30%" }}>
              <Typography
                sx={{
                  fontFamily: "NHaasGroteskTXPro",
                  fontWeight: "bold",
                  fontSize: "50px",
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
              <Button
                variant="contained"
                sx={{
                  marginTop: "5%",
                  backgroundColor: "#0a5c5c",
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
