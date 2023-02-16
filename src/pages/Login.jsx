import '../styles/login.css'
import React, { useEffect, useState } from 'react';

const Login = () => {

    const [ text, setText ] = useState('');
    const [ imgGif, setImgGif ] = useState('normal');
    const [ back, setBack ] = useState('');
    const [ num, setNum ] = useState( () => Math.floor( Math.random() * 200 ))

    useEffect(() => {
        const timeout = setTimeout(() => {
            setText('Hello trainer!!! Give me your name to start.'.slice(0, text.length + 1))
        }, 50)

        return () => clearTimeout(timeout)
    }, [text]);

    const changeImgGif = (type) => {
        setImgGif(type)
    }

    const changeBack = ( back ) => {
        setBack( back )
    }

    const changePokemon = ( next ) => {
        next === 'next' ? setNum( num + 1 ) : setNum( num - 1 )
    }

    return (
        <div className='loginBack'>
            <main>
                <figure className='pokedexBox'>
                    <span className='biglight' />
                    <p> {text} </p>
                    <img src={`/animated/${imgGif}/${back}${num}.gif`} />
                    <p> hello </p>
                    <input type="text" placeholder='your name' />
                    <div className='controlBox'>
                        <div className='arrows'>
                            <button onClick={ () => changePokemon('')}> <i className='bx bxs-left-arrow' ></i></button>
                            <button onClick={ () => changePokemon('next')}> <i className='bx bxs-right-arrow' ></i></button>
                            <button onClick={() => changeBack('back/')}> <i className='bx bxs-up-arrow'></i> </button>
                            <button onClick={() => changeBack('')}> <i className='bx bxs-down-arrow' ></i> </button>
                        </div>
                        <div className='typeGif'>
                            <button onClick={() => changeImgGif('normal')}>normal</button>
                            <button onClick={() => setNum( Math.floor( Math.random() * 200 ))}>random</button>
                            <button onClick={() => changeImgGif('shiny')}>shiny</button>
                        </div>
                        <div className='checks'>
                            <button> x </button>
                            <button> go </button>
                        </div>
                    </div>
                </figure>
            </main>
        </div>
    );
};

export default Login;