import React, { useContext, useState } from "react";
import Avatar from "react-avatar-edit";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { DesktopContext } from "./Contextuse";
import PageLago from "../assets/images/svg/PageLago.svg";
import CloseImages from "../assets/images/svg/CloseImages.svg";
import LogOutIcon from "../assets/images/svg/LogOutIcon.svg";
import Girl from "../assets/images/png/Girl.png";
import Overlay from "../assets/images/png/Overlay.png";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
function DesktopTwoNav() {
  const { open, setclose, show, setShow } = useContext(DesktopContext);

  const [showModal, setShowModal] = useState(false);
  const [imgcrop, setImgcrop] = useState(false);
  const [storeImage, setStoreImage] = useState([]);

  const onCrop = (view) => {
    setImgcrop(view);
  };
  const onClose = () => {
    setImgcrop(null);
  };

  const saveImage = () => {
    setStoreImage([...storeImage, { imgcrop }]);
    setShowModal(false); 
  };

  const profileImageShow = storeImage.map((item) => item.imgcrop);

  return (
    <>
      <nav
        className=" position-relative z_index_1"
        data-aos="fade-down"
        data-aos-duration="1200"
      >
        <Container fluid className="py-4 position-relative z_index_1">
          <div className="fixed- top px-lg-5 px-3">
            <div className="d-flex align-items-center">
              <div className="d-flex justify-content-between align-items-center w-100 w_md_auto">
                <a href="#">
                  <img src={PageLago} alt="PageLago" />
                </a>
                <button
                  className="d-md-none bg-transparent border-0"
                  type="button"
                  onClick={() => setclose(true)}
                >
                  <span className="d-flex flex-column transform_scale_08 transform_scale_lg_1">
                    <span className="h_px_3 w_px_40 bg_primary shadow_primary d-inline-block d-lg-none"></span>
                    <span className="h_px_3 w_px_40 my-2 bg_primary shadow_primary d-inline-block d-lg-none"></span>
                    <span className="h_px_3 w_px_40 bg_primary shadow_primary d-inline-block d-lg-none"></span>
                  </span>
                </button>
              </div>
              <div
                className={`${
                  open
                    ? "ms-0 opennav w-100 px-4 px-md-0"
                    : " opennav ms_100 w-100"
                }`}
              >
                <div className="d-flex justify-content-between w-100 flex-column-reverse flex-md-row">
                  <ul className="d-flex align-items-center mb-0 ps-md-5 ms-md-5 pt-5 pt-md-0">
                    <li>
                      <Link to="/DesktopTwo">
                        <a
                          onClick={() => setclose(false)}
                          className="me-3 ff_primary fw_semiBold fs_base color_secondary hover_underline fixed_underline"
                          href="#"
                        >
                          Home
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link to="/DesktopThree">
                        <a
                          onClick={() => setclose(false)}
                          className="ms-5 ff_primary fw_regular fs_base color_secondary hover_underline opacity_low_1 fixed_underline"
                          href="#"
                        >
                          My list
                        </a>
                      </Link>
                    </li>
                  </ul>
                  <div className="d-flex justify-content-between">
                    <img
                      className="rounded-circle h_px_60 w_px_60"
                      src={profileImageShow.length ? profileImageShow : Girl}
                      alt="Girl"
                      onClick={() => setShowModal(true)}
                    />
                    {/* <Button
                      variant="primary"
                      onClick={() => setShowModal(true)}
                    >
                      Custom Width Modal
                    </Button> */}

                    <Modal
                      show={showModal}
                      onHide={() => setShowModal(false)}
                      dialogClassName="modal-90w"
                      aria-labelledby="example-custom-modal-styling-title"
                    >
                      <Modal.Header closeButton>
                        <Modal.Title id="example-custom-modal-styling-title">
                          Add a images.
                        </Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <Avatar
                          className="mx-auto"
                          width={300}
                          height={200}
                          onClose={onClose}
                          onCrop={onCrop}
                        />
                        <button onClick={saveImage}>save</button>
                      </Modal.Body>
                    </Modal>
                    <div
                      onClick={() => setShow(!show)}
                      className="d-flex align-items-center position-relative"
                    >
                      <h3
                        className=" color_secondary ps-3 ff_primary fw_regular fs_base mb-0"
                        type="button"
                      >
                        {localStorage.getItem("login.Email")}
                        <span>
                          <img
                            className="ps-3"
                            src={LogOutIcon}
                            alt="LogOutIcon"
                          />
                        </span>
                      </h3>
                      <div
                        className={
                          show
                            ? "opacity-100 transition_200 translateY_30px position-relative z_index_1"
                            : "opacity-0 transition_200 translateY_n_30px position-relative z_index_n_1"
                        }
                      >
                        <Link to="/">
                          <button className="bg_tertiary logOut_button text-nowrap border-0 color_secondary ff_primary fw_regular fs_base z_index_n_1">
                            log out
                          </button>
                        </Link>
                      </div>
                    </div>
                    <img
                      onClick={() => setclose(!open)}
                      width={30}
                      className="d-md-none"
                      src={CloseImages}
                      alt="CloseImages"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
        <img
          className="position-absolute top-0 start-0 w-100"
          src={Overlay}
          alt="overlay"
        />
      </nav>
    </>
  );
}

export default DesktopTwoNav;
