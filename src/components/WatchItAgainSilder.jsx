import React, { useContext, useState } from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";

import AllImages from "./ImagesData";
import WatchItSliderMap from "./WatchItSliderMap";

function WatchItAgainSilder() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 100,
    slidesToShow: 4.1,
    slidesToScroll: 1,
    autoplay: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3.2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2.2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <section className="d-xl-flex justify-content-end flex-column align-items-end overflow-hidden">
        <Container fluid className="offset-lg-2 offset-md-1 py-5 pe-0">
          <div>
            <h2 className="ff_primary fw_medium fs_xxsm color_secondary pb-4">
              Watch it again
            </h2>
            <Slider {...settings}>
              {AllImages.slice(10, 15).map((value) => {
                return <WatchItSliderMap key={value.id} {...value} />;
              })}
            </Slider>
          </div>
        </Container>
      </section>
    </>
  );
}

export default WatchItAgainSilder;
