import { createSlice } from "@reduxjs/toolkit"
import { IBoard } from "./gtd.types"

const initialState:IBoard[] = [];

export const gtdSlice = createSlice({
    name: 'gtd',
    initialState,
    reducers: {
        createNewBoard: (state, action) => {
            
        }
    }
})