import Box from "@component/Box";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Products from "@component/productGrid/products";
import Archanai from "@component/productGrid/archanai";
import Navbar from "@component/navbar/Navbar";
import { Fragment } from "react";
import Container from "../../components/Container";
import AppLayout from "../../components/layout/AppLayout";
import UnsecuredLayout from '../../layouts/UnsecuredLayout';
import { getProducts } from '../../services/shop.service';

const Home4 = (props) => {

  const router = useRouter();
  const { id } = router.query;
  const [productList, setProducts] = useState(null);
  const [archanaiList, setArchanai] = useState(null);

  const fetchProduct = async () => {
    try {
      const response = await getProducts(id);
      if(response.data){
        setProducts(response.data.normalProducts)
        setArchanai(response.data.archanaiProducts)
      }
      // setTemples(response.data)
    } catch (e) {
      console.log('ERROR');
      console.log(e);
      Notiflix.Notify.failure(e.response.data.message);
    } finally {
      // setIsLoading(false);
    }
  }

  useEffect(() => {
    if(id){
      fetchProduct()
    }
  }, [props]);
  return (
    <Fragment>
      {/* <Navbar /> */}
      <Container my="2rem">
        
        {productList? <Products products={productList}/>: <></>}
        {archanaiList? <Archanai archanai={archanaiList}/>: <></>}
      </Container>
    </Fragment>
  );
};

Home4.layout = UnsecuredLayout;

export default Home4;
