import Box from "@component/Box";
import Section3 from "@component/home-1/Section2";
import Section1 from "@component/home-4/Section1";
import Navbar from "@component/navbar/Navbar";
import { Fragment } from "react";
import Container from "../components/Container";
import UnsecuredLayout from '../layouts/UnsecuredLayout';

const Index = () => {
  return (
      <Fragment>
        {/* <Navbar /> */}
        <Container my="2rem">
          <Section1 />
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
