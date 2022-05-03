import React, { Fragment } from "react";
import { Link } from 'react-router-dom';
function NotFound(props) {

    return (
      <Fragment >
        <div className="notFound">

        <h1>404 - Not Found!</h1>
        <Link to="/">Go Home</Link>
         </div>
      </Fragment>
    );
}
export default NotFound;