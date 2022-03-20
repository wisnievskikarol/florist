import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import Logo from "../../img/logo.svg";
import { Link } from "react-router-dom";
import "./Nav.scss";
import Container from "@material-ui/core/Container";

export default function Nav() {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleChange = (event) => {
    // setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    // setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    // setAnchorEl(null);
  };

  return (
    <Box>
      {/* <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={auth}
              onChange={handleChange}
              aria-label="login switch"
            />
          }
          label={auth ? "Logout" : "Login"}
        />
      </FormGroup> */}
      <AppBar
        style={{ backgroundColor: "white" }}
        position="static"
        elevation={0}
        sx={{ paddingY: 2 }}
      >
        <Container maxWidth="xl">
          <Toolbar>
            <Toolbar variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <img
                src={Logo}
                style={{ width: "110px" }}
                alt="logo"
                sx={{ mr: 2 }}
              />
            </Toolbar>
            {auth && (
              <div>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                </Menu>
              </div>
            )}

            <Link to="/" style={{ textDecoration: "none" }}>
              <MenuItem style={{ textAlign: "center", color: "black" }}>
                <Typography>Sklep</Typography>
              </MenuItem>
            </Link>
            <Link to="/OdkryjRosline">
              <MenuItem style={{ textAlign: "center", color: "black" }}>
                <Typography>Odkryj roślinę</Typography>
              </MenuItem>
            </Link>
            <Link to="/Logowanie">
              <MenuItem style={{ textAlign: "center", color: "black" }}>
                <Typography>Zaloguj się</Typography>
              </MenuItem>
            </Link>
            <Link to="/Rejestracja">
              <MenuItem
                disableRipple="true"
                style={{ textAlign: "center", color: "black" }}
              >
                <button className="navbar-register-button">
                  Zarejestruj się
                </button>
              </MenuItem>
            </Link>

            {/* <Typography>Odkryj roślinę</Typography>
              <Typography>Zaloguj się</Typography>
              <Typography>Zarejestruj się</Typography> */}
            {/* <IconButton
              style={{ color: "black" }}
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton> */}
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
