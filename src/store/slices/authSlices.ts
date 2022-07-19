import { createSlice } from '@reduxjs/toolkit';

type TState = {
    email: string | null,
    id: string | null,
    admins: string[]
}

const initialState: TState = {
    email: null,
    id: null,
    admins: ['nkrysyuk@inbox.ru', 'admin@inbox.ru']
};

const authUserSlices = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            state.email = action.payload.email;
            state.id = action.payload.id;
        },
        removeUser(state) {
            state.email = null;
            state.id = null;
        },
    },
});

export const { setUser, removeUser } = authUserSlices.actions;

export default authUserSlices.reducer;