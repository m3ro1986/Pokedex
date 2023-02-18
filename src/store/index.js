import { configureStore } from '@reduxjs/toolkit'
import loadingSlice from './slices/loading'
import pokemonsSlice from './slices/pokemons'
import userNameSlice from './slices/userName'

export default configureStore({
  reducer: {
        userName: userNameSlice,
        pokemons: pokemonsSlice,
        loading: loadingSlice,
	}
})