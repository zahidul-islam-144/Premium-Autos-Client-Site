import React from 'react';
import './Banner.css';
import banner2 from '../../../images/banner2.jpg';
import {Image} from 'react-bootstrap';

const Banner = () => {
  return (
    <div id="home" className="banner">
      <Image src={banner2} className="banner-img" fluid />
    </div>
  );
};

export default Banner;