import React, { Component } from 'react'

export default class Search extends Component {

    render() {
        return (
            <div className="search">
                <form onSubmit={this.props.handleSubmit}>
                    <input type="text" placeholder="Search by pokemon name..." onChange={this.props.handleChange} />
                    <button>Search</button>
                </form>
            </div>
        )
    }
}
