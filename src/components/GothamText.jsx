import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import { DesktopContext } from "./Contextuse";

function GothamText() {
  const { Cadd, setCadd } = useContext(DesktopContext);
  return (
    <>
      <section className="py-5">
        <Container fluid className="">
          <div className="GothamText offset-lg-2 offset-md-1">
            <div className="d-flex justify-content-between">
              <div
                className="pt-1"
                data-aos="fade-right"
                ata-aos-easing="ease-in-sine"
                data-aos-duration="1200"
                data-aos-offset="200"
              >
                <h2 className="ff_primary fw_semiBold fs_sm color_secondary">
                  Gotham
                </h2>
                <p className="ff_primary  fw_regular fs_base color_secondary opacity_low_1">
                  Views: 837334
                  <samp className="ps-5 ms-sm-5">Cast: Netflix</samp>
                </p>
              </div>
              <button
                className="hover_img bg-transparent border-0"
                data-aos="fade-left"
                ata-aos-easing="ease-in-sine"
                data-aos-duration="1200"
                data-aos-offset="200"
              >
                <svg
                  onClick={() => setCadd(!Cadd)}
                  className={Cadd ? "heartSvg" : "heartSvgRed"}
                  width="54"
                  height="54"
                  viewBox="0 0 54 54"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_6_534)">
                    <rect opacity="0.2" width="54" height="54" fill="#D9D9D9" />
                    <path
                      d="M26.3232 17.8628L26.9999 18.4851L27.6768 17.8628C28.9451 16.6969 30.605 16.0497 32.3277 16.0493C33.2392 16.0501 34.1415 16.231 34.9828 16.5816C35.8243 16.9322 36.5881 17.4457 37.2304 18.0926L37.2313 18.0934C39.9854 20.8604 39.9826 25.1552 37.2356 27.9022L27.3489 37.7889L27.2929 37.8449L27.2463 37.9092C27.217 37.9497 27.1785 37.9827 27.134 38.0057C27.0909 38.028 27.0433 38.0401 26.9948 38.0413C26.8404 38.0396 26.7441 37.9639 26.7027 37.8911L26.6359 37.7737L26.5405 37.6782L16.7645 27.9022L16.7643 27.9021C14.0169 25.1559 14.0139 20.86 16.7633 18.0989L16.7647 18.0975C17.4075 17.4493 18.172 16.9347 19.0144 16.5832C19.8566 16.2318 20.76 16.0503 21.6725 16.0493C23.3952 16.0495 25.0551 16.6967 26.3232 17.8628Z"
                      stroke="white"
                      stroke-width="2"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_6_534">
                      <rect width="54" height="54" rx="27" fill="#e50914" />
                    </clipPath>
                  </defs>
                </svg>
              </button>
            </div>
            <p
              className="ff_primary  fw_regular fs_base color_secondary opacity_low_1 pt-3"
              data-aos="fade-up"
              ata-aos-easing="ease-in-sine"
              data-aos-duration="1200"
              data-aos-offset="200"
            >
              Detective James Gordon is a new recruit assigned to investigate
              the murder of Thomas and Martha Wayne. The case acquaints him with
              the slain couple's son and future crusader, Bruce.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}

export default GothamText;
