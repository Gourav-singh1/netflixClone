import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function DesktopTwoHero() {
  return (
    <>
      <section className="flex-grow-1 d-flex align-items-end pb-5">
        <Container fluid className="offset-lg-2 offset-md-1">
          <h1
            className="ff_primary fw_bold fs_lg color_secondary"
            data-aos="fade-down"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1200"
          >
            Gotham
          </h1>
          <p
            className="ff_primary fw_regular fs_base color_secondary opacity_low_1 py-3"
            data-aos="fade-right"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1200"
          >
            Detective James Gordon is a new recruit assigned to{" "}
            <span className="d-sm-block">
              investigate the murder of Thomas and Martha
            </span>
            <span className="d-sm-block">
              Wayne. The case acquaints him with the slain
            </span>
            couple's son and future crusader, Bruce.
          </p>
          <div
            data-aos="fade-up"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1200"
            data-aos-offset="0"
          >
            <Link to="/DesktopFour">
              <button className="bg_primary ff_primary fw-bold fs_base color_secondary py-3 px-4 opacity_hover text-uppercase rounded-1">
                play now
              </button>
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}

export default DesktopTwoHero;
