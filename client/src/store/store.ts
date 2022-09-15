import { configureStore } from "@reduxjs/toolkit";


export const store = configureStore({

})

export type TypeRootState = ReturnType<typeof store.getState>