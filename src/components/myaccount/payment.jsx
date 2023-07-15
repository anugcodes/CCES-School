/* eslint-disable react/no-unknown-property */
/** @jsxImportSource @emotion/react */

import { Container, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { css } from "@emotion/react";
import { BiChevronLeft, BiCreditCard } from "react-icons/bi";

export default function UserPayment() {
  return (
    <>
      <div>
        <Container maxWidth="md">
          {/* back to my account page link */}
          <Link
            to="/myaccount"
            style={{
              textDecoration: "none",
              color: "#777",
              maxWidth: "200px",
              display: "block",
              padding: "2rem 0",
            }}
          >
            <Stack direction={"row"} alignItems={"center"}>
              <BiChevronLeft
                css={css`
                  font-size: 1.5rem;
                `}
              />
              <Typography
                variant={{ xs: "subtitle2", md: "subtitle1" }}
                fontWeight="light"
              >
                Back to My Account
              </Typography>
            </Stack>
          </Link>

          {/* page heading - My Address */}
          <Typography
            variant="h4"
            fontWeight="bold"
            color="#000"
            gutterBottom
            sx={{ marginBottom: "1.5rem" }}
          >
            My Payments
          </Typography>

          <div
            css={css`
              padding: 2.5rem;
              border: 1px solid #bbb;
            `}
          >
            <Stack direction={"column"}>
              <div>
                <Typography variant="button" fontWeight="bold" gutterBottom={2}>
                  Debit & Credit Card
                </Typography>
                <Stack direction={"column"} spacing={2}>
                  <Stack
                    direction={"row"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    spacing={2}
                    sx={{
                      padding: "1rem 0",
                      border: "1px solid #bbb",
                      borderRadius: ".25rem",
                    }}
                  >
                    <BiCreditCard
                      css={css`
                        font-size: 2.5rem;
                        color: #777;
                      `}
                    />
                    <Typography
                      variant="subtitle2"
                      fontWeight="normal"
                      color="#777"
                    >
                      No Debit/Credit Card saved
                    </Typography>
                  </Stack>
                </Stack>
              </div>
            </Stack>
          </div>
        </Container>
      </div>
    </>
  );
}
