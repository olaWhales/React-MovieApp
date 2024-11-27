import { configureStore } from "@reduxjs/toolkit";
import counterReducer  from "../feature/counter/counterSlice";
import { Movie_API } from "../service/movieApi";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
    reducer:{
        [Movie_API.reducerPath] : Movie_API.reducer
        // counter : counterReducer
    },
    middleware : (getDefaultMiddleware)=>{
       return  getDefaultMiddleware().concat(Movie_API.middleware)
    }
});
setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
