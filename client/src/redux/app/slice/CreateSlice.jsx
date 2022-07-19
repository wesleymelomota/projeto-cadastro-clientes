import {createSlice} from '@reduxjs/toolkit'

export const CreateSlice = createSlice({
    name: "users",
    initialState: {
        user: {
            _id: "",
            nome: "",
            dataNascimento: "",
            cpf: "",
            email: "",
            profissao: "",
            endereco: "",
            msg: ""
        },
        msg: '',
        listUsers: []
    },
    reducers: {
        addUser(state, {payload}) {
            return {...state, user: payload}
        }
        
    }
})

export const { addUser } = CreateSlice.actions
export default CreateSlice.reducer