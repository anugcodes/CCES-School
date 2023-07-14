/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
/** @jsxImportSource @emotion/react */


import { Container,Stack,Typography,Grid, Card } from '@mui/material'
import React from 'react'
import {Link,} from "react-router-dom"
import { BiChevronLeft } from 'react-icons/bi'
import { css } from "@emotion/react"

export default function UserAddress() {
  return (
    <div>
      <Container maxWidth='md'>

      <div>
        <Link to="/myaccount" style={{textDecoration:"none",color:"#777",maxWidth:'200px',display:'block',padding:'2rem 0'}}>
          <Stack direction={"row"} alignItems={'center'} >
            <BiChevronLeft css={css`font-size: 1.5rem;`} />
            <Typography variant={{'xs':"subtitle2",'md':"subtitle1"}}  fontWeight='light'>Back to My Account</Typography>
          </Stack>
        </Link>    
      </div>

      <Typography variant="h4" fontWeight="bold" color="#000" gutterBottom sx={css`margin-bottom: 1.5rem;`} >My Addressess</Typography>
      <Grid container>
        <Grid item xs="12" sm="4">
          <div css={css`
            padding: 1.25rem 1rem;
            border: 1px solid #ccc;
            border-radius: 1rem;
          `}>
            hello world
          </div>
        </Grid>
      </Grid>
      </Container>
    </div>
  )
}

const user_addresses = [
  {
    name: "Anurag Biswal",
    
  }
]