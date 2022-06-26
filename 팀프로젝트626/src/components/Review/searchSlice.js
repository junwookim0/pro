import { createSlice} from "@reduxjs/toolkit";

const initialState = {
    keyword : ''
}

const searchSlice = createSlice({
    name : 'search',
    initialState,
    reducers : {
        storeKeyword(state, action) {
            state.keyword = action.payload
        }
    }
})

export const { storeKeyword } =searchSlice.actions
export default searchSlice.reducer;