import { configureStore, combineReducers } from "@reduxjs/toolkit"
import airportReducer from './slices/airportSlice'
import { postAPI } from "../services/postService"

const rootReducer = combineReducers({
    airport: airportReducer,
    [postAPI.reducerPath]: postAPI.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => {
            return getDefaultMiddleware().concat(postAPI.middleware)
        } 
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']