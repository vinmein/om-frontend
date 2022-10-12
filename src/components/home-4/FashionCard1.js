import Box from "@component/Box";
import Card from "@component/Card";
import Typography, { H3, Small, Span } from "@component/Typography";
import NextImage from "next/image";
import Link from "next/link";
import React from "react";



const FashionCard1 = (props) => {
  const { value } = props
  return (
    <Link href="/">
      <a>
        <Card

          boxShadow="border"
          height="100%"
          borderRadius={4}
          hoverEffect
        >
          <Box p="2.5rem">
            {/* <Typography color="text.muted" mb="0.5rem">
              {value.detail.templeCode}
            </Typography> */}

            <H3 mb="0.5rem" fontSize="30px" lineHeight="1.3">
              <Span color="primary.main" fontSize="20px">
                {value.detail.templeCode}
              </Span><br />
              {value.title}
            </H3>

            {/* <Typography color="text.muted" mb="1rem">
            <p dangerouslySetInnerHTML={{ __html: value.body_html }}></p>
            </Typography> */}

            <Small
              fontWeight="700"
              borderBottom="2px solid"
              borderColor="primary.main"
            >
              SHOP NOW
            </Small>
          </Box>

          <NextImage
            width={30}
            height={20}
            layout="responsive"
            objectFit="fit"
            src={value.image.src}
            alt={value.title}
          />
        </Card>
      </a>
    </Link>
  );
};

export default FashionCard1;
