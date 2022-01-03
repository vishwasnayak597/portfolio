import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./projectCard";
import './project.css'
import Book from '../../assets/img/projects/books.jpg'
import Doc from '../../assets/img/projects/doc.jpg'
import Cloth from '../../assets/img/projects/cloth.png'
import Notes from '../../assets/img/projects/notes.jpg'
import Drums from '../../assets/img/projects/drums.png'

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="pt-3 text-center font-details-b pb-3" style={{ textAlign: "center",color:"white"}}>My Recent Works</h1>
        <p style={{ textAlign: "center",color:"white",fontSize:"2em"}}>Here are a few projects I've worked on recently. </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Book}
              isBlog={false}
              title="Ebiblio"
              description="Ebiblio is online book store where user can buy and add book to the cart. Along with that user can check reviews and filter books based on genre, author, price etc. Admin can add, update, view and delete book details.
              Admin can also check sold book details. React, redux, material ui is used for frontend along with Express.js, mongoDB and stripe"
              link="https://github.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Doc}
              isBlog={false}
              title="Online doct"
              description="This application will help patients to book an online appointment with doctor. Once booked, doctor will send google invite on particular time and can video chat through
              google meet. User can also check prescriptions and add reviews for doctor. Application is built using MERN stack"
              link="https://github.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Notes}
              isBlog={false}
              title="Keeper app"
              description="This application allows user to lists all the todo items. User can do all CRUD operation for a particular list.
              Each list will have title and content. Application is developed using React."
              link="https://github.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Cloth}
              isBlog={false}
              title="Ecommerce cloth"
              description="This application displays clothes for mens, womens and kids. User can filter clothes based on price and check clothes.
              User authentication is done using firebase. This application is developed using React and material Ui."
              link="https://github.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Drums}
              isBlog={false}
              title="drum sound"
              description="Its simple website build using javascript, HTML and CSS. Website contains different drums with images. Each drum has different sound
              attached to it. User can play drum by clicking on different drum thereby creating music with drums."
              link="https://github.com"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;