import React, { Component } from 'react'
import DropDown from './DropDown'
import Search from './Search'

export default class Nav extends Component {
    render() {
        return (
            <div>
                <Search />
                <DropDown />
            </div>
        )
    }
}
