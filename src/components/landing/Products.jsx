import { Text } from '@nextui-org/react'
import React from 'react'
import ProductCard from "../ProductCard/productCard"
import { Grid, Container, Stack, Box } from "@mui/material"
import { css } from "@emotion/react"

import shoe from "../../assets/shoe.jpg"
import shirt from "../../assets/tshirt.jpg"
import top from "../../assets/top.jpg"

function Products() {


    const styles = {
        cardItem: css`
        display: flex;
        align-items: center;
        justify-content: center;
      `,
        
    }


    return (
        <Box>
            <Grid container maxWidth={"xl"}>
            <Stack direction={"row"}>
                
                <Grid container spacing={{ xs: 1, sm: 2, md: 3 }} xs={10}>
                {products.map((products, index) => (
              <Grid item xs={12} sm={4} md={2} key={index}>
                <ProductCard products={products} />
              </Grid>
            ))}
                </Grid>
                <Grid item xs={2}>
                <Box sx={{transform: 'rotate(90deg)', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '200px', height: '100px'}}>
                NEW ARRIVALS
                </Box>
                </Grid>
                </Stack>
            </Grid>
        </Box>
    )
}


const products = [
    {
        Name: "Product1",
        image: shoe,
        details:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vitae",
        price: "Rs.1200",
      },
      {
        Name: "Product2",
        image: top,
        details:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vitae",
        price: "Rs. 1200",
      },
      {
        Name: "Product3",
        image: shirt,
        details:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vitae",
        price: "Rs. 1200",
      },
      {
        Name: "Product4",
        image: top,
        details:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vitae",
        price: "Rs. 1200",
      },
      {
        Name: "Product5",
        image: shirt,
        details:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vitae",
        price: "Rs. 1200",
      },
]

export default Products