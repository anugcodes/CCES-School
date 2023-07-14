/* eslint-disable react/no-unknown-property */
/** @jsxImportSource @emotion/react */

import React from 'react';
import { Container,Stack, Typography ,TextField,ToggleButton,ToggleButtonGroup,Button} from '@mui/material';
import {BiChevronLeft} from 'react-icons/bi';
import {Link } from 'react-router-dom';
import { css } from '@emotion/react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


export default function UserProfile() {
    const [gender,setGender] = React.useState('Male');
  return (
    <div>
        <Container maxWidth="md">
           <div>
                <Link to="/myaccount" style={{textDecoration:"none",color:"#777",maxWidth:'200px',display:'block',padding:'2rem 0'}}>
                    <Stack direction={"row"} alignItems={'center'} >
                        <BiChevronLeft css={css`font-size: 1.5rem;`} />
                        <Typography variant={{'xs':"subtitle2",'md':"subtitle1"}}  fontWeight='light'>Back to My Account</Typography>
                    </Stack>
                </Link>
           </div>

           <Typography variant="h4" fontWeight="bold" color="#000" gutterBottom sx={{marginBottom:'1.5rem'}} >My Profile</Typography>
           <div css={css`max-width: 400px;`}>
                
                <Stack direction="column" spacing={2} >
                    <Stack direction={{'xs':"column",'md':"row"}} spacing={2} >
                        <TextField  label="First Name" variant="standard" fullWidth />
                        <TextField  label="Last Name" variant="standard" fullWidth />
                    </Stack>
                    <TextField  label="Email" variant="standard" />
                    <TextField  label="Password" variant="standard" />
                    <TextField  label="Phone" variant="standard" />
                    <DatePicker
                        label="Date of Birth"
                        slotProps={{ textField: { variant: 'standard' } }}
                        fullWidth
                        />
                    <div>
                        <Typography  color='#777' fontWeight='light'>Gender</Typography>
                        <ToggleButtonGroup
                        size='small'
                        color="primary"
                        value={gender}
                        exclusive
                        onChange={(e)=> setGender(e.target.value)}
                        aria-label="Platform"
                        >
                        <ToggleButton value="Male" >Male</ToggleButton>
                        <ToggleButton value="Female">Female</ToggleButton>
                    </ToggleButtonGroup>
                    </div>
                    <Button sx={css`max-width: 220px;border-radius: 0;padding:1rem .5rem; `} variant={'contained'}>Save Changes</Button>
                </Stack>
           </div>

        </Container>
    </div>
  )
}
