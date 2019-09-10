import React, { Component } from "react";
import "./SearchBar.css";

export default class SearchBar extends Component {
    render() {
        return (
            <form className="search-bar">
                <input
                    className="search-input"
                    type="search"
                    id="search"
                    name="search"
                    placeholder="Search candidates..."
                    onChange={e => this.props.onChange(e.target.value)}
                />
            </form>
        );
    }
}
