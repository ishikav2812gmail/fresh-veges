import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    id: "",
    name: "",
    email: "",
    password: "",
}

export const loginSlice = createSlice({
      
    name: "auth",
    initialState,
    reducers : {
        loginRedux: (state, action) => {
            //console.log(action.payload);
            state.id = action.payload.id
            state.name = action.payload.name
            state.email = action.payload.email
            state.password = action.payload.password
            //console.log(state.name);
            
        },
        logoutRedux : (state ,action) =>{
            state.id = ""
            state.name = ""
            state.email= ""
            state.password= ""

        },
    },
});

export const { loginRedux, logoutRedux } = loginSlice.actions

export default loginSlice.reducer;