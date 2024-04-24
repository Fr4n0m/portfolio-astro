import React from "react";
import "../styles/styles.css";
import Header from "../components/header/HeaderComponent";
import ScrollUp from "../components/scroll-button/ScrollUpComponent";
import Hero from "../components/hero/HeroComponent";
import LinksInfo from "../components/links-info-section/LinksInfoComponent";
import InProgress from "../components/inprogress/InProgressComponent";
import Footer from "../components/footer/FooterComponent";

const App = () => {
  return (
    <>
      <main>
        <Header />

        <ScrollUp />

        <Hero />

        <LinksInfo />

        <InProgress />
      </main>

      <Footer />
    </>
  );
};

export default App;
