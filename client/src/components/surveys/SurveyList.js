import React from 'react';
import {connect} from 'react-redux';
import {fetchSurveys} from '../../actions/index.js';
import { Component } from 'react';

class SurveyList extends Component {
    componentDidMount(){
    this.props.fetchSurveys();
  }
   renderSurveys(){
     return this.props.surveys.reverse().map(survey => {
       return(
         <div className="card gray darken-4" key={survey._id}>
           <div className="card-content text-white">
            <span className="card-content"></span>
            <p>
             {survey.body}
            </p>
            <p className="right">
              Sent On: {new Date(survey.dayeSent).toLocaleDateString()}
            </p>
           </div>
           <div className="card-action">
             <a>Yes:{survey.yes} </a>
             <a>No:{survey.no} </a>
           </div>
         </div>
       );
     });
   }

  render() {
    return (
      <div>
       {this.renderSurveys()}
      </div>
    );
  }
}

function mapStateToProps (state) {
  return { surveys: state.surveys};
}

export default connect(mapStateToProps,{fetchSurveys})(SurveyList);
