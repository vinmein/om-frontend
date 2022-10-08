import Button from "@component/buttons/Button";
import FlexBox from "@component/FlexBox";
import Image from "@component/Image";
import Link from "next/link";
import { useRouter } from "next/router";
import { H3, H5, H6, SemiSpan, Small, Span } from "../components/Typography";
import React from "react";

const Confirmation = () => {
  const router = useRouter();
  const handleGoBack = async () => {
    router.back();
  };
  return (
    <FlexBox
    flexDirection="column"
    minHeight="100vh"
    justifyContent="center"
    alignItems="center"
    px="1rem"
  >
     <H3 textAlign="center" mb="0.5rem">
        Account has been created succcessully
        </H3>
    <Image
      src="/assets/images/illustrations/success.svg"
      maxWidth="320px"
      width="100%"
      mb="2rem"
    />
    <FlexBox flexWrap="wrap">
     
      <Link href="/login">
        <Button variant="contained" color="secondary" m="0.5rem">
          Go to Login
        </Button>
      </Link>
    </FlexBox>
  </FlexBox>
  );
};

export default Confirmation;
