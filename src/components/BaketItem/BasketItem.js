import React from "react";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { TextField, Grid, Box } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import basketPosition from "../../img/basketPosition.png";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const BasketItem = ({
  product,
  addProductToBasket,
  removeOneFromBasket,
  removeFromBasket,
}) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <ListItem alignItems="center" divider sx={{ marginTop: 3 }}>
      <ListItemAvatar>
        <Avatar
          alt="Remy Sharp"
          src={product.imgURL ? product.imgURL : basketPosition}
        />
      </ListItemAvatar>
      <ListItemText
        primary={product.name}
        secondary={
          <React.Fragment>
            <Typography
              sx={{
                display: "inline",
                fontWeight: "bold",
              }}
            >
              Cena za sztukę:
            </Typography>
            {` ${product.price} zł`}
          </React.Fragment>
        }
        primaryTypographyProps={{ fontWeight: "bold" }}
      />
      <Box sx={{ width: "80%" }}>
        <Grid container direction="row" alignItems="center">
          <Grid item xs={12} md={3} align="right">
            <AddCircleOutlineIcon
              sx={{ cursor: "pointer" }}
              onClick={() => addProductToBasket(product)}
            />
          </Grid>
          <Grid item xs={12} md={4} align="center">
            <TextField
              label="Ilość"
              disabled
              value={product.amountInBasket}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">{` / ${product.quantity}`}</InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} md={3} align={matches ? "right" : "left"}>
            <RemoveIcon
              sx={{ cursor: "pointer" }}
              onClick={() => removeOneFromBasket(product)}
            />
          </Grid>
          <Grid item xs={12} md={2} align={matches ? "right" : "center"}>
            <DeleteForeverIcon
              sx={{ color: "red", cursor: "pointer" }}
              onClick={() => removeFromBasket(product)}
            />
          </Grid>
        </Grid>
      </Box>
    </ListItem>
  );
};

export default BasketItem;
