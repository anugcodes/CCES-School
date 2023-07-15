<<<<<<< HEAD
import React from "react";
import {
  Navbar,
  Link,
  Text,
  Modal,
  Button,
  Input,
  Row,
} from "@nextui-org/react";
import { Mail } from "./Mail";
import { Password } from "./Password";

function BarNav() {
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
  };

  const [visibleSignUp, setVisibleSignUp] = React.useState(false);
  const handlerSignUp = () => setVisibleSignUp(true);
  const closeSignUp = () => {
    setVisibleSignUp(false);
  };

  return (
    <>
      <Navbar isBordered isCompact variant="sticky" className="navIndex">
        <Navbar.Brand
          css={{
            "@xs": {
              w: "12%",
            },
          }}
        >
          {/* <AcmeLogo /> */}
          {/* <img src={favicon} alt='icon' width={50} height={50} /> */}
          <Text b color="inherit" size={30}>
            nude
          </Text>
          <Text b color="error" size={30}>
            .
          </Text>
        </Navbar.Brand>
        <Navbar.Content
          enableCursorHighlight
          activeColor="secondary"
          hideIn="sm"
          variant="highlight-rounded"
        >
          <Navbar.Link isActive href="#">
            Home
          </Navbar.Link>
          <Navbar.Link href="#">Products</Navbar.Link>
          <Navbar.Link href="#">About</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content
          enableCursorHighlight
          activeColor="secondary"
          hideIn="sm"
          variant="highlight-rounded"
        >
          <Navbar.Link href="#" onPress={handler}>
            LogIn
          </Navbar.Link>
          <Navbar.Link href="#" onPress={handlerSignUp}>
            SignUp
          </Navbar.Link>
        </Navbar.Content>

        <Navbar.Toggle showIn="sm" />

        <Navbar.Collapse>
          <Navbar.CollapseItem activeColor="secondary">
            <Link color="secondary" href="#">
              Home
            </Link>
          </Navbar.CollapseItem>
          <Navbar.CollapseItem activeColor="secondary">
            <Link color="secondary" href="#">
              Products
            </Link>
          </Navbar.CollapseItem>
          <Navbar.CollapseItem activeColor="secondary">
            <Link color="secondary" href="#">
              About
            </Link>
          </Navbar.CollapseItem>

          <Navbar.CollapseItem activeColor="secondary">
            <Link color="secondary" href="#" onPress={handler}>
              LogIn
            </Link>
          </Navbar.CollapseItem>
          <Navbar.CollapseItem activeColor="secondary">
            <Link color="secondary" href="#" onPress={handlerSignUp}>
              SignUp
            </Link>
          </Navbar.CollapseItem>
        </Navbar.Collapse>
      </Navbar>

      <Modal
        closeButton
        preventClose
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
        className="m-2"
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Welcome to
            <Text b size={18}>
              &nbsp;nude
            </Text>
            <Text b size={18} color="error">
              .
            </Text>
          </Text>
        </Modal.Header>
        <Modal.Body>
          <div className="my-3">
            <Input
              clearable
              bordered
              fullWidth
              color="primary"
              size="lg"
              labelPlaceholder="Email"
              contentLeft={<Mail fill="currentColor" />}
              id="email"
              name="email"
            />
          </div>
          <div className="my-3">
            <Input.Password
              clearable
              bordered
              fullWidth
              color="primary"
              size="lg"
              labelPlaceholder="Password"
              contentLeft={<Password fill="currentColor" />}
              id="password"
            />
          </div>
          <Row justify="space-between">
            <Text size={14}>
              <Link href="#" onPress={handlerSignUp}>
                Don't have Account?
              </Link>
            </Text>
            <Text size={14}>
              <Link href="#">Forgot password?</Link>
            </Text>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onPress={closeHandler}>
            Close
          </Button>
          <Button auto>Sign in</Button>
        </Modal.Footer>
      </Modal>

      <Modal
        closeButton
        preventClose
        aria-labelledby="modal-title"
        open={visibleSignUp}
        onClose={closeSignUp}
        className="m-2"
      >
        <Modal.Header>
          <Text id="modal-title" b size={23}>
            Create an account
          </Text>
        </Modal.Header>
        <Modal.Body>
          <div className="my-3">
            <Input
              clearable
              bordered
              fullWidth
              color="primary"
              size="lg"
              labelPlaceholder="Email"
              contentLeft={<Mail fill="currentColor" />}
              id="emailCreate"
            />
          </div>
          <div className="my-3">
            <Input.Password
              clearable
              bordered
              fullWidth
              color="primary"
              size="lg"
              labelPlaceholder="Password"
              contentLeft={<Password fill="currentColor" />}
              id="passCreate"
            />
          </div>
          <div className="my-3">
            <Input.Password
              clearable
              bordered
              fullWidth
              color="primary"
              size="lg"
              labelPlaceholder="Password Again"
              contentLeft={<Password fill="currentColor" />}
              id="passCreateCheck"
            />
          </div>
          <Text size={14}>
            <Link href="#" onPress={handler}>
              Already have Account?
            </Link>
          </Text>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onPress={closeSignUp}>
            Close
          </Button>
          <Button auto>Sign Up</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default BarNav;
=======
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const pages = ['Home', 'Men', 'Women', 'Accessories'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

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
    <AppBar position="sticky" sx={{background: 'white', color: 'black'}}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              fontSize: '1.7rem',
            }}
          >
            nude.
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu} >
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            nude.
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block', fontWeight: 'bold', ":hover" : {background:'none', borderBottom: '4px solid orange'} }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <AccountCircleOutlinedIcon sx={{width: '2.5rem', height: '2.5rem'}}/>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px', paddingLeft: '2rem' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
>>>>>>> ankit-dev
