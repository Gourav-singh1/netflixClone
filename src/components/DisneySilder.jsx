import React from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
// import MovieImage1 from "../assets/images/png/MovieImage1.png";
// import MovieImage2 from "../assets/images/png/MovieImage2.png";
// import MovieImage3 from "../assets/images/png/MovieImage3.png";
// import MovieImage4 from "../assets/images/png/MovieImage4.png";
// import MovieImage5 from "../assets/images/png/MovieImage5.png";
// import MovieImage6 from "../assets/images/png/MovieImage6.png";
// import MovieImage7 from "../assets/images/png/MovieImage7.png";
// import MovieImage8 from "../assets/images/png/MovieImage8.png";
// import MovieImage9 from "../assets/images/png/MovieImage9.png";
// import MovieImage10 from "../assets/images/png/MovieImage10.png";

import AllImages from "./ImagesData";

function DisneySilder() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 100,
    slidesToShow: 5.6,
    slidesToScroll: 4,
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
            Disney
          </h2>
          <Slider {...settings}>
            {AllImages.map((value, i) => {
              const { id, Images } = value;
              if (i < 10) {
                return (
                  <div
                    className="px-1"
                    key={id}
                    data-aos="zoom-in"
                    ata-aos-easing="ease-in-sine"
                    data-aos-duration="1200"
                    data-aos-offset="200"
                  >
                    <div className="overflow-hidden rounded-4">
                      <img
                        className="hover_jum h-100 w-100 rounded-4"
                        src={Images}
                        alt="MovieImage1"
                      />
                    </div>
                  </div>
                );
              }
            })}
          </Slider>
        </Container>
      </section>
    </>
  );
}

export default DisneySilder;
