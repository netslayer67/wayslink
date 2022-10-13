import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import chessImg from "../../assets/Chess.png";

const Template1 = () => {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="rounded p-5">
            <div className="d-flex align-items-center justify-content-center flex-column w-100">
              <img
                src={chessImg}
                width={100}
                height={100}
                style={{ objectFit: "cover", borderRadius: "50%" }}
              />
              <h3 className="fw-bold mt-3">Your Brand Name</h3>
              <p className="w-50 text-center">
                Add multiple links for your Instagram Bio and optimising your
                Instagram traffic by using InstaBio
              </p>
            </div>
            <div className="d-flex align-items-center justify-content-center flex-column">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                className="rounded bg-dark d-flex w-100 py-1 px-2 align-items-center justify-content-start text-decoration-none mb-3"
              >
                <img
                  src={chessImg}
                  width={50}
                  height={50}
                  style={{ objectFit: "cover", borderRadius: "50%" }}
                />
                <p className="text-white mt-3" style={{ marginLeft: "18rem" }}>
                  Facebook
                </p>
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                className="rounded bg-dark d-flex w-100 py-1 px-2 align-items-center justify-content-start text-decoration-none mb-3"
              >
                <img
                  src={chessImg}
                  width={50}
                  height={50}
                  style={{ objectFit: "cover", borderRadius: "50%" }}
                />
                <p className="text-white mt-3" style={{ marginLeft: "18rem" }}>
                  Instagram
                </p>
              </a>
              <a
                href="https://www.twitter.com/"
                target="_blank"
                className="rounded bg-dark d-flex w-100 py-1 px-2 align-items-center justify-content-start text-decoration-none mb-3"
              >
                <img
                  src={chessImg}
                  width={50}
                  height={50}
                  style={{ objectFit: "cover", borderRadius: "50%" }}
                />
                <p className="text-white mt-3" style={{ marginLeft: "18rem" }}>
                  Twitter
                </p>
              </a>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                className="rounded bg-dark d-flex w-100 py-1 px-2 align-items-center justify-content-start text-decoration-none mb-3"
              >
                <img
                  src={chessImg}
                  width={50}
                  height={50}
                  style={{ objectFit: "cover", borderRadius: "50%" }}
                />
                <p className="text-white mt-3" style={{ marginLeft: "18rem" }}>
                  Youtube
                </p>
              </a>
              <a
                href="https://wa.me/6282121273909"
                target="_blank"
                className="rounded bg-dark d-flex w-100 py-1 px-2 align-items-center justify-content-start text-decoration-none mb-3"
              >
                <img
                  src={chessImg}
                  width={50}
                  height={50}
                  style={{ objectFit: "cover", borderRadius: "50%" }}
                />
                <p className="text-white mt-3" style={{ marginLeft: "18rem" }}>
                  Whatsapp
                </p>
              </a>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Template1;
