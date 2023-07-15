/** @jsxImportSource @emotion/react */
import React from "react";
import {Link} from "react-router-dom";
import {Stack,Typography} from "@mui/material";
import {BiChevronLeft} from "react-icons/bi";
import {css} from "@emotion/react";


export default function BackToAccount() {
  return (
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
          fontWeight="medium"
        >
          Back to My Account
        </Typography>
      </Stack>
    </Link>
  );
}
