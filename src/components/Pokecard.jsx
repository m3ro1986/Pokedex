import '../styles/pokecard.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Pokecard = ( { url } ) => {

    const [ pokemon, setPokemon ] = useState({});

    useEffect ( () => {
        axios.get(url).then( res => setPokemon( res.data ))
    },[])

    return (
        <div className='pokecardBack'>
            {pokemon.name}
        </div>
    );
};

export default Pokecard;