import '../styles/pokemons.css';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Pokecard from '../components/Pokecard';


const Pokemons = () => {

    const userName = useSelector( state => state.userName );
    const pokemons = useSelector( state => state.pokemons.results );
    const [ offset, setOffset ] = useState(20);
    const [ limit, setLimit ] = useState(20);


    return (
        <div className='pokemonsBack'>
            <header>
                <p>Welcome <span>{userName}</span>, here you can find your favorite POKEMON!!!</p>    
                <i className='bx bx-chevron-left'></i>
            </header>
            <main>
                {
                    pokemons.map( e => (
                        <Pokecard key={ e.url } url={ e.url } />
                    ))
                }
            </main>

        </div>
    );
};

export default Pokemons;