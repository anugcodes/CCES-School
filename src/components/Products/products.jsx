import Box from "@mui/material/Box";
import { Card, Grid, Row, Text, Spacer } from "@nextui-org/react";

import ProductCard from "../ProductCard/productCard";
import Divider from "@mui/material/Divider";
import { css } from "@emotion/react";

import productImage from "../../assets/shoe.jpg";
import shirtImage from "../../assets/tshirt.jpg";
import topImage from "../../assets/top.jpg";
import bracelet from "../../assets/bracelet.jpg";
import neckless from "../../assets/neckless.jpg"

export default function Products() {
  return (
    <Grid.Container gap={4} justify="space-between" className='marProd mb-5'>
      {products.map((item, index) => (
        <Grid xs={12} sm={4} md={3} key={index} justify="center">
            <ProductCard products={item} />
        </Grid>
      ))}
    </Grid.Container>
  );
}

const products = [
  {
    Name: "Product1",
    image: productImage,
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vitae",
    price: "Rs.1200",
  },
  {
    Name: "Product2",
    image: productImage,
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vitae",
    price: "Rs. 1200",
  },
  {
    Name: "Product3",
    image: productImage,
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vitae",
    price: "Rs. 1200",
  },
  {
    Name: "Product4",
    image: productImage,
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vitae",
    price: "Rs. 1200",
  },
  {
    Name: "Product5",
    image: shirtImage,
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vitae",
    price: "Rs. 1200",
  },
  {
    Name: "Product6",
    image: shirtImage,
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vitae",
    price: "Rs. 1200",
  },
  {
    Name: "Product7",
    image: shirtImage,
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vitae",
    price: "Rs. 1200",
  },
  {
    Name: "Product7",
    image: shirtImage,
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vitae",
    price: "Rs. 1200",
  },
  {
    Name: "Product5",
    image: topImage,
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vitae",
    price: "Rs. 1200",
  },
  {
    Name: "Product6",
    image: topImage,
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vitae",
    price: "Rs. 1200",
  },
  {
    Name: "Product7",
    image: topImage,
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vitae",
    price: "Rs. 1200",
  },
  {
    Name: "Product7",
    image: topImage,
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vitae",
    price: "Rs. 1200",
  },
  {
    Name: "Product7",
    image: neckless,
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vitae",
    price: "Rs. 1200",
  },
  {
    Name: "Product7",
    image: bracelet,
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vitae",
    price: "Rs. 1200",
  },
  {
    Name: "Product7",
    image: bracelet,
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vitae",
    price: "Rs. 1200",
  },
];
