import { createSlice } from '@reduxjs/toolkit';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const loadingSlice = createSlice({
    name: 'loading',
    initialState: '',
    reducers: {
        setLoading: ( state, action ) => {
            const loading = action.payload;
            return loading;
        }
    }
})

export const { setLoading } = loadingSlice.actions;

export default loadingSlice.reducer;