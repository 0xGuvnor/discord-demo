import type { NextPage } from "next";
import Head from "next/head";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Discord | Your Place to Talk and Hang Out</title>
        <link rel="icon" href="/discord_favicon.ico" />
      </Head>

      <Navbar light />
      <main className="">
        <Hero />
      </main>
    </div>
  );
};

export default Home;
