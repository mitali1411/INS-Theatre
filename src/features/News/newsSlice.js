import { createSlice } from "@reduxjs/toolkit";
// import { fetchNews } from "./NewsService";

const newsSlice = createSlice({
    name: 'news',
    initialState: {
        // Newss: [
        //     {id: 1, title: 'Title', desc: 'The Description'}
        // ],
        // news: null,
        // isLoading: false,
        // isError: false,
        // isSuccess: false
        value: 0
    },
    reducers: {
        increment: (state) => { state.value += 1 },
        decrement: (state) => { state.value -= 1 }
    },
    // extraReducers: (builder) => {
    //     builder.addCase
    // }
})
export const { increment, decrement } = newsSlice.actions;
export default newsSlice.reducer

// Fetch All News
// export const fetchAllNews = createAsyncThunk('/FETCH/ALL', async() => {
//     try {
//         return await fetchNews();
//     } catch (error) {
//         console.log(error)
//     }
// })