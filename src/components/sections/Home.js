import React from "react";
import Typed from "react-typed";

function Home(props) {
  
  return (
    <section
      id="home"
      className={
        props.light
          ? "home d-flex align-items-center light"
          : "home d-flex align-items-center"
      }
    >
      <div className="container">
        <div className="intro">
          <img src="images/araf-rahman.png" alt="arafrahman.com" className="mb-4" />

          <h1 className="mb-2 mt-0">Araf Rahman</h1>
          <p>
            I'm{" "}
            <Typed
              strings={[
                "skip ",
                "a QA Engineer",
                "studying to be a Full Stack Web Developer",
              ]}
              typeSpeed={80}
              backSpeed={40}
              attr="value"
              loop
            >
              <label value></label>
            </Typed>
          </p>

          <ul className="social-icons light list-inline mb-0 mt-4">
        
            <li className="list-inline-item">
              <a href="https://www.linkedin.com/in/arafrahman">
                <i className="fab fa-linkedin" target="_blank" rel="noopener noreferrer"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://github.com/araf-rahman" target="_blank" rel="noopener noreferrer"> 
                <i className="fab fa-github"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://twitter.com/ArafKingman" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Home;
