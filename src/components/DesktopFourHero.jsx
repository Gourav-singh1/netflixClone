import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import BackArrow from "../assets/images/svg/BackArrow.svg";
import PlayButton from "../assets/images/svg/PlayButton.svg";
import GothamSeason1 from "../assets/Videos/GothamSeason1.mp4";
import Dasktop2HeroImg from "../assets/images/png/Dasktop2HeroImg.png";
import { DesktopContext } from "./Contextuse";

function DesktopFourHero() {
  const { None, setNone } = useContext(DesktopContext);
  return (
    <>
      <header
        data-aos="zoom-in"
        ata-aos-easing="ease-in-sine"
        data-aos-duration="1200"
        className="position-relative"
        onClick={() => setNone(!None)}
      >
        <Container fluid className="px-0">
          <Link to="/DesktopTwo">
            <img
              className=" position-absolute Back_arrow z_index_2"
              data-aos="fade-right"
              data-aos-duration="1200"
              src={BackArrow}
              alt="BackArrow"
            />
          </Link>
          <video
            className="w-100 max_vh_100 object_fit_cover"
            src={GothamSeason1}
            autoPlay
            controls
            loop
            playsInline
            muted
          ></video>

          <div
            className={
              None
                ? "d-none"
                : "position-absolute d-block top-0 start-0 w-100 h-100"
            }
          >
            <button className=" bg-transparent border-0 position-absolute top-50 start-50 translate-middle z_index_2">
              <img src={PlayButton} alt="PlayButton" />
            </button>
            <img
              className="w-100 h-100"
              src={Dasktop2HeroImg}
              alt="Dasktop2HeroImg"
            />
          </div>
        </Container>
      </header>
    </>
  );
}

export default DesktopFourHero;
