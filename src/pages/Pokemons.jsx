import '../styles/pokemons.css';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Pokecard from '../components/Pokecard';


const Pokemons = () => {

    const userName = useSelector( state => state.userName );
    const pokemons = useSelector( state => state.pokemons.results );
    const [ offset, setOffset ] = useState(20);
    const [ limit, setLimit ] = useState(20);
    const [ side, setSide ] = useState('hide');

    const changeSide = () => {
        side === 'hide' ? setSide('show') : setSide('hide');
    }

    return (
        <div className='pokemonsBack'>
            <header>
                <p>Welcome <span>{userName}</span>, here you can find your favorite POKEMON!!!</p>    
                <i onClick={ changeSide } className='bx bx-chevron-left'></i>
                <aside className={`${ side }`}>
                    <i onClick={ changeSide } className='bx bx-x'></i>
                </aside>
            </header>
            <main>
                <div className='pokelist'>
                {
                    pokemons.map( e => (
                        <Pokecard key={ e.url } url={ e.url } />
                    ))
                }
                </div>
            </main>
            <footer>
                <span> all pokemons </span>
            </footer>
        </div>
    );
};

export default Pokemons;