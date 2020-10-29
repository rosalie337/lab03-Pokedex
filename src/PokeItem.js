import React, { Component } from 'react'

export default class PokeItem extends Component {
    render() {
        return (
            <li className="poke-description">
                <div>
                    <img src={this.props.pokemon.url_image} alt={this.props.pokemon.pokemon}/>
                    <p>{this.props.pokemon.name}</p>
                    <p>{this.props.pokemon.type}</p>
                    <p>{this.props.pokemon.attack}</p>
                    <p>{this.props.pokemon.defense}</p>
                </div>
            </li>
        )
    }
}
