import {configureStore} from '@reduxjs/toolkit'
import Slice from './slice/CreateSlice'

const store = configureStore({
    reducer: {
        users: Slice
    }
})

export default store