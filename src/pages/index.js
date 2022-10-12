import Box from "@component/Box";
import React, { useState, useEffect } from 'react';
import Section3 from "@component/home-1/Section2";
import Section1 from "@component/home-4/Section1";
import Navbar from "@component/navbar/Navbar";
import { Fragment } from "react";
import Container from "../components/Container";
import UnsecuredLayout from '../layouts/UnsecuredLayout';
import Notiflix from 'notiflix';

import { getTemples } from '../services/shop.service';

const Index = (props) => {
  const [temples, setTemples] = useState(null);

  const fetchTemple = async () => {
    try {
      const response = await getTemples();
      setTemples(response.data)
    } catch (e) {
      console.log('ERROR');
      console.log(e);
      Notiflix.Notify.failure(e.response.data.message);
    } finally {
      // setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchTemple()
  }, [props]);

  return (
      <Fragment>
        {/* <Navbar /> */}
        <Container my="2rem">
          {temples? <Section1 templeList={temples}/>: <></>}
          {/* <Box mb="3.75rem">
            <Section2 />
          </Box> */}
        </Container>
      </Fragment>
  );
};

// Home4.layout = AppLayout;
Index.layout = UnsecuredLayout;

export default Index;
