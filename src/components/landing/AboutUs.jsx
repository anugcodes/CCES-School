import { Grid, Box, Typography } from "@mui/material"
import {css} from "@emotion/react";
// import {useProductContext} from "../../contextProvider/MyContext"

const AboutUs = () => {


    const styles = {
        mainContainer: css`
            padding: 4rem 0;
            display: flex;
            justify-content: center;
            // background: #f2f3f3;
            box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        `,
        mainText: css`
        
      padding: 1rem 0;
      text-align: center;
      font-size: 3rem;
      font-family: Lilita One;
        `
    }
    return(
        <Box sx={styles.mainContainer}>
            <Grid container spacing={1} maxWidth={"lg"}>
                <Grid item xs={12}>
                <Typography variant="h3" sx={styles.mainText}>About Us</Typography>
                </Grid>
                <Grid item xs={12}>
                <Typography variant="body1" textAlign={"center"}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt nobis, iste voluptate aspernatur aut dolore vitae nulla inventore ipsam, voluptatibus autem sed rem! Aperiam provident voluptas dolorum inventore ducimus hic!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt nobis, iste voluptate aspernatur aut dolore vitae nulla inventore ipsam, voluptatibus autem sed rem! Aperiam provident voluptas dolorum inventore ducimus hic!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt nobis, iste voluptate aspernatur aut dolore vitae nulla inventore ipsam, voluptatibus autem sed rem! Aperiam provident voluptas dolorum inventore ducimus hic!</Typography>
                </Grid>
            </Grid>
        </Box>
    )
}

export default AboutUs;

