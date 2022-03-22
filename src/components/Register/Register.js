import React, { useState } from "react";

import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/FormControl";
import Typography from "@mui/material/Typography";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
// import Photo from "../../img/discoverPlant.png";
import Photo from "../../img/leafs.jpg";
const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [store, setStore] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
  });

  const styles = {
    paperContainer: {
      backgroundImage: `url(${Image})`,
    },
  };

  // const handleChange = () => {};

  return (
    // <Grid container spacing={0}>
    //   <Grid item xs={2}>
    //     <Box
    //       sx={{
    //         height: "calc(100vh - 100px)",
    //         display: "flex",
    //         alignItems: "center",
    //         justifyContent: "center",
    //         width: "100%",
    //       }}
    //     >
    //       <Box
    //         sx={
    //           {
    //             //   display: "flex",
    //             //   flexDirection: "column",
    //             //   justifyContent: "center",
    //             //   alignContent: "center",
    //             //   alignItems: "center",
    //           }
    //         }
    //       >
    //         <Typography variant="h3" gutterBottom component="div">
    //           Dołącz do nas!🌼
    //         </Typography>
    //         <TextField sx={{ marginY: 1 }} label={"Imię"} id="margin-none" />
    //         <TextField
    //           sx={{ marginY: 1 }}
    //           label={"Nazwisko"}
    //           id="margin-none"
    //         />
    //         <TextField sx={{ marginY: 1 }} label={"Email"} id="margin-none" />
    //         <FormControl
    //           sx={{ m: 2, width: "25ch", marginY: 2 }}
    //           variant="outlined"
    //         >
    //           <InputLabel htmlFor="outlined-adornment-password">
    //             Password
    //           </InputLabel>
    //           <OutlinedInput
    //             id="outlined-adornment-password"
    //             type={showPassword ? "text" : "password"}
    //             // value={values.password}
    //             // onChange={handleChange('password')}
    //             endAdornment={
    //               <InputAdornment position="end">
    //                 <IconButton
    //                   aria-label="toggle password visibility"
    //                   onClick={() => setShowPassword(!showPassword)}
    //                   // onMouseDown={handleMouseDownPassword}
    //                   edge="end"
    //                 >
    //                   {!showPassword ? <VisibilityOff /> : <Visibility />}
    //                 </IconButton>
    //               </InputAdornment>
    //             }
    //             label="Password"
    //           />
    //         </FormControl>
    //         <Button
    //           size="large"
    //           sx={{
    //             borderRadius: 30,
    //             borderColor: "#0a5c5c",
    //             color: "#0a5c5c",
    //             "&:hover": {
    //               background: "#0a5c5c",
    //               color: "white",
    //             },
    //           }}
    //           variant="outlined"
    //         >
    //           Zatwierdz
    //         </Button>
    //       </Box>
    //     </Box>
    //   </Grid>
    //   <Grid item xs={2}>
    //     <Box></Box>
    //   </Grid>
    // </Grid>
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={6}>
        <Box
          sx={{
            height: "calc(100vh - 100px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              style={{ fontWeight: "medium" }}
              variant="h3"
              gutterBottom
              component="div"
            >
              Dołącz do nas!
            </Typography>
            <TextField
              sx={{ marginY: 1, width: "25ch" }}
              label={"Imię"}
              id="margin-none"
            />
            <TextField
              sx={{ marginY: 1, width: "25ch" }}
              label={"Nazwisko"}
              id="margin-none"
            />
            <TextField
              sx={{ marginY: 1, width: "25ch" }}
              label={"Email"}
              id="margin-none"
            />
            <FormControl
              sx={{ m: 2, width: "25ch", marginY: 2 }}
              variant="outlined"
            >
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                // value={values.password}
                // onChange={handleChange('password')}
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
            <Button
              size="large"
              sx={{
                borderRadius: 30,
                borderColor: "#0a5c5c",
                color: "#0a5c5c",
                width: "25ch",
                "&:hover": {
                  background: "#0a5c5c",
                  color: "white",
                },
              }}
              variant="outlined"
            >
              Zatwierdz
            </Button>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={6}>
        {/* <Box xs={{ backgroundColor: "black", height: "100vh" }}>Kurwa</Box> */}
        <div
          style={{
            backgroundImage: `url(${Photo})`,
            height: "100vh",
            backgroundSize: "cover",
          }}
        ></div>
      </Grid>
    </Grid>
  );
};
export default Register;
