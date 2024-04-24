import React from "react";
import "../../styles/styles.css";
import Header from "../header/HeaderComponent";
import ScrollUp from "../scroll-button/ScrollUpComponent";
import Footer from "../footer/FooterComponent";
import AboutMeInfo from "./about-me-info/AboutMeInfoComponent";

const AboutMe = () => {
  return (
    <>
      <main>
        <Header />

        <ScrollUp />

        <AboutMeInfo />
      </main>

      <Footer />
    </>
  );
};

export default AboutMe;
