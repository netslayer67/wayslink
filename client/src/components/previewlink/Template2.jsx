import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import chessImg from "../../assets/Chess.png";

const Template2 = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#2791a8",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <Row className="justify-content-center">
        <Col md={8}>
          <Card
            className="rounded px-5 py-3 text-dark"
            style={{ backgroundColor: "#6eabb8" }}
          >
            <div className="d-flex flex-column align-items-center justify-content-center">
              <img
                src={chessImg}
                width={100}
                height={100}
                style={{ objectFit: "cover", borderRadius: "50%" }}
              />
              <h3>A Nice Day</h3>
              <p className="w-50 text-center">
                Add multiple links for your Instagram Bio and optimising your
                Instagram traffic by using InstaBio
              </p>
            </div>
            <div className="d-flex flex-column align-items-center justify-content-center">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                style={{ border: "2px solid #b2e3ed", borderRadius: "30px" }}
                className="w-100 bg-white text-dark mb-3 py-3 px-2 text-decoration-none d-flex justify-content-center"
              >
                Vlog
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                style={{ border: "2px solid #b2e3ed", borderRadius: "30px" }}
                className="w-100 bg-white text-dark mb-3 py-3 px-2 text-decoration-none d-flex justify-content-center"
              >
                Facebook
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                style={{ border: "2px solid #b2e3ed", borderRadius: "30px" }}
                className="w-100 bg-white text-dark mb-3 py-3 px-2 text-decoration-none d-flex justify-content-center"
              >
                Gallery
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                style={{ border: "2px solid #b2e3ed", borderRadius: "30px" }}
                className="w-100 bg-white text-dark mb-3 py-3 px-2 text-decoration-none d-flex justify-content-center"
              >
                Contact
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                style={{ border: "2px solid #b2e3ed", borderRadius: "30px" }}
                className="w-100 bg-white text-dark mb-3 py-3 px-2 text-decoration-none d-flex justify-content-center"
              >
                About
              </a>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Template2;
