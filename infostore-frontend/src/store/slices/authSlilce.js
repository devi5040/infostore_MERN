import {createSlice} from '@reduxjs/toolkit';
import {login} from '../actions/authActions';

const initialState = {message: undefined, accessToken: undefined, isLoggedIn:false, status:'idle'};

const authSlice = createSlice ({
  name: 'auth',
  reducers: {},
  initialState: initialState,
  extraReducers: builder => {
    builder.addCase(login.pending,(state,action)=>{
      
    })
    builder.addCase (login.fulfilled, (state, action) => {
      state.message = action.payload?.message;
      state.isLoggedIn = true;
    });
  },
});

export const authActions = authSlice.actions;
export default authSlice;
