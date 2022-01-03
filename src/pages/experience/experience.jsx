import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import L_WIPRO from "../../assets/img/experience/Wipro.png";
import L_QBURST from "../../assets/img/experience/Qburst.png";
import Tilt from "react-tilt";
import "./experience.css";

const Experience = () => {
  return (
    <div>
      <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
      <div className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}> 
            <Card>
              <Card.Header
                as="h5"
                className="d-flex justify-content-center flex-wrap"
              >
                <Card.Img
                  variant="top"
                  className="img-resize"
                  src={L_QBURST}
                  alt="Qburst logo"
                />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">Software Engineer</Card.Title>
                </div>
                <div>
                  <div className="text-center style">
                    <strong className="body-title-style ">
                      Full Stack Developer
                    </strong>
                    <br />
                    <strong>Technology:</strong> React JS, Redux, Express.js
                    Node.js, MongoDB
                    <br />
                    <strong>Duration:</strong> October 2021 - Present
                    <br />
                    <strong> Description </strong>
                    <ul className="text-left">
                      <li>
                        Working as Full stack developer with TypeScript Node.js and
                        React
                      </li>

                      <li>
                        <strong>Provided</strong> application maintenance while
                        working as `Production Support` and Enhancement items
                        based on analysis of the same
                      </li>
                    </ul>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </div>

     
      <div className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header
                as="h5"
                className="d-flex justify-content-center flex-wrap"
              >
                <Card.Img
                  variant="top"
                  className="img-resize"
                  src={L_WIPRO}
                  alt="Wipro logo"
                />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">
                    Project Engineer
                  </Card.Title>
                </div>
                <div>
                  <div className="text-center style">
                    <strong className="body-title-style ">
                      Full Stack Developer
                    </strong>
                    <br />
                    <strong>Technology:</strong> React JS, Javascript,JQuery,Java, MS-SQL
                    <br />
                    <strong>Duration:</strong> June 2019 - October 2021
                    <br />
                    <strong> Description </strong>
                    <ul className="text-left">
                      <li>
                        Primary responsibilities include developing shipment booking and ground handling screens where a user can book cargo for a particular flight.
                      </li>
                      <li>
                        Code reviews of peers and providing assistance in bug fixes and enhancements.
                      </li>
                      <li>
                      Developing complete UI grid for flight booking screen.
                      </li>
                      <li>
                      Resolving sonar and i18n issues for already existing screens.
                      </li>
                    </ul>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </div>
    </div>
  );
};

export default Experience;