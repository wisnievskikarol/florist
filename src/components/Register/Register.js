import React, { useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import GoogleIcon from "@mui/icons-material/Google";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import { Typography } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import Grid from "@mui/material/Grid";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Img from "../../img/discoverPlant.png";
import Or from "../../img/or.svg";
import { makeStyles } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { loginUser } from "../../stores/userInfoStore";
import { auth } from "../../api/FetchData";

const useStyles = makeStyles((theme) => ({
  left: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    paddingTop: "20px",
    paddingBottom: "20px",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    color: "#0a5c5c",
    borderColor: "#0a5c5c",
    borderRadius: "30px",
    "&:hover": {
      background: "#0a5c5c",
      color: "white",
    },
  },
  container: {
    display: "flex",
    flexDirection: "row",
    height: "80vh",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
  right: {
    backgroundImage: `url(${Img})`,
    height: "100%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    overflow: "hidden",
    backgroundPosition: "center",
    width: "100%",
    justifyContent: "center",
    // [theme.breakpoints.down("lg")]: {
    //   color: "red",
    // },
  },
  leftInner: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    maxWidth: "400px",
  },
  elements: {
    width: "100%",
    marginTop: "12px",
  },
}));

const LogIn = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const userInfo = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [error, setError] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  const submit = () => {
    const user = {
      name,
      surname,
      password,
      email,
    };
    auth
      .register(user)
      .then((res) => {
        dispatch(loginUser({ email, password }));
      })
      .catch((err) => {
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 2000);
      });
  };

  const [open, setOpen] = useState(false);
  const classes = useStyles({ open });
  return (
    <div className={classes.container}>
      <Box className={classes.left}>
        <Box className={classes.leftInner}>
          <Box sx={{ lineHeight: "3.53em" }}>
            <Typography
              sx={{ fontWeight: "normal", marginBottom: "10px" }}
              variant="h4"
              className={classes.elements}
            >
              Hej, zarejestruj się!
            </Typography>
            <Typography
              sx={{ fontWeight: "normal", color: "gray", marginBottom: "10px" }}
            >
              Podaj swoje, by się zarejestrować
            </Typography>
          </Box>

          <Button
            variant="outlined"
            sx={{ marginTop: "10px" }}
            className={classes.button}
          >
            <GoogleIcon sx={{ marginRight: "10px" }} /> Log in with Google
          </Button>

          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Box sx={{ width: "140px", margin: "20px 0  20px 0" }}>
              <img src={Or}></img>
            </Box>
          </Box>

          <TextField
            label={"Imię"}
            sx={{ marginBottom: "12px" }}
            id="margin-none"
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            label={"Nazwisko"}
            sx={{ marginBottom: "12px" }}
            id="margin-none"
            onChange={(e) => setSurname(e.target.value)}
          />
          <TextField
            label={"Adres email"}
            id="margin-none"
            onChange={(e) => setEmail(e.target.value)}
          />
          {/* <TextField label={"Adres email"} id="margin-none" /> */}
          <FormControl
            className={classes.elements}
            sx={{ width: "100%" }}
            variant="outlined"
          >
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              onChange={(e) => setPassword(e.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword(!showPassword)}
                    // onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {!showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          {error ? (
            <Grid item xs={12}>
              <Box
                sx={{ marginLeft: "20%", marginRight: "20%", marginTop: "5%" }}
              >
                <Typography
                  sx={{
                    fontFamily: "Montserrat",
                    fontWeight: "regular",
                    color: "red",
                    textAlign: "center",
                    fontSize: "15px",
                  }}
                >
                  Błąd rejestracji: istnieje już użytkownik o podanych danych
                </Typography>
              </Box>
            </Grid>
          ) : null}
          <Button
            onClick={submit}
            sx={{
              margin: "25px 0 25px 0",
              color: "#0a5c5c",
              borderColor: "#0a5c5c",
              borderRadius: "30px",
              "&:hover": {
                background: "#0a5c5c",
                color: "white",
              },
            }}
            variant="outlined"
          >
            Zarejestruj się
          </Button>
        </Box>
      </Box>
      <Box className={classes.right}></Box>
    </div>
  );
};
export default LogIn;
