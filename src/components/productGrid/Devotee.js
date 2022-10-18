import { useFormik } from "formik";
import Link from "next/link";
import Grid from "@component/grid/Grid";
import { useRouter } from "next/router";
import React, { useCallback, useState } from "react";
import * as yup from "yup";
import Box from "../Box";
import Select from "@component/Select";
import Button from "../buttons/Button";
import IconButton from "../buttons/IconButton";
import Divider from "../Divider";
import FlexBox from "../FlexBox";
import Icon from "../icon/Icon";
import TextField from "../text-field/TextField";
import { H3, H5, H6, SemiSpan, Small, Span } from "../Typography";
import { StyledSessionCard } from "./SessionStyle";
import useAuth from "../../hooks/useAuth";
import birthStar from "../../data/Natchathiram";

import { storeUser, logoutUser } from '../../services/helper.service';


const DevoteeInfo= () => {
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const router = useRouter();


  const { login } = useAuth();
  const togglePasswordVisibility = useCallback(() => {
    setPasswordVisibility((visible) => !visible);
  }, []);


  const onSuccess = (data) =>{
    storeUser(data);
    router.push("/profile");
  }
  
  const handleFormSubmit = async (values) => {
    console.log(values);
    login(values, onSuccess)

  };

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    onSubmit: handleFormSubmit,
    initialValues,
    validationSchema: formSchema,
  });

  return (
    <StyledSessionCard mx="auto" my="1rem" boxShadow="large">
      <form className="content" onSubmit={handleSubmit}>
        <H3 textAlign="center" mb="1.5rem">
          Add Devotees
        </H3>
        <Grid container spacing={6}>
          <Grid item md={6} xs={12}>
          <H5 textAlign="center" mb="1rem">Devotee 1</H5>
            <hr mb="0.5rem" />

            <Select
              mb="1rem"
              label="Birth Star / நட்சத்திரங்கள்"
              placeholder="Please Select"
              options={birthStar}
              onChange={(e) => {
                console.log(e);
              }}
            />
            <TextField
              mb="0.75rem"
              mt="1.5rem"
              name="name"
              label="name"
              type="text"
              fullwidth
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.username || ""}
            />
          </Grid>
          <Grid item md={6} xs={12}>
          <H5 textAlign="center" mb="1rem">Devotee 2</H5>
            <hr mb="0.5rem" />

            <Select
              mb="1rem"
              label="Birth Star / நட்சத்திரங்கள்"
              placeholder="Please Select"
              options={birthStar}
              onChange={(e) => {
                console.log(e);
              }}
            />
            <TextField
              mb="0.75rem"
              mt="1.5rem"
              name="name"
              label="name"
              type="text"
              fullwidth
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.username || ""}
            />
          </Grid>
        </Grid>
        

       

        <hr mt="1rem"/>
        <Grid item md={6} xs={12} mt="2rem" mb="2rem">
                    <TextField
                      name="date"
                      label="Date"
                      type="date"
                      fullwidth
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.birth_date || ""}
                      errorText={touched.birth_date && errors.birth_date}
                    />
                  </Grid>
        <FlexBox justifyContent="center" mt="1.25rem" b="1.25rem">
          <Link href="/signup">
            <Button
              mb="1.65rem"
              variant="contained"
              color="primary"
              type="submit"
              fullwidth
            >
              Add
            </Button>
          </Link>
        </FlexBox>
      </form>

    </StyledSessionCard>
  );
};

const initialValues = {
  password: "",
};

const formSchema = yup.object().shape({
  password: yup.string().required("${path} is required"),
});

export default DevoteeInfo;
