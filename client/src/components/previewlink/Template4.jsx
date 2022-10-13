import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import chessImg from "../../assets/Chess.png";
import { Link } from "react-router-dom";

const Template4 = () => {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card md={8}>
            <Card className="rounded">
              <div className="d-flex justify-content-center">
                <img
                  src={chessImg}
                  width={300}
                  height={300}
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="px-3 mt-3 d-flex justify-content-center align-items-center flex-column">
                <h3>Woman's Jewelry</h3>
                <p>Woman waering gold-colored and silver-colored rings</p>
              </div>
              <div className="d-flex flex-column mb-1">
                <div className="d-flex justify-content-between align-items-center border-top py-2 px-4">
                  <div className="d-flex align-items-center">
                    <img
                      src={chessImg}
                      width={100}
                      height={100}
                      style={{ objectFit: "cover" }}
                    />
                    <h3 className="ms-3">Lazada</h3>
                  </div>
                  <a
                    href="https://www.youtube.com"
                    target="_blank"
                    className="py-2 px-4 border border-dark text-dark text-decoration-none rounded"
                  >
                    Open
                  </a>
                </div>
              </div>
            </Card>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Template4;
