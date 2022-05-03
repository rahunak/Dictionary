import React, { Fragment } from "react";
import { useSelector, } from 'react-redux'
import { dataWord,errorWithSearch } from "../../../redux/dictionaryReducer"
import Meanings from "../meaningsWord/meaningsWord";
import PhoneticsWord from "../phonetics/PhoneticsWord";
import NotFound from "../../../components/NotFound/NotFound";

function ResultPage() {
  const data = useSelector(dataWord);
  const error = useSelector(errorWithSearch);
  if( error  ){
    return <NotFound />
  }else if(data.length===0){
    return null;
  } else
    return (
      <Fragment >
        <div className="resultPage">
          <div className="resultPage__wrapper">
                        <h1 className="word">{data.word}</h1>
                <PhoneticsWord />
                <Meanings />
            <div className="readMore">
              {data.sourceUrls.length>0 && data.sourceUrls.map(el=>{
            return(<div  key={el.toString()}>
              Read more, click <a href={el} rel="noopener noreferrer" target="_blank">here</a>
              </div>)
          })}
            </div>
          
        </div>
          </div>

      </Fragment>
    );
}
export default ResultPage;