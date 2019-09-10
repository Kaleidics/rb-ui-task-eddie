import React, { Component } from "react";
import CardContainer from '../CardContainer/CardContainer';
import SearchBar from '../SearchBar/SearchBar';
import "./MainContainer.css";

export default class MainContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchString: "",
            candidateData: []
        };
    }

    componentDidMount() {
        fetch("/candidates.json")
            .then(response => {
                return response.json();
            })
            .then(candidates => {
                const candidateData = candidates.sort((a, b) => a.grade - b.grade);
                this.setState({
                    candidateData: candidateData
                });
            });
    }

    render() {
        console.log(this.state.searchString);
        console.log("maincontainer", this.state.candidateData);
        let candidateData = [...this.state.candidateData];

        if (this.state.searchString) {
            candidateData = candidateData.filter(
                candidate =>
                    candidate.first_name.toLowerCase().includes(this.state.searchString.toLowerCase()) ||
                    candidate.last_name.toLowerCase().includes(this.state.searchString.toLowerCase()) ||
                    candidate.grade.toString().includes(this.state.searchString.toLowerCase())
            );
        }

        return (
            <main className="main-container">
                <SearchBar onChange={searchString => this.setState({ searchString })} />
                <CardContainer candidateData={candidateData} />
            </main>
        );
    }
}
