import { configureStore, combineReducers } from "@reduxjs/toolkit"
import airportReducer from './slices/airportSlice'
import airportFiltersReducer from './slices/airportFiltersSlice'
import authReducer from './slices/authSlice'
import { airportAPI } from "../services/airportService"
import { authAPI } from "../services/authService"

const rootReducer = combineReducers({
    airport: airportReducer,
    airportFilters: airportFiltersReducer,
    auth: authReducer,
    [airportAPI.reducerPath]: airportAPI.reducer,
    [authAPI.reducerPath]: authAPI.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => {
            return getDefaultMiddleware().concat(airportAPI.middleware, authAPI.middleware)
        } 
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']