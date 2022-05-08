import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    store: []
}

export const plantsReducer = createSlice({
    name: 'plantsReducer',
    initialState,
    reducers: {

        set_items: (state, action) => {
            state.store = action.payload
        }

    },
})

// Action creators are generated for each case reducer function
export const {set_items} = plantsReducer.actions

export default plantsReducer.reducer