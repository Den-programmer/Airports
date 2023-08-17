import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { IAirport } from "../../models/models"

interface AirportState {
    airports: IAirport[]
    count: number
    airportsPortion: number
    page: number
}

const initialState: AirportState = {
    airports: [],
    count: 0,
    airportsPortion: 10,
    page: 1
}

export const airportSlice = createSlice({
    name: 'airport',
    initialState,
    reducers: {
        setAirports(state, action: PayloadAction<IAirport[]>) {
            state.airports = action.payload
        },
        setAirportsCount(state, action: PayloadAction<number>) {
            state.count = action.payload
        },
        setSelectedPage(state, action: PayloadAction<number>) {
            state.page = action.payload
        }   
    }
})

export default airportSlice.reducer