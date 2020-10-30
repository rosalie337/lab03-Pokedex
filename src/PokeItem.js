import React, { Component } from 'react'

export default class PokeItem extends Component {
    render() {
        return (
            <li className="poke-description">
                <div>
                    <img src={this.props.image} alt={this.props.pokemon}/>
                    <p>{this.props.name}</p>
                    <p>{this.props.type}</p>
                    <p>{this.props.attack}</p>
                    <p>{this.props.defense}</p>
                </div>
            </li>
        )
    }
}
