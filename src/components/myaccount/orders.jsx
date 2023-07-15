/** @jsxImportSource @emotion/react */

import React from 'react'
import { Container, Typography,Stack,Button } from '@mui/material'
import { css } from '@emotion/react'
import BackToAccount from './backtoaccount'
import EmptyShoppingCart from '../../assets/emptyshoppingcart.svg'

export default function UserProductOrders() {
  return (
    <div>
      <Container maxWidth='md'>
        {/* back to my account page link */}
        <BackToAccount />

        {/* page heading - My Address */}
        <Typography variant="h4" fontWeight="bold" color="#000" gutterBottom  >My Orders</Typography>


        <div css={css`padding: 2rem;min-height: 70vh;`}>
          <Stack direction="column" spacing={3} alignItems={'center'}>
            <Typography variant="h6" fontWeight="semibold" color="#999" gutterBottom sx={{marginBottom:'1.5rem'}}> Sadly, you haven't placed any orders till now.</Typography>
            <img src={EmptyShoppingCart} alt="empty shopping cart" css={css`opacity: .8;`} />
            <Button variant="outlined" sx={css`text-transform: Capitalize;padding: .5rem 1.5rem;`} onClick>Continue Shopping</Button>
          </Stack>
        </div>
      </Container>
    </div>
  )
}
