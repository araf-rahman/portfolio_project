import React from "react";
import Pagetitle from "../components/elements/Pagetitle";
import Header from "../components/layouts/Header"
import Resume from "../Resume.pdf"

const aboutContent = {
  name: "Araf",
  avatarImage: "images/araf-rahman.png",
  content:
    "A meticulous Web Developer & QA Tester with comprehensive training in Full Stack Web Development and QA Testing for Web-based applications. Possesses exceptional skills in data analyzing & technology management. Efficient in a fast-paced environment and an excellent communicator. Technical skills and interests include Ruby, algorism, data analysis, machine learning, and balancing creativity with functionality & technology.",
};

function About() {
  return (
    <section id="About">
      <div className="container">
         <Header light/>
        <Pagetitle title="About Me" />
        <div className="row">
          <div className="col-md-3">
            <div className="text-center text-md-left">
              <img src={aboutContent.avatarImage} alt={aboutContent.name} />
            </div>
            <div className="spacer d-md-none d-lg-none" data-height="30"></div>
          </div>

          <div className="col-md-7 triangle-left-md triangle-top-sm">
            <div className="rounded bg-white shadow-dark padding-30">
                <div className="row">
                  <p>A meticulous Web Developer & QA Tester with comprehensive training in Full Stack Web Development and QA Testing for Web-based applications. Possesses exceptional skills in data analyzing & technology management. Efficient in a fast-paced environment and an excellent communicator. Technical skills and interests include Ruby, algorism, data analysis, machine learning, and balancing creativity with functionality & technology.</p>
                  <div className="mt-3">
                    <a href={Resume} download="Resume.pdf" className="btn btn-primary">
                      Download Resume
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  </section>
  );
}

export default About;
