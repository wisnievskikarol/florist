import React from "react";
import {
  Typography,
  Box,
  Grid,
  Divider,
  TextField,
  Avatar,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";

const MyOrders = () => {
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
            Twoje Zamówienia
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default MyOrders;
