import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { css } from "@emotion/react";
import Stack from "@mui/material/Stack";
import Collapse from "@mui/material/Collapse";
import Container from "@mui/material/Container";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

import Avatar from '@mui/material/Avatar';
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const styles = {
    logo: css`
      height: 100%;
      display: flex;
      text-decoration: none;
      img {
        max-width: 3rem;
        object-fit: cover;
      }
    `,
    menuButton: css`
      margin-right: 1rem;
      color: #000000;
      @media (min-width: 768px) {
        display: none;
      }
    `,
    links: css`
      display: none;
      @media (min-width: 768px) {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    `,

    link: css`
      color: #094559;
      font-size: 1.2rem;
      text-decoration: none;
      margin: 0 1rem;
      &:hover {
        color: #9d8f33;
        background: none;
        border: none;
      }
    `,

    main: css`
      font-family: "bebas neue", sans-serif;
      background: #fffdfd;
      padding: 0.5rem 0;
      position: fixed;
      width: 100%;
      min-height: 3.5rem;
      top: 0;
      z-index: 100;
    `,

    avatar: css`
      width: 4rem;
      height: 4rem;
      padding: 0;
      margin: 0;
    `

  };

  return (
    <Box sx={{ marginBottom: "3.5rem" }}>
      <Box sx={styles.main}>
        <Container maxWidth="xl">
          <Box
          sx={css`
              display: flex;
              justify-content: space-between;
            `}
            >
            <Button>
              <Box
                sx={css`
                  display: flex;
                  align-items: center;
                `}
              >
              <Link to='/'>
                <Typography
                  variant="h6"
                  sx={css`
                  text-decoration: none;
                  font-family: Caprasimo;
                  padding-left: .5rem;

                  @media (max-width: 900px) {
                    display: none;
                  }
                  `
                  }
                >
                  Ankit Kumar Sahu
                </Typography>
                </Link>
              </Box>
            </Button>
            <IconButton
              onClick={() => setOpen(!open)}
              sx={styles.menuButton}
              edge="end"
              color="inherit"
              aria-label="menu"
            >
              {open ? <CloseIcon /> : <MenuIcon />}
            </IconButton>

            <Stack direction="row" spacing={1} sx={styles.link}>
                <Button></Button>
                <Link to="/products" sx={styles.link}>Products</Link>
                <Link to="/category" sx={styles.link}>Categories</Link>
                <Button sx={styles.link} onClick={() => setOpen(!open)}>
                  Projects
                </Button>
                <Button sx={styles.link} onClick={() => setOpen(!open)}>
                  Contact
                </Button>
              </Stack>
          </Box>

          <Collapse in={open}>
            <Container
              maxWidth="xl"
              sx={css`
                @media (min-width: 768px) {
                  display: none;
                }
              `}
            >
              <Stack direction="column" spacing={1}>
                <Button></Button>
                <Button sx={styles.link} onClick={() => setOpen(!open)}>
                  Home
                </Button>
                <Button sx={styles.link} onClick={() => setOpen(!open)}>
                  About
                </Button>
                <Button sx={styles.link} onClick={() => setOpen(!open)}>
                  Projects
                </Button>
                <Button sx={styles.link} onClick={() => setOpen(!open)}>
                  Contact
                </Button>
              </Stack>
            </Container>
          </Collapse>
        </Container>
      </Box>
    </Box>
  );
}
