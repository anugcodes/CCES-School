/* eslint-disable react/no-unknown-property */
/** @jsxImportSource @emotion/react */

import React from 'react';
import { Container,Stack, Typography ,TextField,ToggleButton,ToggleButtonGroup,Button} from '@mui/material';
import { css } from '@emotion/react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import BackToAccount from './backtoaccount';


export default function UserProfile() {
    const [gender,setGender] = React.useState('Male');
  return (
    <div>
        <Container maxWidth="md">
            {/* back to myaccount page */}
            <BackToAccount />

           <Typography variant="h4" fontWeight="bold" color="#000" gutterBottom sx={{marginBottom:'1.5rem'}} >My Profile</Typography>
           <Stack direction={{xs:'column',md:'row'}} spacing={2} justifyContent={"space-between"} >
                <Stack direction={'column'} sx={css`max-width: 500px;`}>
                    
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
                </Stack>

                {/* links to edit name and other details */}
                <div>
                    <Stack direction={"column"} spacing={1} css={css`border: 1px solid #888;padding: 1rem 5rem;border-radius: .25rem;`}>
                        <span css={css`cursor: pointer;color: #5500ff;`}><Typography variant='subtitle2' >Change Phone Number</Typography></span>
                        <span css={css`cursor: pointer;color: #5500ff;`}><Typography variant='subtitle2' >Change Password</Typography></span>

                    </Stack>
                </div>
           </Stack>

        </Container>
    </div>
  )
}
