import IconButton from "@component/buttons/IconButton";
import Image from "@component/Image";
import { useAppContext } from "@context/app/AppContext";
import Link from "next/link";
import React, { useState, useContext } from "react";
import Box from "../Box";
import Categories from "../categories/Categories";
import Container from "../Container";
import FlexBox from "../FlexBox";
import Icon from "../icon/Icon";
import MiniCart from "../mini-cart/MiniCart";
import SearchBox from "../search-box/SearchBox";
import Login from "../sessions/Login";
import Sidenav from "../sidenav/Sidenav";
import { Tiny } from "../Typography";
import StyledHeader from "./HeaderStyle";
import UserLoginDialog from "./UserLoginDialog";
import { UserContext } from '../../contexts/user/Usercontext';
import Avatar from "@component/avatar/Avatar";
import Card from "@component/Card";
import Grid from "@component/grid/Grid";
import { StyledSessionCard } from "@component/sessions/SessionStyle";

import Typography, { H3, H5, Small } from "@component/Typography";

type HeaderProps = {
  isFixed?: boolean;
  className?: string;
};

const Header: React.FC<HeaderProps> = ({ isFixed, className }) => {
  const [open, setOpen] = useState(false);
  const [isToggle, setToggle] = useState(false);
  const toggleSidenav = () => setOpen(!open);
  const { state } = useAppContext();
  const { cartList } = state.cart;
  const { user, checkAuth } = useContext(UserContext);
  console.log(user)

  const cartHandle = (
    <FlexBox ml="20px" alignItems="flex-start">
      <IconButton bg="gray.200" p="12px">
        <Icon size="20px">bag</Icon>
      </IconButton>

      {!!cartList.length && (
        <FlexBox
          borderRadius="300px"
          bg="error.main"
          px="5px"
          py="2px"
          alignItems="center"
          justifyContent="center"
          ml="-1rem"
          mt="-9px"
        >
          <Tiny color="white" fontWeight="600">
            {cartList.length}
          </Tiny>
        </FlexBox>
      )}
    </FlexBox>
  );

  return (
    <StyledHeader className={className}>
      <Container
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        height="100%"
      >
        <FlexBox className="logo" alignItems="center" mr="1rem">
          <Link href="/">
            <a>
              <Image src="/assets/images/logo.svg" alt="logo" />
            </a>
          </Link>

          {/* {isFixed && (
            <div className="category-holder">
              <Categories>
                <FlexBox color="text.hint" alignItems="center" ml="1rem">
                  <Icon>categories</Icon>
                  <Icon>arrow-down-filled</Icon>
                </FlexBox>
              </Categories>
            </div>
          )} */}
        </FlexBox>

        {/* <FlexBox justifyContent="center" flex="1 1 0">
          <SearchBox />
        </FlexBox> */}

        <FlexBox className="header-right" alignItems="center">
          {!user? <UserLoginDialog
            handle={
              <IconButton ml="1rem" bg="gray.200" p="8px">
                <Icon size="28px">user</Icon>
              </IconButton>
            }
          >
            <Box>
              <Login />
            </Box> 
          </UserLoginDialog>
          : <>
            <IconButton ml="1rem" bg="gray.200" p="8px" onClick={()=>{
              setToggle(!isToggle);
            }}>
                <Icon size="28px">user</Icon>
              </IconButton>
            <Box style={{marginTop: "180px;", position: "absolute", right: "20%", display: isToggle? "block": "none"}}>
              <StyledSessionCard mx="auto" my="2rem" boxShadow="large">
                <FlexBox as={Card} p="14px 32px">
                  <Avatar src="/assets/images/faces/ralph.png" size={64} />
                  <Box ml="12px" flex="1 1 0">
                    <FlexBox
                      flexWrap="wrap"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <div>
                        <H5 my="0px">Ralph Edwards</H5>
                        <FlexBox alignItems="center">
                          <Typography fontSize="14px" color="text.hint">
                            Balance:
                          </Typography>
                          <Typography ml="4px" fontSize="14px" color="primary.main">
                            $500
                          </Typography>
                        </FlexBox>
                      </div>

                      <Typography
                        ontSize="14px"
                        color="text.hint"
                        letterSpacing="0.2em"
                      >
                        Logout
                      </Typography>
                    </FlexBox>
                  </Box>
                </FlexBox>
              </StyledSessionCard>
            </Box> 
            </>}
          <Sidenav
            handle={cartHandle}
            position="right"
            open={open}
            width={380}
            toggleSidenav={toggleSidenav}
          >
            <MiniCart toggleSidenav={toggleSidenav} />
          </Sidenav>
        </FlexBox>
      </Container>
    </StyledHeader>
  );
};

export default Header;
