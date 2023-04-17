import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
const initialState = {
    tab: "drive",
}

export const tabSlice = createSlice({
    name: 'tab',
    initialState,
    reducers: {
        setTab(state, actions: PayloadAction<string>) {
            state.tab = actions.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { setTab } = tabSlice.actions

export default tabSlice.reducer