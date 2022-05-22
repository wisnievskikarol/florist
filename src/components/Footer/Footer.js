import { BottomNavigation, Box } from "@mui/material";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import ListItem from "@mui/material/ListItem";
import React from "react";
const Footer = () => {
  const [value, setValue] = React.useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      sx={{
        backgroundColor: "#042e2e",
        height: "150px",
        padding: "30px 0",
        color: "white",
        flexShrink: 0,
        // marginTop : "40px"

        // marginTop: "10rem",
      }}
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    >
      <Container maxWidth="xl">
        <Box>
          <Grid container spacing={3}>
            <Grid item xs={3} sx={{ lineHeight: "1.8rem" }}>
              <h3>Kontakt</h3>
              <Link
                href="https://www.facebook.com/"
                target="_blank"
                color="inherit"
              >
                <ListItem disablePadding>Faceboobk</ListItem>
              </Link>
              <Link
                href="https://www.facebook.com/"
                target="_blank"
                color="inherit"
              >
                <ListItem disablePadding>Instagram</ListItem>
              </Link>
              <Link
                href="https://www.facebook.com/"
                target="_blank"
                color="inherit"
              >
                <ListItem disablePadding>PlantsForYou@mail.com</ListItem>
              </Link>
            </Grid>
            <Grid item xs={3}></Grid>
            <Grid item xs={3}></Grid>
          </Grid>
        </Box>
        {/* <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
      <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} /> */}
      </Container>
    </BottomNavigation>
  );
};
export default Footer;
