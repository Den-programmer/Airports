import { PayloadAction, createSlice } from "@reduxjs/toolkit"

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
   access: '', 
   username: '',
   isAuth: false,
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
        },
        logout(state) {
            state.isAuth = false
            state.access = ''
            state.username = ''
        }
    }
})

export default authSlice.reducer