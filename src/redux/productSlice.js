import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
    name:'product',
    initialState:{
        title: "",
        description: "",
        price: "",
    },
    reducers:{
        updateProduct:(state,action) =>{
            const { title,description,price} = action.payload;
            state.title = title;
            state.description = description;
            state.price = price;
        },
    }

})

export const {updateProduct} = productSlice.actions

export default productSlice.reducer