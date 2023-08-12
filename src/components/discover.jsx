import { Box, Grid, Stack, Typography } from "@mui/material"
import { css } from "@emotion/react"

const Discover = () => {

    const styles = {
        mainContainer: css`
            height: 100dvh;
            width: 100dvw;
            background: #fafafa;
        `
    }

    return(
        <Box sx={styles.mainContainer}>
            <Box sx={styles.sideBar}></Box>
            <Grid container maxWidth={"lg"}>

            </Grid>
        </Box>
    )
}

export default Discover;