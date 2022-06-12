import React, { useEffect, useState } from "react";
import { Typography, Box, Grid } from "@mui/material";
import { auth } from "../../api/FetchData";
import { useNavigate } from "react-router-dom";

const VerificationScreen = () => {
  const [loading, setLoading] = useState(true);
  const [verified, setVerified] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let params = new URL(window.location).searchParams;
    auth
      .confirmAccount(params.get("token"))
      .then(() => {
        setVerified(true);
        setLoading(false);
        setTimeout(() => {
          navigate("/Logowanie");
        }, 3000);
      })
      .catch(() => {
        setVerified(false);
        setLoading(false);
      });
  });

  return (
    <Grid
      container
      direction="row"
      alignSelf="center"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item xs={12} align="center" sx={{ height: "60vh" }}>
        <Box
          sx={{
            width: "30vw",
            marginTop: "10vh",
            backgroundColor: verified ? "#0a5c5c" : "red",
            padding: 3,
            borderRadius: 5,
          }}
        >
          <Typography
            sx={{
              color: "white",
              textAlign: "center",
              fontSize: 30,
            }}
          >
            {loading
              ? "Trwa weryfikacja ..."
              : verified
              ? "Konto potwierdzone"
              : "Błąd weryfikacji"}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default VerificationScreen;
