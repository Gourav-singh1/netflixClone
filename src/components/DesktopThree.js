import React from "react";
import DesktopThreeCard from "./DesktopThreeCard";
import DesktopThreeHero from "./DesktopThreeHero";
import DesktopTwoNav from "./DesktopTwoNav";
import Footer from "./Footer";

function DesktopThree() {
  return (
    <>
      <header
        className="Dasktop3HeroImg hero_overlay_2 bg_no_repeat bg_position_center object_fit_cover bg_size_cover min_vh_50 position-relative d-flex
        flex-column"
      >
        <DesktopTwoNav />
        <section className="flex-grow-1 d-flex align-items-center pb-5">
          <DesktopThreeHero />
        </section>
      </header>
      <DesktopThreeCard />
      <Footer />
    </>
  );
}

export default DesktopThree;
