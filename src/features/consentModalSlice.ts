import {createSlice} from "@reduxjs/toolkit";

interface InitialState {
    open: boolean
}

const initialState: InitialState = {
    open: false,
}

const consentModalSlice = createSlice({
    name: "consentModal",
    initialState,
    reducers: {
        open: (state) => {
            state.open = true;
        },
        close: (state) => {
            state.open = false;
        }
    }
})

export const consentModalSliceActions = consentModalSlice.actions
export default consentModalSlice.reducer