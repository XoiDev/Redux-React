import { createSlice } from "@reduxjs/toolkit";

const globalSlice = createSlice({
    name: "global", 
    initialState: {
        darkMode: false,
        SideBarToggle: true,
    },
    reducers: {
        toggleDarkMode : (state, {payload})=>{
            return{
                darkMode: payload,
            }
        },
        toggleSideBar: (state, {payload})=>{
            return{
                SideBarToggle: payload
            }
        }
        
    }
}) 

export const {toggleDarkMode, toggleSideBar} = globalSlice.actions;

export default globalSlice.reducer