import React, { Component } from "react";
import Card from '../Card/Card';

import "./CardContainer.css";

export default class CandidateContainer extends Component {
    render() {
        let candidates = this.props.candidateData ? this.props.candidateData.map((candidate, index) => {
            return <Card index={index} data={candidate} key={candidate.id} /> 
        }) : null;

        console.log("cardcontainer", this.props.candidateData, "here", candidates);
        return (
            <div className="card-container">
                {candidates}
            </div>
        )
    }
}