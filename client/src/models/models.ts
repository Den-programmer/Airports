export interface IAirport {
    id: number
    name: string
    ident: string
    local_code: string
    region: string
    type: string
    country: string
}

export interface ServerRes<T> {
    count: number
    next: number
    previous: number
    results: T[]
}

export interface IPost {
    id?: number
    title: string
    body: string
}