import React from 'react'
import { Container, Typography,Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import { css } from '@emotion/react'
import { BiChevronLeft } from 'react-icons/bi'

export default function UserProductOrders() {
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
        <Typography variant="h4" fontWeight="bold" color="#000" gutterBottom sx={{marginBottom:'1.5rem'}} >My Orders</Typography>


        
      </Container>
    </div>
  )
}
