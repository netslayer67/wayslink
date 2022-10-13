import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import chessImg from "../../assets/Chess.png";

const Template3 = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#bf5c00",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="rounded">
            <div className="d-flex justify-content-center">
              <img
                src={chessImg}
                width={400}
                height={300}
                style={{ objectFit: "cover" }}
                className="mb-3"
              />
            </div>
            <div className="d-flex flex-column align-items-center justify-content-center">
              <h3>Marissa</h3>
              <p className="w-50 text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                consequuntur non nihil natus, nesciunt nisi quis tempora
                similique illum possimus. Odio obcaecati illum quos voluptates
                voluptas tenetur eaque enim sequi, quae blanditiis nam quibusdam
                officiis amet totam. Accusantium, quae ratione laudantium
                consectetur, reiciendis earum facilis nisi, ullam labore
                excepturi quia?
              </p>

              <div className="d-flex my-5">
                <a
                  href="#"
                  target="_blank"
                  className="text-decoration-none me-3"
                >
                  <img
                    src={chessImg}
                    width={20}
                    height={20}
                    style={{ objectFit: "cover", borderRadius: "50%" }}
                  />
                </a>
                <a
                  href="#"
                  target="_blank"
                  className="text-decoration-none me-3"
                >
                  <img
                    src={chessImg}
                    width={20}
                    height={20}
                    style={{ objectFit: "cover", borderRadius: "50%" }}
                  />
                </a>
                <a
                  href="#"
                  target="_blank"
                  className="text-decoration-none me-3"
                >
                  <img
                    src={chessImg}
                    width={20}
                    height={20}
                    style={{ objectFit: "cover", borderRadius: "50%" }}
                  />
                </a>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Template3;
