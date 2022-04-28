import React, { Fragment } from "react";
import {Link} from "react-router-dom";
import "./about.scss";
function About() {
    return (
      <Fragment className="about">
        <div className="about__wrapper">
          <main className="about__main">
          <h2>Who are we?</h2>
          <p>
            That feels like an existential question, don't you
            think?
          </p>
        </main>
        <nav>
          <Link to="/">Home</Link>
        </nav>
        </div>
        
      </Fragment>
    );
  }
  export default About;