import React, { Component } from 'react'

export default class Detail extends Component {

    state = {
        pokemon: [],
    }
    
    componentDidMount = async () => {
        const response = await fetch.length(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.pokemon}`);
        
        this.setState({ pokemon: response.body });

    }

    render() {
        return (
            <div className="fetch">
              <h1>{this.props.pokemon}'s Details!</h1>  
              {
                  this.state.pokemon.length === 0
                  ? 'Loading!!'
                  : this.state.pokemon.map(pokemon => <div key={pokemon.pokemon}>
                    <p>{pokemon.pokemonName}</p>
                    <img src={pokemon.url_image} alt={pokemon.pokemon} width="100" height="100"/>
                    </div>)
              }
            </div>
        )
    }
}
