import React, { Fragment } from "react";
import { useSelector, } from 'react-redux'
import { dataWord } from "../../../../redux/dictionaryReducer"
import "./meaningsStyle.scss"
import Paper from '@mui/material/Paper';
import Definition from "../definition/definition";
import Synonyms from "../synonyms/Synonyms";

function Meanings() {
    const { meanings } = useSelector(dataWord);
    return (
        <Fragment >
            {
                meanings.map(meaning => {
                    return (<div component={Paper} className="meanings" key={meaning.partOfSpeech}>
                        <div className="meaningWord__title">Part of speech: <h3 className="meaningWord__parthOfSpeech">{meaning.partOfSpeech}</h3></div>  
                        {Boolean(meaning.synonyms.length) && <Synonyms  synonyms={meaning.synonyms} />}
                        {Boolean(meaning.definitions.length) &&<Definition definitions={meaning.definitions} />}

                    </div>)
                })
            }

        </Fragment>
    );
}
export default Meanings;