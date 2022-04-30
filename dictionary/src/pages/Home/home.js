import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import './home.scss';
function Home() {
  return (
    <Fragment >
      <div className="home__wrapper">
        <main className="home__main">
          <h2>Welcome to the Dictionary!</h2>
          <p>You can do this, I believe in you.</p>
        </main>
        <nav>
          <Link to="/about">About</Link>
        </nav>
      </div>
    </Fragment>
  );
}

export default Home;