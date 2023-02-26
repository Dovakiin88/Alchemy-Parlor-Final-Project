import React from "react";
import { createSlice } from "@reduxjs/toolkit";


const RootSlice= createSlice({
    name: 'root',
    initialState: {
        name:'Name',
        class: 'Class of Potion',
        description: 'Description',
    },
    reducers: {
        choosePname: (state, action) => { state.name = action.payload },
        choosePclass: (state, action) => { state.class = action.payload },
        choosePdescription: (state, action) => { state.description = action.payload }
    }
})

export const reducer = RootSlice.reducer;
export const {  choosePname, choosePclass, choosePdescription } = RootSlice.actions;