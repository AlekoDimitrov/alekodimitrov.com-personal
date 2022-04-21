import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar/Navbar";
import { Box } from "@mui/system";

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
    </>
  );
};

export default Home;
