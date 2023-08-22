export interface IAirport {
    // Main
    id: number
    name: string
    ident: string
    local_code: string
    region: string
    type: string
    country: string
    // Details
    continent: string
    coordinates: string
    elevation_ft: string
    gps_code: string
    municipality: string
}

export interface IUser {
    access: string
    username: string
    password: string
}