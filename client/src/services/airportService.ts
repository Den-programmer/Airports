import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react"
import { IAirport } from "../models/models"

interface IAirportsParams {
    page: number
    limit: number
    term: string
}

interface IAirportsCount {
    count: number
}

export const airportAPI = createApi({
    reducerPath: 'airportAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
    tagTypes: ['Airport', 'AirportsCount'],
    endpoints: (build) => ({
        fetchAllAirports: build.query<IAirport[], IAirportsParams>({
            query: (params: IAirportsParams) => ({
                url: '/airports',
                params: {
                    _page: params.page,
                    _limit: params.limit,
                    q: params.term
                }
            }),
            providesTags: result => ['Airport']
        }),
        fetchAirportsCount: build.query<IAirportsCount, string>({
            query: () => ({
                url: '/airportsCount'
            }),
            providesTags: result => ['AirportsCount']
        })
    })
})