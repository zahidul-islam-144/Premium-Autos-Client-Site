import React from "react";
// import Footer from '../../Footer/Footer';
import About from "../../Header/About/About";
import Contact from "../../Header/Contact/Contact";
// import Header from '../../Header/Header/Header';
import Banner from "../Banner/Banner";
import Banner2 from "../Banner/Banner2/Banner2";
import Products from "../Products/Products";
import RatingPage from "../RatingPage/RatingPage";
const Home = () => {
  return (
    <>
      {/* <Header></Header> */}
      <Banner></Banner>
      <About></About>
      <Products></Products>
      {/* <Reviews></Reviews> */}
      <RatingPage></RatingPage>
      <Banner2></Banner2>
      <Contact></Contact>
      {/* <Footer></Footer> */}
    </>
  );
};

export default Home;
