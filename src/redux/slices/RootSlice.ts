import React from "react";
import { createSlice } from "@reduxjs/toolkit";


const RootSlice= createSlice({
    name: 'root',
    initialState: {
        name:'Name',
        email: 'Email',
        phone_number: 'Phone Number',
        address: 'Address'
    },
    reducers: {
        choosename: (state, action) => { state.name = action.payload },
        chooseEmail: (state, action) => { state.email = action.payload },
        choosePhone: (state, action) => { state.phone_number = action.payload },
        chooseAddress:(state, action) => { state.address = action.payload }
    }
})

export const reducer = RootSlice.reducer;
export const { choosename, chooseEmail, chooseAddress, choosePhone } = RootSlice.actions;