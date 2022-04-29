import type { NextPage } from "next";
import Head from "next/head";
import Hero from "../components/Hero";
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
