import React from "react";
import { connect } from "react-redux";
import DictionarySearchPanel from "./DictionarySearchPanel";
import ResultPage from "./ResultPage";

class DictionaryContainer extends React.Component {


    render() {
        return (
            <div>
                <DictionarySearchPanel/>
                <ResultPage  data={this.data}/>
            </div>
        );
    }


}


let mapStateToProps = (state) => {
    console.log("state in Container",state.dictionary.dataWord)
    return {
        data:state.dictionary.dataWord
    }
}


export default connect(mapStateToProps, {
    
})(DictionaryContainer);