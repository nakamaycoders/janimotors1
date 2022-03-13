import React from "react";
import Layout from "../../layout/layout/layout";
import { Banner } from "../../layout/Banner";
import { Search } from "../../layout/Search";
import { Cardss } from "../../layout/InventoryCards/Cardss";
import Cards2 from "../../layout/Card2/Cards2";
import AboutUs from "../../layout//Aboutus/AboutUs";
import Footer from "../../layout/Footer";

function Home() {
  return (
    <Layout>
      <Banner />
      <Search />
      <Cardss />
      <Cards2 />
    
    </Layout>
  );
}

export default Home;
