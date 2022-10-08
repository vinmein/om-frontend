import React from "react";
import FlexBox from "../components/FlexBox";
import Confirm from "../components/sessions/Confirm";

const SignUpPage = () => {
  return (
    <FlexBox
      flexDirection="column"
      minHeight="100vh"
      alignItems="center"
      justifyContent="center"
    >
      <Confirm />
    </FlexBox>
  );
};

export default SignUpPage;
