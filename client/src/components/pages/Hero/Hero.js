import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
// import { FaHeart, FaPaintBrush, FaTimes } from 'react-icons/fa';
// import { MdLocalCarWash, MdSettings } from 'react-icons/md';
// import { GoPaintCan } from 'react-icons/go';
// import { GiAutoRepair, GiLargePaintBrush, GiCrystalShine, GiTheaterCurtains } from 'react-icons/gi';

import './hero.css'

// var NewComponent = React.createClass({
const Hero = () => {
  return (

    <section className="hero-text">
      <Row className="container text-center">
        <div className="row">
          {/* <div className="col-sm-9 text-center"> */}
          <h2>Make your Car Shine with Our Service</h2>
          <p>
            We are the pioneers in rendering home service for your car wash.
          </p>
          {/* </div> */}
          {/* <div className="col-sm-3 text-right">
            <a className="btn btn-primary btn-lg" href="#portfolio">Gallery</a>
          </div> */}
        </div>
      </Row>
    </section>
  );
}

export default Hero