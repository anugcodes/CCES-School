/** @jsxImportSource @emotion/react */

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { css } from "@emotion/react";

import { useNavigate } from "react-router-dom";

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="sticky" sx={{ background: "white", color: "black" }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              fontSize: "1.7rem",
            }}
          >
            nude.
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem
                onClick={() => {
                  navigate("/");
                }}
              >
                <Typography textAlign="center">Home</Typography>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  navigate("/category");
                }}
              >
                <Typography textAlign="center">Menu</Typography>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  navigate("/product");
                }}
              >
                <Typography textAlign="center">Women</Typography>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  navigate("/product");
                }}
              >
                <Typography textAlign="center">Accessories</Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            nude
            <span
              style={css`
                color: red;
              `}
            >
              .
            </span>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              onClick={() => {
                navigate("/");
              }}
              sx={{
                my: 2,
                color: "black",
                display: "block",
                fontWeight: "bold",
                ":hover": {
                  background: "none",
                  borderBottom: "4px solid orange",
                },
              }}
            >
              Home
            </Button>
            <Button
              onClick={() => {
                navigate("/category");
              }}
              sx={{
                my: 2,
                color: "black",
                display: "block",
                fontWeight: "bold",
                ":hover": {
                  background: "none",
                  borderBottom: "4px solid orange",
                },
              }}
            >
              Men
            </Button>
            <Button
              onClick={() => {
                navigate("/product");
              }}
              sx={{
                my: 2,
                color: "black",
                display: "block",
                fontWeight: "bold",
                ":hover": {
                  background: "none",
                  borderBottom: "4px solid orange",
                },
              }}
            >
              Women
            </Button>
            <Button
              onClick={() => {
                navigate("/product");
              }}
              sx={{
                my: 2,
                color: "black",
                display: "block",
                fontWeight: "bold",
                ":hover": {
                  background: "none",
                  borderBottom: "4px solid orange",
                },
              }}
            >
              Accessories
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
          <Tooltip sx={{paddingRight: '1rem'}}>
            <IconButton sx={{ p: 0 }} onClick={() => {
                navigate('/myaccount/cart')
              }}>
                <ShoppingCartIcon
                  sx={{ width: "2rem", height: "2rem" }}
                />
              </IconButton>
            </Tooltip>
            <Tooltip title="Open settings">
              
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <AccountCircleOutlinedIcon
                  sx={{ width: "2.5rem", height: "2.5rem" }}
                />
              </IconButton>
            </Tooltip>
            
            <Menu
              sx={{ mt: "45px", paddingLeft: "2rem" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem
              onClick={() => {
                navigate("/myaccount");
              }}>
                <Typography textAlign="center">Account</Typography>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  navigate("/myaccount/profile");
                }}
              >
                <Typography textAlign="center">Profile</Typography>
              </MenuItem>
              <MenuItem
              onClick={() => {
                navigate("/myaccount/address");
              }}>
                <Typography textAlign="center">Address</Typography>
              </MenuItem>
              <MenuItem
              onClick={() => {
                navigate("/myaccount/orders");
              }}>
                <Typography textAlign="center">My Orders</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
