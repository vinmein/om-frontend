import Box from "@component/Box";
import Grid from "@component/grid/Grid";
import React, { useEffect, useState } from "react";
import DeityCard from "@component/productGrid/deityCard";
import { H2 } from "@component/Typography";
import Hidden from "../hidden/Hidden";
import FlexBox from "../FlexBox";
import Typography from "../Typography";
import productDatabase from "@data/product-database";
import StyledProductCategory from "./ProductCategoryStyle";
const brandList = ["mapple", "kell", "siaomi", "kasus", "sunny", "aver"];
const shopList = ["hexman killer", "onoti", "shahil", "steelcase"];
import NextImage from "next/image";
import { BASE_URL } from '../../../config/constant';


const Archanai = (props) => {
  const [type, setType] = useState("brands");
  const [selected, setSelected] = useState(null);
  const [deties, setDeities] = useState(null);
  const [list, setList] = useState([]);
  const { archanai } = props;
  const keyBy = _.keyBy(archanai, 'productId');
  const url = BASE_URL() + 'resources/';

  const handleCategoryClick = (brand) => {
    if (selected && selected.productId.match(brand)) {
      setSelected(null);
    } else {
      setSelected(brand);
      const archanai = keyBy[brand.productId];
      if (archanai.deityList) {
        setDeities(archanai.deityList)
      }
    }
  };

  useEffect(() => {
    if (type === "brands") setList(brandList);
    else setList(shopList);
  }, [type, selected, props]);

  return (
    <Box mb="3.75rem">
      <H2 mb="1.5rem">Buy Archanai Slip</H2>

      <Grid container spacing={6}>
        <Grid item md={4} xs={12}>
          <Hidden down={768} mr="1.75rem">
            <Box shadow={6} borderRadius={10} padding=".25rem" bg="white">
              <FlexBox mt="-0.5rem" mb="0.5rem">
                {/* <Typography
                fontWeight="600"
                fontSize="20px"
                padding="0.5rem 1rem"
                style={{ cursor: "pointer" }}
                color={type === "brands" ? "gray.900" : "gray.600"}
                onClick={() => setType("brands")}
              >
                Archanai
              </Typography> */}

              </FlexBox>

              {archanai.map((data, ind) => (
                <StyledProductCategory
                  key={data.productId}
                  mb="0.75rem"
                  bg={selected && selected.productId.match(data.productId) ? "gray.100" : "white"}
                  onClick={() => handleCategoryClick(data)}
                >
                  <NextImage
                    height={50}
                    width={50}
                    objectFit="contain"
                    alt={data.title}
                    src={data.image}
                  />
                  <span className="product-category-title">{data.title}</span>
                </StyledProductCategory>
              ))}


            </Box>
          </Hidden>
          {/* <ProductCard1
            id="3425442"
            title="KSUS ROG Strix G15"
            price={1100}
            off={null}
            imgUrl={productDatabase[100].imgUrl}
          /> */}
        </Grid>
        <Grid item md={8} xs={12}>
          {deties ? <Grid container spacing={6}>
            {deties.map((item, ind) => {
              const image = `${url}${item.imageUrl}`
              return (
                <Grid item lg={3} sm={4} xs={6} key={item.title}>
                  <DeityCard
                    id={item.deityId}
                    title={item.deityName}
                    price={selected.price}
                    imgUrl={image}
                    off={ind * 0}
                  />
                </Grid>
              )
            }
            )}
          </Grid> : <></>}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Archanai;
