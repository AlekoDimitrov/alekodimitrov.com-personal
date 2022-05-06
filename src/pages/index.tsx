import type { NextPage } from "next";
import Head from "next/head";
import Hero from "../components/Hero";
import LatestPosts from "../components/LatestPosts";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Aleko Dimitrov | Developer </title>
      </Head>

      <Hero />
      <LatestPosts />
    </>
  );
};

export default Home;
