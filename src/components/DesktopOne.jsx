import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import PageLago from "../assets/images/svg/PageLago.svg";
function DesktopOne() {
  const [login, setLogin] = useState({
    Email: "",
  });

  // const userName = document.;
  // console.log(userName);
  const EmailSubmit = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    // console.log(name, value);
    setLogin({ ...login, [name]: value });
  };
  const history = useHistory();
  const SubmitEmail = (e) => {
    e.preventDefault();
    // console.log(login);
    if (login.Email === login.Email) {
      history.push("/DesktopTwo");
      localStorage.setItem("login.Email", login.Email);
      // alert("done");
    } else {
      alert("wrong");
    }
  };
  return (
    <>
      <header className="Dasktop1HeroImg hero_overlay bg_no_repeat bg_position_center object_fit_cover bg_size_cover min-vh-100 d-flex flex-column">
        <Container fluid className="position-relative z_index_1 py-5">
          <nav>
            <img
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="2400"
              src={PageLago}
              alt="page-lago"
            />
          </nav>
        </Container>
        <section className="flex-grow-1 d-flex justify-content-center align-items-center">
          <Container className="position-relative z_index_1">
            <div className="text-center">
              <h1
                className="ff_primary fw_bold fs_lg color_secondary"
                data-aos="fade-down"
                ata-aos-easing="ease-in-sine"
                data-aos-duration="1200"
                data-aos-delay="2400"
              >
                Unlimited movies, TV
                <span className="d-lg-block">shows and more.</span>
              </h1>
              <p
                className="ff_primary fw_medium color_secondary fs_xsm pt-3"
                data-aos="fade-right"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1200"
                data-aos-delay="2400"
              >
                Watch anywhere. Cancel anytime.
              </p>
              <form
                onSubmit={SubmitEmail}
                className="w-100 bg_secondary py-2 d-flex align-items-center justify-content-between px-3 mx-auto max_w_520 rounded-3"
                data-aos="fade-up"
                ata-aos-easing="ease-in-sine"
                data-aos-duration="1200"
                data-aos-delay="2400"
              >
                <input
                  className="border-0 bg_transparent outline_unset w-100"
                  type="email"
                  name="Email"
                  onChange={EmailSubmit}
                  value={login.Email}
                  id="Email"
                  required
                  placeholder="Enter your email to login"
                />
                <button className="bg_primary ff_primary fw-bold color_secondary py-3 px-4 opacity_hover rounded-2 border-0">
                  LOGIN
                </button>
              </form>
            </div>
          </Container>
        </section>
      </header>
    </>
  );
}

export default DesktopOne;
