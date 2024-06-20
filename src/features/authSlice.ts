import {User} from "../dto/auth/user.ts";
import {createSlice} from "@reduxjs/toolkit";

interface InitialState {
    user?: User | null,
    accessToken: string | null
}

const initialState: InitialState = {
    user: null,
    accessToken: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            const {user, accessToken} = action.payload;
            state.user = user;
            state.accessToken = accessToken;
        },
        clearCredentials: (state) => {
            state.user = null;
            state.accessToken = null;
        }
    }
})

export const authSliceActions = authSlice.actions
export default authSlice.reducer