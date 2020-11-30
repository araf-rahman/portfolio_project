import React from "react";
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";
import Home from "../components/sections/Home";


function Homepage() {
  return (
    <>
      <Header light/>
      <Home light />
      <Footer light />
    </>
  );
}

export default Homepage;
