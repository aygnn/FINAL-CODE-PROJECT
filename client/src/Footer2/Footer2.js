import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import './Footer2.scss';
import { GrFacebookOption } from "react-icons/gr";
import { AiOutlineInstagram,AiOutlineTwitter } from "react-icons/ai";
import { IoLogoPinterest } from "react-icons/io";
import { Link } from 'react-router-dom';





export default function Footer2() {
  return (
    <div className="footer2">
      <Container>
        <Row>
          <Col sm={3}>
            <div className="ul1">
              <div className="logo">
                <img src="https://preview.colorlib.com/theme/fashi/img/footer-logo.png.webp" />
              </div>
              <ul>
                <li>Address: 60-49 Road 11378 New York</li>
                <li>Phone: +65 11.188.888</li>
                <li>Email: hello.colorlib@gmail.com</li>
              </ul>

              <div className="social">
                <a href="#">
                  <GrFacebookOption />
                </a>
                <a href="#">
                  <AiOutlineInstagram />
                </a>
                <a href="#">
                  <AiOutlineTwitter />
                </a>
                <a href="#">
                  <IoLogoPinterest />
                </a>
              </div>
            </div>
          </Col>
          <Col sm={2}>
            <div className="ul2">
              <h5>Information</h5>
              <ul>
                <li>
                  <Link to={'/'}>About Us</Link>
                </li>
                <li>
                  <Link to={'checkout'}>Checkout</Link>
                </li>
                <li>
                  <Link to={'contact'}>Contact</Link>
                </li>
              
              </ul>
            </div>
          </Col>
          <Col sm={2}>
            <div className="ul2">
              <h5>My Account</h5>
              <ul>
                <li>
                  <a href="#">My Account</a>
                </li>
                <li>
                  <Link to={'contact'}>Contact</Link>
                </li>
                <li>
                  <Link to={'viewBag'}>Shopping Cart</Link>
                </li>
                <li>
                  <Link to={'Shop'}>Shop</Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col sm={4}>
            <div className="ul2">
              <h5>Join Our Newsletter Now</h5>
              <p>
                Get E-mail updates about our latest shop and special offers.
              </p>
              <form>
                <div>
                <input type="text" placeholder="Enter Your Mail" />
                <button>Subscribe</button>

                </div>
              </form>
            </div>
          </Col>
        </Row>
      </Container>

   
    </div>
  );
}
