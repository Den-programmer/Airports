import { configureStore, combineReducers } from "@reduxjs/toolkit"
import airportReducer from './slices/airportSlice'
import { airportAPI } from "../services/airportService"

const rootReducer = combineReducers({
    airport: airportReducer,
    [airportAPI.reducerPath]: airportAPI.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => {
            return getDefaultMiddleware().concat(airportAPI.middleware)
        } 
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']