import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero";
import { createTheme, ThemeProvider } from "@mui/material";
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

const Home: NextPage = () => {
  const [mobileNavigation, setMobileNavigation] = useState<boolean>(false);

  return (
    <ThemeProvider theme={theme}>
      <>
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
      </>
    </ThemeProvider>
  );
};

export default Home;
