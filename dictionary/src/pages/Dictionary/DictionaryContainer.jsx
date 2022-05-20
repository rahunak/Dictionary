import React from "react";
import DictionarySearchPanel from "./dictionarySearchPanel/DictionarySearchPanel";
import ResultPage from "./ResultPage/ResultPage";

function DictionaryContainer() {


    return (
        <div>
            <DictionarySearchPanel />
            <ResultPage />
        </div>
    );



}

export default DictionaryContainer;