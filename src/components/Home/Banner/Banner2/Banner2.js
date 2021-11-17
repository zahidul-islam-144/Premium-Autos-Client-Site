import React from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Banner2.css";

const Banner2 = () => {
  return (
    <>
      <div className="rolls-royace-banner-block mx-auto">
        <Image
          src="https://i.ibb.co/kJqNPpk/bmw-collection.jpg"
          fluid
          className="rolls-royace-img"
        />

        <div className="explore-block">
          <Link to="/explore" className="explore-btn-link">
            <h5 className="text-white fs-1 p-3 border explore-btn">
              Explroe us
            </h5>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Banner2;
