import React from "react";
import './style.css';

import banner from "../../statics/Banner.jpg";

const Banner = () => {
  return (
    <div className="container-img-banner">
      <img className="img-banner" alt="banner" src={banner} />
    </div>
  );
};

export default Banner;
