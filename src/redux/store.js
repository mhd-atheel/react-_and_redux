import {configureStore} from '@reduxjs/toolkit'
import counterReducer from './slice'
import productReducer from './productSlice';
export default configureStore({
    reducer: {
        counter: counterReducer,
        product: productReducer,
    }
});

