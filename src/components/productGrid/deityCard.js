import ProductIntro from "@component/products/ProductIntro";
import { useAppContext } from "@context/app/AppContext";
import { CartItem } from "@reducer/cartReducer";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment, useCallback, useState } from "react";
import { CSSProperties } from "styled-components";
import Box from "../Box";
import Button from "../buttons/Button";
import Card, { CardProps } from "../Card";
import { Chip } from "../Chip";
import FlexBox from "../FlexBox";
import Icon from "../icon/Icon";
import Modal from "../modal/Modal";
import Rating from "../rating/Rating";
import { H2, SemiSpan } from "../Typography";
import { StyledProductCard1 } from "./ProductCardStyle";
import DeityAddDialog from "./DeityAddDialog";
import IconButton from "@component/buttons/IconButton";
import Devotee from "./Devotee";


const DeityCard = ({
  id,
  imgUrl,
  title,
  price,
  off,
  rating,
  ...props
}) => {
  const [open, setOpen] = useState(false);

  const { state, dispatch } = useAppContext();
  const cartItem = state.cart.cartList.find((item) => item.id === id);

  const toggleDialog = useCallback(() => {
    setOpen((open) => !open);
  }, []);

  const handleCartAmountChange = useCallback(
    (amount) => () => {
      dispatch({
        type: "CHANGE_CART_AMOUNT",
        payload: {
          name: title,
          qty: amount,
          price,
          imgUrl,
          id,
        },
      });
    },
    []
  );

  return (
    <StyledProductCard1 {...props}>
      <div className="image-holder">
        {!!off && (
          <Chip
            position="absolute"
            bg="primary.main"
            color="primary.text"
            fontSize="10px"
            fontWeight="600"
            p="5px 10px"
            top="10px"
            left="10px"
          >
            {off}% off
          </Chip>
        )}

        <FlexBox className="extra-icons">
          <Icon
            color="secondary"
            variant="small"
            mb="0.5rem"
            onClick={toggleDialog}
          >
            eye-alt
          </Icon>

          {/* <Icon className="favorite-icon outlined-icon" variant="small">
            heart
          </Icon> */}
          {/* <Icon className="favorite-icon" color="primary" variant="small">
              heart-filled
            </Icon> */}
        </FlexBox>

       {imgUrl? <Link href={`/product/${id}`}>
          <a>
            <Image
              src={imgUrl}
              layout="responsive"
              alt={title}
              width={100}
              height={100}
            />
          </a>
        </Link>: <></>} 
      </div>
      <div className="details">
        <FlexBox>
          <Box flex="1 1 0" minWidth="0px" mr="0.5rem">
            <Link href={`/product/${id}`}>
              <a>
                <H2
                  className="title"
                  fontSize="14px"
                  textAlign="left"
                  fontWeight="600"
                  color="text.secondary"
                  mb="10px"
                  title={title}
                >
                  {title} 
                </H2>
              </a>
            </Link>

            {/* <Rating value={rating || 0} outof={5} color="warn" readonly /> */}

            <FlexBox alignItems="center" mt="10px">
              <SemiSpan pr="0.5rem" fontWeight="600" color="primary.main">
                ${(price - (price * off) / 100).toFixed(2)}
              </SemiSpan>
              {!!off && (
                <SemiSpan color="text.muted" fontWeight="600">
                  <del>{price?.toFixed(2)}</del>
                </SemiSpan>
              )}
            </FlexBox>
          </Box>

          <FlexBox
            flexDirection="column-reverse"
            alignItems="center"
            justifyContent={!!cartItem?.qty ? "space-between" : "flex-start"}
            width="30px"
          >
            {/* <div className="add-cart"> */}

            <DeityAddDialog
            handle={
              <Button
              variant="outlined"
              color="primary"
              padding="5px 10px"
              size="none"
              borderColor="primary.light"
            >
              <Icon variant="small">Add</Icon>
            </Button>
            }
          >
            <Box>
              <Devotee />
            </Box> 
          </DeityAddDialog>
           
            {/* <Button
              variant="outlined"
              color="primary"
              padding="3px"
              size="none"
              borderColor="primary.light"
              onClick={handleCartAmountChange((cartItem?.qty || 0) + 1)}
            >
              <Icon variant="small">plus</Icon>
            </Button>

            {!!cartItem?.qty && (
              <Fragment>
                <SemiSpan color="text.primary" fontWeight="600">
                  {cartItem?.qty}
                </SemiSpan>
                <Button
                  variant="outlined"
                  color="primary"
                  padding="3px"
                  size="none"
                  borderColor="primary.light"
                  onClick={handleCartAmountChange(cartItem?.qty - 1)}
                >
                  <Icon variant="small">minus</Icon>
                </Button>
              </Fragment>
            )} */}
          </FlexBox>
        </FlexBox>
      </div>

      <Modal open={open} onClose={toggleDialog}>
        <Card p="1rem" position="relative">
          <ProductIntro imgUrl={[imgUrl]} title={title} price={price} id={id} />
          <Box
            position="absolute"
            top="0.75rem"
            right="0.75rem"
            cursor="pointer"
          >
            <Icon
              className="close"
              color="primary"
              variant="small"
              onClick={toggleDialog}
            >
              close
            </Icon>
          </Box>
        </Card>
      </Modal>
    </StyledProductCard1>
  );
};

DeityCard.defaultProps = {
  id: "324321",
  title: "KSUS ROG Strix G15",
  imgUrl: "/assets/images/products/macbook.png",
  off: 50,
  price: 450,
  rating: 0,
};

export default DeityCard;
