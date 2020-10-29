import React, { Component } from 'react'

export default class Search extends Component {
    render() {
        return (
            <div>
                <form onsubmit={this.props.handleSearch}>
                    <input value={this.props.searchQuery} onChange={this.props.handleChange} />
                    <button>Search</button>
                </form>
            </div>
        )
    }
}
