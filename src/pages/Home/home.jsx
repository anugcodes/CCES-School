import { Box, Typography } from "@mui/material"
import Navbar from "../../components/Navbar/navbar"
import Product from "../../components/IndividualProduct/product"

export default function Home() {

    return (
        <>
        <Navbar />
        <Product />
        <Box>
            <Typography variant="h3">HOME</Typography>
        </Box>
        </>
    )
}