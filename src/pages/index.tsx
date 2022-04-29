import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import { Box, createTheme, ThemeProvider } from "@mui/material";
import { useState } from "react";
import MobileNavigation from "../components/MobileNavigation";
import { AnimatePresence } from "framer-motion";
import LatestPosts from "../components/LatestPosts";
import Footer from "../components/Footer";

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
