import React from "react";
import { Link } from 'react-router-dom';
import "./notFound.scss"
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
function NotFound() {

    return (
      <div  className="notFound">
        <div className="notFound__wrapper">

        <h1><SentimentVeryDissatisfiedIcon /> Not Found!</h1>
        <Link to="/">Go Home</Link>
         </div>
      </div>
    );
}
export default NotFound;