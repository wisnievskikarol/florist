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
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import "./Nav.scss";
import Container from "@material-ui/core/Container";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function Nav() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const [auth, setAuth] = React.useState(true);
  const [menuToggle, setMenuToggle] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const [view, setView] = React.useState(
    window.innerWidth >= 1000 ? "desktop" : "mobile"
  );

  // React.useEffect(() => {
  //   function handleResize() {
  //     console.log(
  //       "resized to: ",
  //       window.innerWidth,
  //       "x",
  //       window.innerHeight,
  //       " ",
  //       view
  //     );
  //     window.innerWidth >= 1000 ? setView("desktop") : setView("mobile");
  //   }

  //   window.addEventListener("resize", handleResize);
  // });

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
    <Box sx={{ marginBottom: "96px" }}>
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
        position="fixed"
        elevation={0}
        sx={{ paddingY: 2 }}
        // position="fixed"
      >
        <Toolbar>
          <Toolbar variant="h6" component="div" sx={{ flexGrow: 2 }}>
            <Link to="/">
              <img
                src={Logo}
                style={{ width: "110px" }}
                alt="logo"
                // sx={{ mr: 2, marginLeft: "20%" }}
              />
            </Link>
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

          {matches ? (
            <>
              <Link to="/sklep" style={{ textDecoration: "none" }}>
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
                  disableRipple={true}
                  style={{ textAlign: "center", color: "black" }}
                >
                  <button className="navbar-register-button">
                    Zarejestruj się
                  </button>
                </MenuItem>
              </Link>
            </>
          ) : (
            <IconButton
              onClick={() => {
                setMenuToggle(!menuToggle);
              }}
              style={{ color: "black" }}
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
        {!matches && menuToggle && (
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              textAlign: "center",
              color: "black",
              padding: "20px",
            }}
          >
            <Link to="/sklep">
              <MenuItem
                sx={{
                  marginY: "5px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Typography>Sklep</Typography>
              </MenuItem>
            </Link>
            {/* </MenuItem> */}
            <MenuItem
              sx={{
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
                color: "black",
                marginY: "5px",
              }}
            >
              <Typography>Odkryj roślinę</Typography>
            </MenuItem>
            <Link to="/OdkryjRosline">
              <MenuItem
                sx={{
                  marginY: "5px",
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                  color: "black",
                }}
              >
                <Typography>Zaloguj się</Typography>
              </MenuItem>
            </Link>
            <Link to="/Rejestracja">
              <MenuItem
                disableRipple={true}
                sx={{
                  marginY: "5px",
                  textAlign: "center",
                  color: "black",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <button className="navbar-register-button">
                  Zarejestruj się
                </button>
              </MenuItem>
            </Link>
          </Box>
        )}
      </AppBar>
    </Box>
  );
}
