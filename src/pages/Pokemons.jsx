import '../styles/pokemons.css';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Pokecard from '../components/Pokecard';
import { getPagesThunk, getTypesThunk } from '../store/slices/pokemons';


const Pokemons = () => {

    const dispatch = useDispatch();
    const userName = useSelector( state => state.userName );
    const pokemons = useSelector( state => state.pokemons );
    const [ limit, setLimit ] = useState(24);
    const [ side, setSide ] = useState('hide');

    const changeSide = () => {
        side === 'hide' ? setSide('show') : setSide('hide');
    }

    const changePage = ( url ) => {
        if (url) {
            dispatch( getPagesThunk(url) );
        }
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
                    pokemons.results?.map( e => (
                        <Pokecard key={ e.url } url={ e.url } />
                    ))
                }
                </div>
            </main>
            <footer>
                <i onClick={ () => changePage( pokemons.previous )} className='bx bx-chevrons-left'></i>
                <span> all pokemons </span>
                <i onClick={ () => changePage( pokemons.next )} className='bx bx-chevrons-right' ></i>
            </footer>
        </div>
    );
};

export default Pokemons;