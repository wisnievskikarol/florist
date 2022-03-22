import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
const LogIn = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Box
      style={{
        height: "90vh",
        width: "100%",
      }}
    >
      <TextField label={"Imię"} id="margin-none" />
      {/* <TextField label={"Imię"} id="margin-none" /> */}
    </Box>
  );
};
export default LogIn;
