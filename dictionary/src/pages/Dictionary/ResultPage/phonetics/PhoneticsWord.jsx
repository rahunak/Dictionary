import React, { Fragment } from "react";
import { useSelector, } from 'react-redux'
import { dataWord } from "../../../../redux/dictionaryReducer"
import "./PhoneticsStyle.scss"
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

function PhoneticsWord() {
    const { phonetics, phonetic } = useSelector(dataWord);
    function playSound(event, el) {
        new Audio(el.audio).play();
    }
    return (
        <Fragment >
            <figure className="phoneticBlock">
                <figcaption className="phoneticBlock__title">Talk like {phonetic}:</figcaption>
                {
                    phonetics.map((el) => {
                        if (el.audio.length === 0) { return null; }
                        else
                            return (
                                <PlayCircleOutlineIcon
                                    className="phoneticBlock__btn_play"
                                    fontSize="large"
                                    key={el.audio.toString() + el.sourceUrl.toString()}
                                    onClick={(event) => playSound(event, el)}
                                />
                            )
                    })
                }


            </figure>

        </Fragment>
    );
}
export default PhoneticsWord;