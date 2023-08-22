import { PayloadAction, createSlice } from "@reduxjs/toolkit"

const ACCESS_KEY = 'dc-access'
const USERNAME_KEY = 'dc-username'

interface AuthState {
    access: string
    username: string
    isAuth: boolean
    isRegister: boolean
}

interface ILoginPayload {
    access: string
    username: string
}

const initialState: AuthState = {
    access: localStorage.getItem(ACCESS_KEY) ?? '',
    username: localStorage.getItem(USERNAME_KEY) ?? '',
    isAuth: Boolean(localStorage.getItem(ACCESS_KEY)),
    isRegister: true
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setIsRegisterStatus(state, action: PayloadAction<boolean>) {
            state.isRegister = action.payload
        },
        login(state, action: PayloadAction<ILoginPayload>) {
            state.isAuth = true
            state.access = action.payload.access
            state.username = action.payload.username

            localStorage.setItem(ACCESS_KEY, action.payload.access)
            localStorage.setItem(USERNAME_KEY, action.payload.username)
        },
        logout(state) {
            state.isAuth = false
            state.access = ''
            state.username = ''

            localStorage.removeItem(ACCESS_KEY)
            localStorage.removeItem(USERNAME_KEY)
        }
    }
})

export default authSlice.reducer