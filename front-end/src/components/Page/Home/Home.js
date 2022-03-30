import React,{useEffect} from "react";
import Layout from "../../layout/layout/layout";
import { Banner } from "../../layout/Banner";
import { Search } from "../../layout/Search";
import { Cardss } from "../../layout/InventoryCards/Cardss";
import Cards2 from "../../layout/Card2/Cards2";
// import AboutUs from "../../layout//Aboutus/AboutUs";
// import Footer from "../../layout/Footer";
import MetaData from '../../layout/MetaData'
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../layout/Loader/Loader";
import { clearErrors, getProduct } from "../../../actions/productAction";


function Home() {
  // const dispatch = useDispatch()
  // const {loading,error} = useSelector((state)=> state.product)
  // useEffect(() => {
  //   if (error) {
  //     dispatch(clearErrors());
  //   }
  // }, [error]);

  // dispatch(getProduct());
  return (
    <>
    {/* {loading ? <Loader/> : (
      <> */}
      <MetaData title="JANI MOTORS" />
      <Layout>
      <Banner />
      <Search />
      <Cardss />
      <Cards2 />
    </Layout>    
      {/* </>
    )} */}
    </>
  );
}
export default Home;