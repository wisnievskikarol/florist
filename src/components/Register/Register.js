import React, { useState } from "react";
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
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../../api/FetchData";
import { GoogleLogin } from "react-google-login";
import { loginUser } from "../../stores/userInfoStore";

const Register = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const userInfo = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const theme = useTheme();

  const submit = () => {
    const user = {
      firstName: name,
      lastName: surname,
      password,
      email,
    };
    auth
      .register(user)
      .then((res) => {
        navigate("/logowanie");
      })
      .catch((err) => {
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 2000);
      });
  };

  const handleFailure = (result) => {
    return null;
  };

  const handleLogin = async (response) => {
    if (response?.accessToken) {
      dispatch(loginUser(response?.profileObj?.email, response?.tokenId, true));
      navigate("/");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        height: "80vh",
        [theme.breakpoints.down("md")]: {
          flexDirection: "column",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          paddingTop: "20px",
          paddingBottom: "20px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            maxWidth: "400px",
          }}
        >
          <Box sx={{ lineHeight: "3.53em" }}>
            <Typography
              variant="h4"
              sx={{
                width: "100%",
                marginTop: "12px",
                fontWeight: "normal",
                marginBottom: "10px",
              }}
            >
              Hej, zarejestruj się!
            </Typography>
            <Typography
              sx={{ fontWeight: "normal", color: "gray", marginBottom: "10px" }}
            >
              Podaj swoje, by się zarejestrować
            </Typography>
          </Box>
          <GoogleLogin
            clientId="676799456601-hu3k0k4ko7h7s52t8p7quk7kqho87umb.apps.googleusercontent.com"
            render={(renderProps) => (
              <Button
                variant="outlined"
                sx={{
                  marginTop: "10px",
                  color: "#0a5c5c",
                  borderColor: "#0a5c5c",
                  borderRadius: "30px",
                  "&:hover": {
                    background: "#0a5c5c",
                    color: "white",
                  },
                }}
                onClick={renderProps.onClick}
              >
                <GoogleIcon sx={{ marginRight: "10px" }} /> Log in with Google
              </Button>
            )}
            buttonText="Login"
            onSuccess={handleLogin}
            onFailure={handleFailure}
            cookiePolicy={"single_host_origin"}
            isSignedIn={false}
          />

          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Box sx={{ width: "140px", margin: "20px 0  20px 0" }}>
              <img src={Or}></img>
            </Box>
          </Box>

          <TextField
            label={"Imię"}
            sx={{ marginBottom: "12px" }}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            label={"Nazwisko"}
            sx={{ marginBottom: "12px" }}
            onChange={(e) => setSurname(e.target.value)}
          />
          <TextField
            label={"Adres email"}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormControl
            sx={{ width: "100%", width: "100%", marginTop: "12px" }}
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
      <Box
        sx={{
          backgroundImage: `url(${Img})`,
          height: "100%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          overflow: "hidden",
          backgroundPosition: "center",
          width: "100%",
          justifyContent: "center",
        }}
      ></Box>
    </Box>
  );
};
export default Register;
