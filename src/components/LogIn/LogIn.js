import React, { useState, useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import GoogleIcon from "@mui/icons-material/Google";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import { Typography } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Img from "../../img/discoverPlant.png";
import Or from "../../img/or.svg";
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loginUser } from "../../stores/userInfoStore";
import { GoogleLogin } from "react-google-login";

const LogIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const theme = useTheme();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState(false);
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (userInfo.isLoggedIn) {
      navigate("/");
    }
  }, [userInfo.isLoggedIn]);

  const responseGoogle = (response) => {
    console.log(response);
    if (response?.tokenObj?.access_token) {
      dispatch(
        loginUser(
          response?.profileObj?.email,
          response?.tokenObj?.access_token,
          true
        )
      );
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
              sx={{
                fontWeight: "normal",
                marginBottom: "10px",
                width: "100%",
                marginTop: "12px",
              }}
              variant="h4"
            >
              Witaj
            </Typography>
            <Typography
              sx={{ fontWeight: "normal", color: "gray", marginBottom: "10px" }}
            >
              Podaj swoje dane logowania
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
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
            isSignedIn={true}
          />
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Box sx={{ width: "140px", margin: "20px 0  20px 0" }}>
              <img src={Or} alt="Brak" />
            </Box>
          </Box>
          <TextField
            label={"Adres email"}
            id="margin-none"
            onChange={(e) => setLogin(e.target.value)}
          />
          <FormControl
            sx={{ width: "100%", marginTop: "20px" }}
            variant="outlined"
          >
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              onChange={(e) => setPassword(e.target.value)}
              type={showPassword ? "text" : "password"}
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
          {userInfo.error ? (
            <Typography
              sx={{
                fontWeight: "regular",
                color: "red",
                marginBottom: "10px",
                marginTop: "10px",
                textAlign: "center",
              }}
            >
              {userInfo.error}
            </Typography>
          ) : null}
          <Button
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
            onClick={() => dispatch(loginUser(login, password, false))}
          >
            {!userInfo.loginPending ? (
              <Typography>Zaloguj się</Typography>
            ) : (
              <CircularProgress sx={{ color: "white" }} />
            )}
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
      />
    </Box>
  );
};
export default LogIn;
