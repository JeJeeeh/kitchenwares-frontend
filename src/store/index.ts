import {configureStore} from "@reduxjs/toolkit";
import authSlice from "../features/authSlice.ts";
import consentModalSlice from "../features/consentModalSlice.ts";

const store = configureStore({
    reducer: {
        auth: authSlice,
        consentModal: consentModalSlice,
    }
})

export type RootState = ReturnType<typeof store.getState>;

export default store;