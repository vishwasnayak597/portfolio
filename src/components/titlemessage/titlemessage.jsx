import React from "react";
import Typewriter from "typewriter-effect";
import styled from "styled-components";

const MyTitleMessage = styled.h1`
  position: absolute;
  width: 100%;
  top: 22rem;
  z-index: 1;
  margin-top: -125px;
  text-align: center;
  font-size: 3em; 
  strong {
    font-size: 1.95em; 
  }
  div {
    color: ${(props) => props.theme.textColor};

    text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4);
    font-weight: 200;
    letter-spacing: 7px;

    .main {
      font-size: 50px;
    }

    .sub {
      font-size: 1.5em;
      letter-spacing: .5em;
    }
  }
`;

const TitleMessage = () => (
  <MyTitleMessage>
    <div className="titleMessage">
      <div className="heading">
        <div className="main text-center mb-3" >
          <h1 style={{fontSize:'2em',paddingTop:"1em",paddingLeft:"1em"}}>Hi, I am <span className="wave" role="img" aria-labelledby="wave">👋🏻</span></h1>
            <strong className="main-name">VISHWAS NAYAK</strong>
        </div>
        <br/>
        <div className="sub">
          <Typewriter
            options={{
              strings: ["Electronics and Communication Engineer","Web Developer", "MERN stack Developer", "Learner"],
              autoStart: true,
              loop: true,
              delay: 50,
            }}
          />
        </div>
      </div>
    </div>
  </MyTitleMessage>
);

export default TitleMessage;