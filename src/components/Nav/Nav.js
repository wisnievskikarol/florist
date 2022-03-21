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

export default function Nav() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const [auth, setAuth] = React.useState(true);
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
        {!matches && (
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
            {/* <MenuItem
              style={{
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
                color: "black",
              }}
            > */}
            <MenuItem>
              <Link to="XD">
                <Typography>Sklep</Typography>
              </Link>
            </MenuItem>
            {/* </MenuItem> */}
            <MenuItem sx={{ textAlign: "center", color: "black" }}>
              <Typography>Odkryj roślinę</Typography>
            </MenuItem>
            <Link to="/Logowanie">
              <MenuItem style={{ textAlign: "center", color: "black" }}>
                <Typography>Zaloguj się</Typography>
              </MenuItem>
            </Link>
            <MenuItem
              disableRipple={true}
              style={{ textAlign: "center", color: "black" }}
            >
              <button className="navbar-register-button">
                Zarejestruj się
              </button>
            </MenuItem>
          </Box>
        )}
      </AppBar>
    </Box>
  );
}
