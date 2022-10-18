import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Container from "@component/Container";
import Box from "@component/Box";
import Grid from "@component/grid/Grid";
import Navbar from "@component/navbar/Navbar";
import Stepper from "@component/stepper/Stepper";
import UnsecuredLayout from '../layouts/UnsecuredLayout';

const CheckoutNavLayout = ({ children }) => {
  const [selectedStep, setSelectedStep] = useState(0);

  const router = useRouter();
  const { pathname } = router;

  const handleStepChange = (_step, ind) => {
    switch (ind) {
      case 0:
        router.push("/cart");
        break;
      case 1:
        router.push("/payment");
        break;
      case 2:
        router.push("/orders");
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    switch (pathname) {
      case "/cart":
        setSelectedStep(1);
        break;
      // case "/checkout":
      //   setSelectedStep(2);
      //   break;
      case "/payment":
        setSelectedStep(2);
        break;
      default:
        break;
    }
  }, [pathname]);

  return (
    <UnsecuredLayout>
      <Container my="2rem">
        <Box mb="14px">
          <Grid container spacing={6}>
            <Grid item lg={8} md={8} xs={12}>
              <Stepper
                stepperList={stepperList}
                selectedStep={selectedStep}
                onChange={handleStepChange}
              />
            </Grid>
          </Grid>
        </Box>
        {children}
      </Container>
      </UnsecuredLayout>
  );
};

const stepperList = [
  {
    title: "Cart",
    disabled: false,
  },
  {
    title: "Payment",
    disabled: false,
  },
];


export default CheckoutNavLayout;
