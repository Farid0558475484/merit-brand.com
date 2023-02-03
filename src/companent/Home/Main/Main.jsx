import React from "react";
import s from "./Main.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import img from "./../../../img/slider1.png";
import img2 from "./../../../img/gg.jpg";
import img3 from "./../../../img/rr.png";
import { Carousel } from "react-bootstrap";

function Main() {
  return (
    <>
      <div className={s.main}>
        <Container fluid className={s.container}>
          <Row className={s.row}>
            <Col lg={12} className="p-0">
              <div className={s.mainImg}>
              <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img}
          alt="First slide"
        />
        <Carousel.Caption>
        
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img3}
          alt="Second slide"
        />

        <Carousel.Caption>


        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2}
          alt="Third slide"
        />

        <Carousel.Caption>


        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Main;
