import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Swiper, SwiperSlide } from "swiper/react";
import Typography from "@mui/material/Typography";
import "swiper/css";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { makeStyles } from "@material-ui/core/styles";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useDispatch, useSelector } from "react-redux";
import { addProductToBasket } from "../../stores/basketStore";
import InputAdornment from "@mui/material/InputAdornment";
import { useNavigate } from "react-router-dom";

const ProductView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const productData = useSelector((state) => state.plants.store).filter(
    (el) => el.id == id
  )[0];
  const [amount, setAmount] = useState(1);
  const dispatch = useDispatch();

  const useStyles = makeStyles({
    root: {
      backgroundColor: "#0a5c5c",
      border: 0,
      borderRadius: 30,
      boxShadow: "none",
      color: "white",
      height: 48,
      padding: "0 30px",
      "&:hover": {
        border: "none",
        backgroundColor: "#054949",
      },
      "&:active": {
        border: "none",
        backgroundColor: "#054949",
      },
    },
  });
  const classes = useStyles();

  return (
    <Container maxWidth="xl" sx={{ marginBottom: "50px" }}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box>
              <Swiper
                style={{ maxHeight: "700px" }}
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}
              >
                <SwiperSlide>
                  {" "}
                  <img
                    style={{ width: "100%", height: "100%" }}
                    src={productData.imgURL}
                  ></img>
                </SwiperSlide>
                {/*<SwiperSlide>*/}
                {/*    {" "}*/}
                {/*    <img style={{width: "100%"}} src={Photo}></img>*/}
                {/*</SwiperSlide>*/}
              </Swiper>
            </Box>
            {/*<Item>xs=8</Item>*/}
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
              }}
            >
              <Typography
                sx={{ fontWeight: "medium", fontSize: "33px" }}
                variant="body2"
                color="black"
              >
                {productData.name}
              </Typography>
              <Typography sx={{ fontSize: "22px", margin: "5px 0 20px 0" }}>
                {productData.price} zł
              </Typography>
              <Typography>{productData.description}</Typography>
              <TextField
                sx={{ margin: "20px 0 20px 0" }}
                style={{ width: "100px" }}
                id="outlined-basic"
                disabled={!productData.inStock}
                label="ilość"
                value={amount}
                onChange={(e) =>
                  e.target.value >= 0 && e.target.value <= productData.quantity
                    ? setAmount(e.target.value)
                    : null
                }
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">{` / ${productData.quantity}`}</InputAdornment>
                  ),
                }}
                variant="outlined"
              />
              <Stack spacing={2} direction="row">
                <Button
                  className={classes.root}
                  disabled={!productData.inStock}
                  variant="outlined"
                  onClick={() => {
                    dispatch(addProductToBasket(productData, amount));
                    navigate("/koszyk");
                  }}
                >
                  Kup teraz
                </Button>
                <Button
                  onClick={() =>
                    dispatch(addProductToBasket(productData, amount))
                  }
                  className={classes.root}
                  disabled={!productData.inStock}
                  variant="outlined"
                >
                  Dodaj do koszyka
                </Button>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};
export default ProductView;
