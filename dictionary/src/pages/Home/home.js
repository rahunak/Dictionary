import React, { Fragment } from "react";
import './home.scss';
function Home() {
  return (
    <Fragment >
      <div className="home__wrapper">
        <main className="home__main">
          <h2>Welcome to the Dictionary!</h2>
          <p>Дизайна нет поэтому я его слепила из того что было</p>
        </main>
      </div>
    </Fragment>
  );
}

export default Home;