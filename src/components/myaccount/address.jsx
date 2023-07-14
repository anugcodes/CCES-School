/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
/** @jsxImportSource @emotion/react */


import { Container,Stack,Typography,Grid, Card,Button, Divider, TextField } from '@mui/material'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import React, { useState } from 'react'
import {Link,useLocation,useNavigate} from "react-router-dom"
import { BiChevronLeft } from 'react-icons/bi'
import { css } from "@emotion/react"
import { BiPlus } from 'react-icons/bi'


export default function UserAddress() {
  const navigate = useNavigate();
  const location = useLocation();
  let hash = location.hash;
  console.log(hash);
  return (
    <div>
      <Container maxWidth='md'>
      {/* back to my account page link */}
      <Link to="/myaccount" style={{textDecoration:"none",color:"#777",maxWidth:'200px',display:'block',padding:'2rem 0'}}>
        <Stack direction={"row"} alignItems={'center'} >
          <BiChevronLeft css={css`font-size: 1.5rem;`} />
          <Typography variant={{'xs':"subtitle2",'md':"subtitle1"}}  fontWeight='light'>Back to My Account</Typography>
        </Stack>
      </Link>

      {/* page heading - My Address */}
      <Typography variant="h4" fontWeight="bold" color="#000" gutterBottom sx={{marginBottom:'1.5rem'}} >My Address</Typography>

      {/* using the hash in the query to load add new address form */}
      {!hash && (
        <>
          {/* grid container for address cards */}
          <Grid container spacing={2} sx={css`padding: 1.5rem 0;`}>
            <Grid item xs="12" sm="4">
            hello world
            </Grid>
          </Grid>

          {/* add new address button */}
          <div css={css`padding: .25rem .5rem;display: flex;justify-content: center;`}>
              <Button sx={css`
                  padding: .25rem 3.25rem;              
                  border: 1px solid #ccc;
                  border-radius: .5rem;
                  &:hover{
                    border: 1px solid #999;
                  }
                `}
                onClick={() => navigate({pathname: '/myaccount/address',hash: '#AddressForm-NEW'})}
                >
                <Stack direction={'column'} alignItems='center' >
                  <BiPlus css={css`font-size: 1.5rem;color: #999;`} />
                  <Typography variant="subtitle2" fontWeight="normal" color="#999" >Add New Address</Typography>
                </Stack>
              </Button>
          </div>
        </>
        )}

        {/* address form */}
        {hash === "#AddressForm-NEW" && ( <AddAddressForm /> )}


      </Container>
    </div>
  )
}

const user_addresses = [
  {
    name: "Anurag Biswal",
    
  }
];

const AddAddressForm = () => {
  const [country, setCountry] = useState('');
  return (
    <>
      <div css={css`max-width: 600px;`}>
        <Container maxWidth="md">
          <form>
            <Stack spacing={3}>
              <FormControl fullWidth size="small">
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={country}
                  label="Age"
                  onChange={(e) => setCountry(e.target.value)}
                >
                  <MenuItem value={'India'}>India</MenuItem>
                  <MenuItem value={'China'}>China</MenuItem>
                  <MenuItem value={'Sri lanka'}>Sri lanka</MenuItem>
                </Select>
            </FormControl>
            <Divider />
            <TextField
              id="outlined-basic"
              label="Full Name"
              variant="outlined"
              fullWidth
              size="small"
            />
            <TextField
              id="outlined-basic"
              label="Phone Number"
              variant="outlined"
              fullWidth
              size="small"
              type='tel'
            />

          </Stack>
          </form>
        </Container>
      </div>
    </>
  )
}
