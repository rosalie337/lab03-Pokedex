import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
    render() {
        return (
            <div className="header">
                Home Page
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/list">List</Link>
                </li>
                <li>
                    <Link to="/details">Details</Link>
                </li>
            </ul>
            </div>
        )
    }
}
