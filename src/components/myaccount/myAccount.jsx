/* eslint-disable react/no-unknown-property */
// /** @jsxImportSource @emotion/react */
import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import { css } from "@emotion/react";
import { Link } from "react-router-dom";

export default function MyAccountPage() {
  return (
    <div
      css={css`
        padding: 2rem 0;
      `}
    >
      <Container maxWidth="lg">
        <h2>My Account</h2>
        <div
          css={css`
            padding: 1rem 0;
          `}
        >
          <Grid container spacing={2}>
            {subSections.map((section, i) => (
              <Grid item key={i} xs={12} sm={6} md={4}>
                <div
                  css={css`
                    padding: 1.25rem 1rem;
                    border: 1px solid #ccc;
                    border-radius: 1rem;
                    cursor: pointer;
                    transition: all 0.3s ease-in-out;
                    &:hover {
                      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
                    }
                  `}
                >
                  <Link
                    to={section.link}
                    css={css`
                      text-decoration: none;
                    `}
                  >
                    <Typography variant="h6" color={"#000"}>
                      {section.title}
                    </Typography>
                    <Typography variant="body2" color={"#555"}>
                      {section.description}
                    </Typography>
                  </Link>
                </div>
              </Grid>
            ))}
          </Grid>
        </div>
      </Container>
    </div>
  );
}

const subSections = [
  {
    title: "My Orders",
    link: "/myaccount/orders",
    description: "View, modify and track orders",
  },
  {
    title: "My Profile",
    link: "/myaccount/profile",
    description: "Edit personal info, change password, etc.",
  },
  {
    title: "My Addresses",
    link: "/myaccount/addresses",
    description: "Edit add or remove addresses",
  },
  {
    title: "My Payments",
    link: "/myaccount/payments",
    description: "View and modify payment methods",
  },
  {
    title: "My Wallet",
    link: "/myaccount/wallet",
    description: "Nude. Wallet History and redeemed gift cards",
  },
];
