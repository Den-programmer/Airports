import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react"
import { IUser } from "../models/models"

export const authAPI = createApi({
    reducerPath: 'authAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
    tagTypes: ['User'],
    endpoints: (build) => ({
        fetchUsers: build.query({
            query: () => ({
                url: '/users'
            }),
            providesTags: result => ['User']
        }),
        createUser: build.mutation({
            query: (user: IUser) => ({
                url: '/users',
                method: 'POST',
                body: user
            }),
            invalidatesTags: ['User']
        })
    })
})