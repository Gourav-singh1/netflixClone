import React from "react";
import DesktopTwoHero from "./DesktopTwoHero";
import DesktopTwoNav from "./DesktopTwoNav";
import DisneySilder from "./DisneySilder";
import Footer from "./Footer";
import PopularSilder from "./PopularSilder";
import TravelSilder from "./TravelSilder";
import WatchItAgainSilder from "./WatchItAgainSilder";

function DesktopTwo() {
  return (
    <>
      <header
        className="Dasktop2HeroImg bg_no_repeat bg_posi tion_center object_fit_cover bg_size_cover min-vh-100 position-relative d-flex
        flex-column overflow_hidden_x "
      >
        <DesktopTwoNav />
        <DesktopTwoHero />
      </header>
      <DisneySilder />
      <WatchItAgainSilder />
      <TravelSilder />
      <PopularSilder />
      <Footer />
    </>
  );
}

export default DesktopTwo;
