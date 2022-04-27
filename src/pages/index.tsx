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

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Aleko Dimitrov | Developer </title>
      </Head>

      <Hero />
      <LatestPosts />
      <Footer />
    </>
  );
};

export default Home;
