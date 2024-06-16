import React from "react";
import PageLago from "../assets/images/svg/PageLago.svg";


const PreLoader = () => {
  return (
    <>
      <div className="loading bg-black d-flex justify-content-center align-items-center">
        <div>
          <img className="loading_svg" src={PageLago} />
        </div>
      </div>
    </>
  );
};

export default PreLoader;