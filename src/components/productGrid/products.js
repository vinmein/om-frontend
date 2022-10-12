import Box from "@component/Box";
import Grid from "@component/grid/Grid";
import React, { useEffect, useState } from "react";
import ProductCard from "@component/productGrid/productCard";
import { H2 } from "@component/Typography";
import Hidden from "../hidden/Hidden";
import FlexBox from "../FlexBox";
import Typography from "../Typography";
import productDatabase from "@data/product-database";
import StyledProductCategory from "./ProductCategoryStyle";
const brandList = ["mapple", "kell", "siaomi", "kasus", "sunny", "aver"];
const shopList = ["hexman killer", "onoti", "shahil", "steelcase"];
import NextImage from "next/image";


const Products = (props) => {
  const {products} = props;

 
  return (
    <Box mb="3.75rem">
      <H2 mb="1.5rem">Poojai Items</H2>
      <Grid container spacing={6}>
        <Grid item md={12} xs={12}>
          <Grid container spacing={6}>
            {/* {loadProduct()} */}
            {products.map((item, ind) => (
              <Grid item lg={3} sm={4} xs={6} key={item.title}>
                <ProductCard
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  imgUrl={item.image.src}
                  off={ind * 10}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Products;
