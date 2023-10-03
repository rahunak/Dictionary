import React, { Fragment } from "react";
import "./home.scss";
function Home() {
  return (
    <Fragment>
      <div className="home__wrapper">
        <main className="home__main">
          <h2>Welcome to Free Dictionary API!</h2>
          <p>
            A dictionary API is a digital service that provides information
            about words and terms.
            <br /> It offers definitions, pronunciations, synonyms, antonyms,
            translations, and more.
            <br /> This API is valuable for various applications, from language
            learning to content enrichment, enabling users to access precise
            language information efficiently.
            <br />
            Developers can integrate it into websites, apps, and other
            platforms, enhancing user experiences and communication.
          </p>
        </main>
      </div>
    </Fragment>
  );
}

export default Home;
