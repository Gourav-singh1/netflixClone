import React from "react";
import Slider from "react-slick";
import WatchItSliderMap from "./WatchItSliderMap";
import AllImages from "./ImagesData";
import { Container } from "react-bootstrap";

function PopularSilder() {
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
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
          <h2 className="ff_primary fw_medium fs_xxsm color_secondary pb-4">
            Popular
          </h2>
          <Slider {...settings}>
            {AllImages.slice(16, 21).map((value) => {
              const { id } = value;
              return <WatchItSliderMap key={id} {...value} />;
            })}
          </Slider>
        </Container>  
      </section>
    </>
  );
}

export default PopularSilder;
