import React from "react";
import { Container } from "react-bootstrap";

function DesktopThreeHero() {
  return (
    <>
      <section className="flex-grow-1 d-flex align-items-center pb-5">
        <Container className="position-relative">
          <h1
            className="ff_primary fw_bold fs_lg color_secondary text-center"
            data-aos="zoom-in"
            ata-aos-easing="ease-in-sine"
            data-aos-duration="1200"
          >
            My list
          </h1>
        </Container>
      </section>
    </>
  );
}

export default DesktopThreeHero;
