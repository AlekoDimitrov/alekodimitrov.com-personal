import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import { Box, createTheme, ThemeProvider } from "@mui/material";
import { useState } from "react";
import MobileNavigation from "../components/Navbar/MobileNavigation";
import { AnimatePresence } from "framer-motion";
import LatestPosts from "../components/LatestPosts/LatestPosts";
import Footer from "../components/Footer/Footer";

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

theme.typography.h1 = {
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

const Home: NextPage = () => {
  const [mobileNavigation, setMobileNavigation] = useState<boolean>(false);

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Aleko Dimitrov | Developer </title>
      </Head>
      <Box display={"flex"} justifyContent={"center"}>
        <Box maxWidth={768}>
          <Navbar
            setMobileNavigation={setMobileNavigation}
            mobileNavigation={mobileNavigation}
          />
          <AnimatePresence>
            {mobileNavigation === true && <MobileNavigation />}
          </AnimatePresence>
          <Hero />
          <LatestPosts />
          <Footer />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Home;
