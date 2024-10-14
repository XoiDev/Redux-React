import { configureStore, createSlice } from "@reduxjs/toolkit"; 


const counterSlice = createSlice({
    name: "counter",
    initialState : {
        count : 1,
    },
    reducers: {
        // increment: (state) => ({
        //     ...state,
        //    count: state.count + 1  // Cần phải gán lại giá trị cho state.value
        // }),
        // trong redux toolkit không cần dùng spread operator vì có thư viện immer hộ trợ shallow coppy sẵn
        increment: (state) => {
            // ...state
            state.count += 1;
         },
        decrement: (state) => ({
            // ...state,
            count: state.count - 1  
        }),
        incrementByValue: (state, action) => {
            return {
            // ...state,
            count: state.count + action.payload 
        }}
    }
}
)



export const {increment, decrement, incrementByValue} = counterSlice.actions

export default counterSlice.reducer;