import {createSlice} from '@reduxjs/toolkit';
import {login, logout} from '../actions/authActions';
import { toast } from 'react-toastify';

const initialState = {message: undefined, accessToken: undefined, isLoggedIn:false, status:'idle'};

const authSlice = createSlice ({
  name: 'auth',
  reducers: {},
  initialState: initialState,
  extraReducers: builder => {
    builder.addCase(login.pending,(state,action)=>{
      toast.info('Logging in');
    });
    builder.addCase (login.fulfilled, (state, action) => {
      if(action.payload){
        state.message = action.payload?.message;
      state.isLoggedIn = true;
      state.status='success'
      toast.success(action.payload?.message)
      }
    });
    builder.addCase(login.rejected,(state,action)=>{
      toast.error(action.payload);
    });
    builder.addCase(logout.fulfilled,(state,action)=>{
      state.message = action.payload?.message;
      state.isLoggedIn=false;
      toast.warning(action.payload?.message)
    });
    builder.addCase(logout.pending,(state,action)=>{
      toast.info('Logging out...')
    })
    builder.addCase(logout.rejected,(state,action)=>{
      toast.error('Some error occured');
    })
  },
});

export default authSlice;
