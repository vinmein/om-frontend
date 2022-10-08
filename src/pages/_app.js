import Head from "next/head";
import { useRouter, Router } from 'next/router';
import NProgress from "nprogress";
import React, { Fragment, useState, useEffect, useMemo } from "react";
import { ThemeProvider } from "styled-components";
import { AppProvider } from "../contexts/app/AppContext";
import { UserContext } from '../contexts/user/Usercontext';
import { GlobalStyles } from "../utils/globalStyles";
import { theme } from "../utils/theme";
import useAuth from "../hooks/useAuth";
import { isAuthenticated, logoutUser } from '../services/helper.service';

//Binding events.
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

NProgress.configure({ showSpinner: false });

const App = ({ Component, pageProps }) => {
  const [user, setUser] = useState(null);
  const router = useRouter();
  let Layout = Component.layout || Fragment;

  const logout = () => {
    logoutUser();
    setUser(null);
    router.push('/login');
  };

  const checkAuth = () => {
    const user = isAuthenticated();
    setUser(user);
    if (user) {
      return true;
    }
    return false;
  };
  useEffect(() => {
    checkAuth();
  }, []);

  const providerValue = useMemo(() => ({ user, setUser, checkAuth, logout }), [
    user,
    setUser,
  ]);

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
    
        {/* thumbnail And title for social media */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Om HEB " />
       
    
      </Head>
      <GlobalStyles />
      <AppProvider>
        <Layout>
          <UserContext.Provider value={providerValue}>
            <Component {...pageProps} />
          </UserContext.Provider>
        </Layout>
      </AppProvider>
    </ThemeProvider>
  );
};

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// App.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default App;
