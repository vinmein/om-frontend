import Box from "@component/Box";
import Grid from "@component/grid/Grid";
import React, { useCallback, useState } from "react";
import FashionCard1 from "./FashionCard1";
import FashionCard2 from "./FashionCard2";
import FashionCard3 from "./FashionCard3";
import { useRouter } from "next/router";



const Section1 = () => {
  const router = useRouter();

  function gotoRoute(){
    console.log("goto")
    router.push("/products");
  }
  return (
    <Box mb="1.5rem">
      <Grid container spacing={6}>
        <Grid item md={4} xs={12} onClick={(e)=>{
                            gotoRoute('REJECT');
                          }} >
          <FashionCard1 />
        </Grid>
        <Grid item md={4} xs={12}>
          <FashionCard2 />
        </Grid>
        <Grid item md={4} xs={12}>
          <FashionCard3 />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Section1;
