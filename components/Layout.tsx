import Head from "next/head";
import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="">
    <Head>
      <title>NextEvents</title>
      <meta name="description" content="This is an event tracker." />
      <meta name="hreflang" content="en-US" />
    </Head>
    <Navbar />
    <main className="flex items-center justify-center">{children}</main>

    <footer className=""></footer>
  </div>
);

export default Layout;
