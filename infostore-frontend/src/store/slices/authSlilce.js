import {createSlice} from '@reduxjs/toolkit';
import {login, logout, receiveOtp, register} from '../actions/authActions';
import { toast } from 'react-toastify';

const initialState = {message: undefined, accessToken: undefined, isLoggedIn:false, status:'idle',expireTime:null};

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
      state.expireTime = action.payload?.expireTime
      toast.success(action.payload?.message)
      }
    });
    builder.addCase(login.rejected,(state,action)=>{
      toast.error(action?.payload?.message);
    });
    builder.addCase(logout.fulfilled,(state,action)=>{
      state.message = action.payload?.message;
      state.isLoggedIn=false;
      toast.warning(action.payload?.message)
    });
    builder.addCase(logout.rejected,(state,action)=>{
      toast.error(action?.payload?.message);
    })
    builder.addCase(register.fulfilled,(state,action)=>{
      toast.success(action.payload?.message)
    })
    builder.addCase(register.rejected,(state,action)=>{
      toast.error(action?.payload?.message)
    })
    builder.addCase(receiveOtp.fulfilled,(state,action)=>{
      toast.success('OTP sent successfully')
    })
    builder.addCase(receiveOtp.rejected,(state,action)=>{
      toast.success(action?.payload?.message)
    })
  },
});

export default authSlice;
