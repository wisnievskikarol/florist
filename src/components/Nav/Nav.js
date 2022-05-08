import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Logo from "../../img/logo.svg";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../stores/userInfoStore";
import LogoutIcon from "@mui/icons-material/Logout";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import Popover from "@mui/material/Popover";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import YardIcon from "@mui/icons-material/Yard";
import "./Nav.scss";

export default function Nav() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const [menuToggle, setMenuToggle] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const userInfo = useSelector((state) => state.user);
  const basketInfo = useSelector((state) => state.basket.products);
  const dispatch = useDispatch();

  console.log("basket info", basketInfo);

  const [view, setView] = React.useState(
    window.innerWidth >= 1000 ? "desktop" : "mobile"
  );

  const [basketAnchorEl, setBasketAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setBasketAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setBasketAnchorEl(null);
  };

  const open = Boolean(basketAnchorEl);

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
          {userInfo.isLoggedIn && (
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
              <IconButton
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
              >
                <ShoppingBasketIcon sx={{ color: "#0a5c5c" }} />
              </IconButton>
              <Popover
                sx={{
                  pointerEvents: "none",
                }}
                open={open}
                anchorEl={basketAnchorEl}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                onClose={handlePopoverClose}
                disableRestoreFocus
              >
                <Box sx={{ padding: 3 }}>
                  {basketInfo.length === 0 ? (
                    <Typography sx={{ fontWeight: "bold" }}>
                      Koszyk pusty
                    </Typography>
                  ) : (
                    <List
                      sx={{
                        width: "100%",
                        bgcolor: "background.paper",
                      }}
                    >
                      <Typography
                        sx={{ fontWeight: "bold", textAlign: "center" }}
                      >
                        Mój koszyk
                      </Typography>
                      <Divider />
                      {basketInfo.map((product) => (
                        <ListItem>
                          <ListItemAvatar>
                            <Avatar sx={{ backgroundColor: "#0a5c5c" }}>
                              <YardIcon />
                            </Avatar>
                          </ListItemAvatar>
                          <ListItemText
                            primary={product.name}
                            secondary={`${product.price} zł`}
                            primaryTypographyProps={{ fontWeight: "bold" }}
                          />
                        </ListItem>
                      ))}
                    </List>
                  )}
                </Box>
              </Popover>
              {userInfo.isLoggedIn ? (
                <IconButton onClick={() => dispatch(logout())}>
                  <LogoutIcon sx={{ color: "red" }} />
                </IconButton>
              ) : (
                <Link to="/Logowanie">
                  <MenuItem style={{ textAlign: "center", color: "black" }}>
                    <Typography>Zaloguj się</Typography>
                  </MenuItem>
                </Link>
              )}
              {userInfo.isLoggedIn ? null : (
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
              )}
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
            <MenuItem
              sx={{
                marginY: "5px",
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
                color: "black",
              }}
              onClick={() => (userInfo.isLoggedIn ? dispatch(logout()) : null)}
            >
              <Typography>
                {userInfo.isLoggedIn ? "Wyloguj się" : "Zaloguj się"}
              </Typography>
            </MenuItem>
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
