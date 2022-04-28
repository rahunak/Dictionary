import React, { Fragment } from "react";
import {Link} from "react-router-dom";
import "./dictionary.scss";
function DictionarySearchPanel() {
    return (
      <Fragment className="dictionary">
        <div className="dictionary__wrapper">
          <main className="dictionary__main">
          <h2>dictionary</h2>
          <form className="searchPanel" >
              <input type="text" className="dictionaty__input"/>
              <button type="submit" className="dictionaty__submit">Search</button>
          </form>
          
        </main>
        <nav>
          <Link to="/about">About</Link>
        </nav>
        </div>
        
      </Fragment>
    );
  }
  export default DictionarySearchPanel;