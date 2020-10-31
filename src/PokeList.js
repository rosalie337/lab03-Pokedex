import React, { Component } from 'react';
import fetch from 'superagent';
import PokeItem from './PokeItem.js';
import Search from './Search.js'

export default class PokeList extends Component {
    state = {
        pokemon: [],
        pokemonName: 'Jiggly',
    }
    componentDidMount = async () => {
        await this.fetchPokeItem();
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        await this.fetchPokeItem()
    }
    
    handleChange = (e) => {
        this.setState({pokemonName: e.target.value })
        console.log(this.state.pokemonName);
    }
    
    fetchPokeItem = async () => {
        const response = await fetch.get (`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.pokemonName}`);
                
        this.setState({pokemon: response.body.results});
    }
    
    render() {
        return (
            <div>
            < Search onChange={this.handleChange} onSubmit={this.handleSubmit}/>
                {
                this.state.pokemon.length === 0
                ? 'loading!'
                : this.state.pokemon.map(pokemon => <PokeItem image={pokemon.url_image} name={pokemon.pokemon} type={pokemon.type_1} attack={pokemon.attack} defense={pokemon.defense} />)
                }
            </div>
        )
    }
}
