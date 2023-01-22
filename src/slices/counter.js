import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: {
        value: 0
    },
    reducers: {
        getUserValue(state, action) {
            state.value = action.payload;
        }
    }
})

export const { getUserValue } = counterSlice.actions
export default counterSlice.reducer;