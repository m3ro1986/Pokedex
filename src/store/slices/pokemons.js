import { createSlice } from '@reduxjs/toolkit';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const pokemonsSlice = createSlice({
    name: 'pokemons',
    initialState: [],
    reducers: {
        getPokemons: ( state, action ) => {
            const pokemons = action.payload;
            return pokemons;
        }
    }
})

export const { getPokemons } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;