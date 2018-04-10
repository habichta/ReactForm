import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {formGeneratorSelector} from "../../state/FormGenerator/form-generator-selectors";
import {testAction, testActionRequested} from "../../state/FormGenerator/form-generator-actions";
import Autosuggest from "../AutoSuggest/autosuggest";


class FormGeneratorContainer extends React.Component{
    componentDidMount() {
        this.props.testActionRequested('Test');
    }




    render(){

        return (
        <div>
            {this.props.test}
            <Autosuggest/>
        </div>
        );
    }



}


const mapStateToProps = (state) => ({

    test: formGeneratorSelector.testStringData(state)


});

const mapDispatchToProps = (dispatch) => {

    return bindActionCreators({testAction, testActionRequested},dispatch)

};



export default connect(mapStateToProps,mapDispatchToProps)(FormGeneratorContainer);