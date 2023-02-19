import '../styles/login.css'
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons, getPokemonsThunk } from '../store/slices/pokemons';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { getUserName } from '../store/slices/userName';

const Login = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const pokemons = useSelector( state => state.pokemons.results );
    const [loading, setLoading] = useState('')
    const [text, setText] = useState('');
    const [name, setName] = useState('');
    const [imgGif, setImgGif] = useState('normal');
    const [back, setBack] = useState('');
    const [num, setNum] = useState(() => Math.floor(Math.random() * 500));
    const [pushNormal, setPushNormal] = useState('pushNormal');
    const [pushShiny, setPushShiny] = useState('');


    useEffect(() => {
        const timeout = setTimeout(() => {
            setText('Hello trainer!!! Give me your name to start.'.slice(0, text.length + 1))
        }, 50)
        
        return () => clearTimeout(timeout)
    }, [text]);

    useEffect( () => {
        dispatch( getPokemonsThunk(0, 500) )
    }, [])

    const changeImgGif = (type) => {
        setImgGif(type)
        if (type === 'normal') {
            setPushNormal('pushNormal')
            setPushShiny('')
        } else {
            setPushNormal('')
            setPushShiny('pushShiny')
        }
    }

    const changeBack = (back) => {
        setBack(back)
    }

    const changePokemon = (next) => {
        if (num > 1 && num < 500) {
            next === 'next' ? setNum(num + 1) : setNum(num - 1)
        } else {
            if (num === 1) {
                next === 'next' ? setNum(num + 1) : setNum(num)
            } else {
                next === 'next' ? setNum(num) : setNum(num - 1)
            }
        }
    }

    const goPokemons = () => {

        if (name !== '') {
            setLoading('loading')
            dispatch( getUserName(name) );
            dispatch( getPokemonsThunk(24) )   
            setTimeout(() => {
                navigate('/pokemons');
                setLoading('')
            }, 2000)
        } else {
            alert('give me a name')
        }
    }

    return (
        <div className='loginBack'>
            <main>
                <figure className='pokedexBox'>
                    <span className={`biglight ${loading}`} />
                    <p> {text} </p>
                    <img src={`/animated/${imgGif}/${back}${num}.gif`} />
                    <p> {pokemons?.[num - 1]?.name} # {num}</p>
                    <input
                        type="text"
                        placeholder='your name'
                        value={name}
                        onChange={e => getUserName(setName(e.target.value))}
                    />
                    <div className='controlBox'>
                        <div className='arrows'>
                            <button onClick={() => changePokemon('')}> <i className='bx bxs-left-arrow' ></i></button>
                            <button onClick={() => changePokemon('next')}> <i className='bx bxs-right-arrow' ></i></button>
                            <button onClick={() => changeBack('back/')}> <i className='bx bxs-up-arrow'></i> </button>
                            <button onClick={() => changeBack('')}> <i className='bx bxs-down-arrow' ></i> </button>
                        </div>
                        <div className='typeGif'>
                            <button onClick={() => changeImgGif('normal')} className={`${pushNormal}`}>normal</button>
                            <button onClick={() => setNum(Math.floor(Math.random() * 500))}>random</button>
                            <button onClick={() => changeImgGif('shiny')} className={`${pushShiny}`}>shiny</button>
                        </div>
                        <div className='checks'>
                            <button onClick={() => setName('')}> <i className='bx bx-x'></i> </button>
                            <button onClick={goPokemons}> <i className='bx bx-check'></i> </button>
                        </div>
                    </div>
                </figure>
            </main>
        </div>
    );
};

export default Login;