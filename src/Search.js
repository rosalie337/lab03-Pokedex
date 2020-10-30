import React, { Component } from 'react'

export default class Search extends Component {

    state = {
        input: ""
    }

    handleTyping = (e) => {
        this.setState({input: e.target.value})
        let text = e.target.value;
            text = text.toLowerCase()
            .split(' ')
            .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
            .join(' ')
        this.props.filterWorker(text)
    }

    render() {
        return (
            <div className="search">
                <form onSubmit={this.props.handleSearch}>
                    <input type="text" placeholder="Search by pokemon name..." value={this.props.searchQuery} onChange={this.props.handleChange} />
                    <button>Search</button>
                </form>
            </div>
        )
    }
}
