import React, { Component } from "react";
import './Card.css'

export default class Card extends Component {
    render() {
        let data = this.props.data;

        return (
            <div className="card">
                <div className="card-primary">
                    <h2 className="card-name">
                        <span className="card-name--first">{data.first_name}</span>
                        <span className="card-name--last">{data.last_name}</span>
                    </h2>
                    <div className="card-grade" style={{backgroundColor: data.grade === 1 ? "#311031" : data.grade === 2 ? "#ff6633" : "#922066"}}>{data.grade}</div>
                </div>
                <div className="card-secondary">
                    <p className="card-position">{data.last_position}</p>
                    <p className="card-company">{data.last_company}</p>
                </div>
            </div>
        );
    }
}
