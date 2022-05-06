import "../../styles/globals.css";
import Head from "next/head";
import type { AppProps } from "next/app";
import { Box } from "@mui/system";
import Navbar from "../components/Navbar";
import MobileNavigation from "../components/MobileNavigation";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { createTheme, ThemeProvider } from "@mui/material";
import Footer from "../components/Footer";

const theme = createTheme({
  palette: {
    primary: {
      main: "#781e86",
    },
    secondary: {
      main: "#5827b0",
    },
  },
});

theme.typography.h3 = {
  fontSize: "2.2rem",
  [theme.breakpoints.up("sm")]: {
    fontSize: "2.4rem",
  },
};

theme.typography.body1 = {
  fontSize: "1.2rem",
  [theme.breakpoints.up("sm")]: {
    fontSize: "1.4rem",
  },
};

theme.typography.body2 = {
  fontSize: "1rem",
  [theme.breakpoints.up("sm")]: {
    fontSize: "1.2rem",
  },
};

function MyApp({ Component, pageProps }: AppProps) {
  const [mobileNavigation, setMobileNavigation] = useState<boolean>(false);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#9f00a7" />
          <meta name="theme-color" content="#ffffff" />
        </Head>

        <Box display={"flex"} justifyContent={"center"}>
          <Box maxWidth={768} width={768}>
            <Navbar
              setMobileNavigation={setMobileNavigation}
              mobileNavigation={mobileNavigation}
            />
            <AnimatePresence>
              {mobileNavigation === true && (
                <MobileNavigation
                  mobileNavigation={mobileNavigation}
                  setMobileNavigation={setMobileNavigation}
                />
              )}
            </AnimatePresence>
            <Component {...pageProps} />
            <Footer />
          </Box>
        </Box>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
