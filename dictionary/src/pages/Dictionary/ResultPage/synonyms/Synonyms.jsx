import React from "react";
import { v4 as uuidv4 } from "uuid";
import "./synonyms.scss";
import PropTypes from 'prop-types';

function Synonyms({ synonyms }) {
    return (<div className="synonyms">
        <h2 className="synonyms__title">Synonyms : </h2>
        {synonyms.map(el => {
            return (
                <div key={uuidv4()} className="synonyms__item">
                    <p >{el}</p>
                </div>
            );
        })}
    </div>);

}

Synonyms.propTypes = {
    synonyms: PropTypes.object.isRequired,
  };

export default Synonyms;