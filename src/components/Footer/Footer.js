import React from "react";
import { BottomNavigation } from "@mui/material";
import { Box } from "@mui/material";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FolderIcon from "@mui/icons-material/Folder";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { lineHeight } from "@mui/system";
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
