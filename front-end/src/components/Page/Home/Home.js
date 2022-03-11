import React from 'react'
import Layout from '../../layout/layout/layout'
import {Banner} from '../../layout/Banner'
import {Search} from '../../layout/Search'
import {Cardss} from '../../layout/Cardss'
import Cards2 from '../../layout/Cards2'
import AboutUs from '../../layout/AboutUs'
import Footer from '../../layout/Footer'


function Home() {
  return (
    <Layout>
      <Banner/>
      <Search/>
      <Cardss/>
      <Cards2 />
      <AboutUs/>
      <Footer/>
    </Layout>
  );
}

export default Home;
