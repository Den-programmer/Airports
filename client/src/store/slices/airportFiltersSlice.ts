import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface AirportFiltersState {
    types: string[]
    countries: string[]
    regions: string[]
}

const initialState: AirportFiltersState = {
    types: [],
    countries: [],
    regions: []
}

export const airportFiltersSlice = createSlice({
    name: 'airportFilters',
    initialState,
    reducers: {
        setTypes(state, action: PayloadAction<string[]>) {
            state.types = action.payload
        },
        setCountries(state, action: PayloadAction<string[]>) {
            state.countries = action.payload
        },
        setRegions(state, action: PayloadAction<string[]>) {
            state.regions = action.payload
        }
    }
})

export default airportFiltersSlice.reducer
