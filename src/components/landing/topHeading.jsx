import { Grid, Typography } from "@mui/material"
import { css } from "@emotion/react"

const TopHeading = () => {
    return(
        <Grid container  maxWidth={"xl"} columnGap={2}>
            <Grid item md={3}>
                <img src="https://images.bewakoof.com/t1080/men-s-blue-solid-oversize-jogger-21-580450-1686198943-1.jpg?tr=q-100" alt="" />
            </Grid>
            <Grid item md={3}>
                <img src="https://images.bewakoof.com/t1080/men-s-blue-solid-oversize-jogger-21-580450-1686198943-1.jpg?tr=q-100" alt="" />
            </Grid>
            <Grid item md={3}>
                <img src="https://images.bewakoof.com/t1080/men-s-blue-solid-oversize-jogger-21-580450-1686198943-1.jpg?tr=q-100" alt="" />
            </Grid>
        </Grid>
    )
}

export default TopHeading;