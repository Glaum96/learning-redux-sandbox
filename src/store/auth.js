import { createSlice } from '@reduxjs/toolkit';


const initialAuthState = { isUserAuth: false };

const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
        login(state) {
            state.isUserAuth = true;
        },
        logout(state) {
            state.isUserAuth = false;
        }
    }
});

export const authActions = authSlice.actions;

export default authSlice.reducer;