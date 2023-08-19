import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { IAirport } from "../../models/models"

interface AirportState {
    airports: IAirport[]
    count: number
    airportsPortion: number
    page: number
    searchTerm: string
    currentType: string
    currentRegion: string
    currentCountry: string
}

const initialState: AirportState = {
    airports: [],
    count: 0,
    airportsPortion: 10,
    page: 1,
    searchTerm: '',
    currentType: '',
    currentRegion: '',
    currentCountry: ''
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
        },
        setSearchTerm(state, action: PayloadAction<string>) {
            state.searchTerm = action.payload
        },
        setCurrentType(state, action: PayloadAction<string>) {
            state.currentType = action.payload === 'Type:' ? '' : action.payload
        },
        setCurrentRegion(state, action: PayloadAction<string>) {
            state.currentRegion = action.payload === 'Region:' ? '' : action.payload
        },
        setCurrentCountry(state, action: PayloadAction<string>) {
            debugger
            state.currentCountry = action.payload === 'Country:' ? '' : action.payload
        }  
    }
})

export default airportSlice.reducer