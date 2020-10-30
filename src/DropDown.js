import React, { Component } from 'react'

export default class DropDown extends Component {
    render() {
        return (
            <DropDown onChange={this.props.handleChange}>
                <DropDown.Toggle>
                    Sort
                </DropDown.Toggle>
            <DropDown.Menu>
                <DropDown.Item href="#/action-1">Sort Option-1</DropDown.Item>
                <DropDown.Item href="#/action-2">Sort Option-2</DropDown.Item>
                <DropDown.Item href="#/action-3">Sort Option-3</DropDown.Item>
                <DropDown.Item href="#/action-4">Sort Option-4</DropDown.Item>
            </DropDown.Menu>
            </DropDown>
        )
    }
}
