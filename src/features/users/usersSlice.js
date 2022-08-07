import { createSlice} from '@reduxjs/toolkit'

const initialState = [
    {id: '0', name: 'Henry the 5th'},
    {id: '1', name: 'Kenneth I'},
    {id: '2', name: 'Constantine II'},
    {id: '3', name: 'George VI'},
    {id: '4', name: 'Frederick, Prince of Wales'}
]

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
})

export const selectAllUsers = (state) => state.users

export default userSlice.reducer