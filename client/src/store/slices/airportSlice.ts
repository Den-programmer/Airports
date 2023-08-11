import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { IAirport } from "../../models/models"

interface AirportState {
    loading: Boolean
    error: string
    airports: IAirport[]
}

const initialState: AirportState = {
    loading: false,
    error: '',
    airports: []
}

export const airportSlice = createSlice({
    name: 'airport',
    initialState,
    reducers: {
        fetching(state) {   
            state.loading = true
        },
        fetchSuccess(state, action: PayloadAction<IAirport[]>) {
            state.loading = false
            state.airports = action.payload
        },
        fetchError(state, action: PayloadAction<string>) {
            state.loading = false
            state.error = action.payload
        }
    }
})

export default airportSlice.reducer