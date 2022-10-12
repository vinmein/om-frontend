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


const Archanai = (props) => {
  const [type, setType] = useState("brands");
  const [selected, setSelected] = useState("");
  const [list, setList] = useState([]);

  const handleCategoryClick = (brand) => {
    if (selected.match(brand)) {
      setSelected("");
    } else setSelected(brand);
  };

  useEffect(() => {
    if (type === "brands") setList(brandList);
    else setList(shopList);
  }, [type]);
  return (
    <Box mb="3.75rem">
      <H2 mb="1.5rem">Trending Items</H2>

      <Grid container spacing={6}>
        <Grid item md={4} xs={12}>
        <Hidden down={768} mr="1.75rem">
          <Box shadow={6} borderRadius={10} padding="1.25rem" bg="white">
            <FlexBox mt="-0.5rem" mb="0.5rem">
              <Typography
                fontWeight="600"
                fontSize="20px"
                padding="0.5rem 1rem"
                style={{ cursor: "pointer" }}
                color={type === "brands" ? "gray.900" : "gray.600"}
                onClick={() => setType("brands")}
              >
                Brands
              </Typography>
              <Typography
                fontWeight="600"
                fontSize="20px"
                paddingTop="0.5rem"
                lineHeight="1.3"
                color="gray.400"
              >
                |
              </Typography>
              <Typography
                fontWeight="600"
                fontSize="20px"
                padding="0.5rem 1rem"
                color={type === "shops" ? "gray.900" : "gray.600"}
                style={{ cursor: "pointer" }}
                onClick={() => setType("shops")}
              >
                Shops
              </Typography>
            </FlexBox>

            {list.map((brand, ind) => (
              <StyledProductCategory
                key={brand}
                mb="0.75rem"
                bg={selected.match(brand) ? "white" : "gray.100"}
                shadow={selected.match(brand) ? 4 : null}
                onClick={() => handleCategoryClick(brand)}
              >
                <NextImage
                  height={20}
                  width={20}
                  objectFit="contain"
                  alt={brand}
                  src={`/assets/images/logos/${ind % 2 === 0 ? "v" : "u"}.png`}
                />
                <span className="product-category-title">{brand}</span>
              </StyledProductCategory>
            ))}

            <StyledProductCategory
              mt="4rem"
              bg={selected.match(`all-${type}`) ? "white" : "gray.100"}
              shadow={selected.match(`all-${type}`) ? 4 : null}
              onClick={() => handleCategoryClick(`all-${type}`)}
            >
              <span className="product-category-title show-all">
                View All {type}
              </span>
            </StyledProductCategory>
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
          <Grid container spacing={6}>
            {productDatabase.slice(169, 175).map((item, ind) => (
              <Grid item lg={3} sm={4} xs={6} key={item.title}>
                <ProductCard
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  imgUrl={item.imgUrl}
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

export default Archanai;
