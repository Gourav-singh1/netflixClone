import React from "react";
import { Container } from "react-bootstrap";

function Footer() {
  return (
    <>
      <footer className="py-lg-5 mt-5 footer_bg_image bg_no_repeat bg_position_center object_fit_cover bg_size_cover">
        <Container fluid className="py-sm-5 mt-5 pb-5">
          <div
            className="bg_primary max_w_810 d-flex flex-column flex-sm-row text-center align-items-center justify-content-between px-4 mx-auto rounded-4 py-4 shadow_primary"
            data-aos="zoom-in"
            ata-aos-easing="ease-in-sine"
            data-aos-duration="1200"
          >
            <h2 className="ff_primary color_secondary fw-bold fs_md text_shadow_primary">
              Upgrade to premium
            </h2>
            <a
              className="ff_primary color_secondary fw-bold fs_base py-3 px-4 border_secondary rounded-3 opacity_hover text-uppercase mt-4 mt-sm-0"
              href="#"
            >
              Upgrade now
            </a>
          </div>
        </Container>
      </footer>
    </>
  );
}

export default Footer;
