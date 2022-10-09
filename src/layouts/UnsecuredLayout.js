
import Navbar from "@component/navbar/Navbar";
import Footer from "@component/footer/Footer";
import Header from "@component/header/Header";
import MobileNavigationBar from "@component/mobile-navigation/MobileNavigationBar";
import Topbar from "@component/topbar/Topbar";
import Head from "next/head";
import React from "react";
import StyledAppLayout from "./AppLayoutStyle";

import Sticky from "@component/sticky/Sticky";
function UnsecuredLayout({
  children,
  navbar,
  title = "React Next.js Ecommerce Template",
}) {
  return (
    <StyledAppLayout>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Sticky fixedOn={0}>
        <Header />
      </Sticky>
 
      {navbar && <div className="section-after-sticky">{navbar}</div>}
      {!navbar ? (
        <div className="section-after-sticky">{children}</div>
      ) : (
        children
      )}
      <MobileNavigationBar />
      <Footer />
    </StyledAppLayout>
  );
}

export default UnsecuredLayout;