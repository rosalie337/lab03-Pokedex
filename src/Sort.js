import React, { Component } from 'react';
import PokeList from './PokeList.js';
import DropDown from './DropDown.js';

export default class Sort extends Component {
    state = {
        filter: ''
    }
    handleChange = (e) => {
        this.state({
            filter: e.target.value
        });
    }

    render() {
        return (
            <div>
                <PokeList filter={this.state.filter} />
                <DropDown handleChange={this.handleChange} />
            </div>
        )
    }
}
