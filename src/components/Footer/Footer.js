import React from "react";
import "./Footer.css";
import { BsFacebook, BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs";
import { Image } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="footer text-center text-white mt-5 pt-5">
      <div>
        <h4>Premium Autos || Copyright 2021</h4>
      </div>
      <div>
        <span>
          <BsFacebook
            style={{
              color: "white",
              height: "30px",
              width: "30px",
              margin: "8px",
            }}
          />
        </span>
        <span>
          <BsInstagram
            style={{
              color: "white",
              height: "30px",
              width: "30px",
              margin: "8px",
            }}
          />
        </span>
        <span>
          <BsLinkedin
            style={{
              color: "white",
              height: "30px",
              width: "30px",
              margin: "8px",
            }}
          />
        </span>
        <span>
          <BsYoutube
            style={{
              color: "white",
              height: "40px",
              width: "40px",
              margin: "8px",
            }}
          />
        </span>
      </div>
      <div className="pb-5 footer-img-block">
        <Image
          src="https://i.ibb.co/n07HKkz/footer2.png"
          className="footer-img"
        />
      </div>
    </div>
  );
};

export default Footer;

// BsFacebook
