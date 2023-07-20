import { Grid, Box, Typography, Stack, TextField, Button } from "@mui/material"
import { css } from "@emotion/react"

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';


const FooterHero = () => {

  const styles = {
    mainContainer: css`
      background: #0d0e0e;
      color: white;
      display: flex;
      justify-content: center;
      padding: 5rem 0;
      // box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
    `,
    mainStack: css`
      display: flex;
      justify-content: space-between;
    `,
    title: css`
      font-size: 2rem;
      font-weight: bolder;
      color: yellow;
      letter-spacing: 0.5rem;
    `,
    secondaryTitles: css`
      font-size: 1.2rem;
      color: yellow;
      font-weight: bold;
      letter-spacing: .2rem;
    `
  }

  return(
  <Box sx={styles.mainContainer}>
    <Grid container maxWidth={"lg"} spacing={3}>
        <Grid item md={12} xs={12}>
          <Typography sx={styles.title}>nude.</Typography>
        </Grid>
        <Grid item md={12} xs={12}>
          <Stack sx={styles.mainStack} direction={{sm: 'row', xs: 'column'}} spacing={{xs: 2, sm: 0}}>
            <Stack spacing={{sm: 3, xs: 0}}>
              <Typography sx={styles.secondaryTitles}>CUSTOMER SERVICES</Typography>
              <Stack>
              <Typography>Contact Us</Typography>
              <Typography>Track Order</Typography>
              <Typography>Return Order</Typography>
              <Typography>Cancel Order</Typography>
              </Stack>
            </Stack>
            <Stack spacing={{sm: 3, xs: 0}}>
              <Typography sx={styles.secondaryTitles}>COMPANY</Typography>
              <Stack>
              <Typography>About Us</Typography>
              <Typography>We're Hiring</Typography>
              <Typography>Terms & Conditions</Typography>
              <Typography>Privacy Policy</Typography>
              <Typography>Blog</Typography>
              </Stack>
            </Stack>
            <Stack spacing={{sm: 3, xs: 0}}>
              <Typography sx={styles.secondaryTitles}>CONNECT WITH US</Typography>
              <Stack direction={'row'} spacing={2}>
                <FacebookIcon />
                <TwitterIcon />
                <InstagramIcon />
                <PinterestIcon />
              </Stack>
            </Stack>
            <Stack spacing={{sm: 3, xs: 2}}>
              <Typography sx={styles.secondaryTitles}>KEEP UP TO DATE</Typography>
              <Stack direction={"row"}>
                <TextField label="Email" placeholder="Enter Your Email" variant="standard" sx={{color: 'white'}} color="success" error={true} size="small"/>
                <Button sx={{background: 'yellow', borderRadius: 'none', color: 'black'}} size="small">SUBSCRIBE</Button>
              </Stack>
            </Stack>
          </Stack>
        </Grid>
    </Grid>
  </Box>
  );
}

export default FooterHero;
