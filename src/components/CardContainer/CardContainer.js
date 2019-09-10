import React, { Component } from "react";
import Card from '../Card/Card';

import "./CardContainer.css";

export default class CandidateContainer extends Component {
    render() {
        let candidates = this.props.candidateData ? this.props.candidateData.map((candidate, index) => {
            return <Card index={index} data={candidate} key={candidate.id} /> 
        }) : null;

        return (
            <div className="card-container">
                {candidates}
            </div>
        )
    }
}