import { configureStore } from '@reduxjs/toolkit'
import pokemonsSlice from './slices/pokemons'
import userNameSlice from './slices/userName'

export default configureStore({
  reducer: {
        userName: userNameSlice,
        pokemons: pokemonsSlice,
	}
})