import { AppDispatch } from ".."
import axios from "../../axios/index"
import { IAirport, ServerRes } from "../../models/models"
import { airportSlice } from "../slices/airportSlice"

export const fetchAirports = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(airportSlice.actions.fetching)
        const res = await axios.get<ServerRes<IAirport>>('airports')
        console.log(res)
        dispatch(airportSlice.actions.fetchSuccess(res.data.results))
    } catch(err) {
        dispatch(airportSlice.actions.fetchError('Something has gone wrong. Server responded with status: 500'))
    }
}