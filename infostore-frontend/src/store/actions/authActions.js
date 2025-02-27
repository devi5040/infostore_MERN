import {createAsyncThunk, isRejectedWithValue} from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

const BASE_URL = 'http://localhost:8080/auth';

export const login = createAsyncThunk (
  'auth/login',
  async ({email, password},{rejectWithValue}) => {
    const body = {email, password};
    const URL = `${BASE_URL}/login`;
    try {
      const response = await axios.post (URL, body, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials:true
      });
      return response?.data;
    } catch (error) {
      const errorMessage = error?.response?.data?.message||'Some error has been occured'
      const statusCode = error?.response?.data?.status||500
      return rejectWithValue({message:errorMessage,status:statusCode})
    }
  }
);

export const register = createAsyncThunk('auth/register',async({name,email,password,mobileNumber,height, weight,age,bloodGroup},{rejectWithValue})=>{
  const URL = BASE_URL+'/register';
  try {
    const response = await axios.post(URL,{name,email,password,mobileNumber,height,weight,age, bloodGroup},{withCredentials:true});
    return response.data;
  } catch (error) {
    const errorMessage = error?.response?.data?.message||'Some error has been occured'
      const statusCode = error?.response?.data?.status||500
      return rejectWithValue({message:errorMessage,status:statusCode})
  }
})

export const receiveOtp = createAsyncThunk('auth/receiveOtp',async(email,{rejectWithValue})=>{
  const URL = BASE_URL+'/get-otp';
  try {
    const response = await axios.post(URL,{email})
    return response.data;
  } catch (error) {
    const errorMessage = error?.response?.data?.message||'Some error has been occured'
      const statusCode = error?.response?.data?.status||500
      return rejectWithValue({message:errorMessage,status:statusCode})
  }
})

export const verifyOtp = createAsyncThunk('auth/verifyOtp',async({userEmail, otp},{rejectWithValue})=>{
  const URL = BASE_URL + '/verify-otp';
  try {
    const response = await axios.post(URL,{email:userEmail,otp});
    return response.data
  } catch (error) {
    const errorMessage = error?.response?.data?.message||'Some error has been occured'
    const statusCode = error?.response?.data?.status||500
    return rejectWithValue({message:errorMessage,status:statusCode}) 
  }
})

export const logout = createAsyncThunk('auth/logout',async({},{rejectWithValue})=>{
  const URL = BASE_URL+'/logout'
  try {
    const response = await axios.post(URL,{},{withCredentials:true});
    return response.data;
  } catch (error) {
    const errorMessage = error?.response?.data?.message||'Some error has been occured'
      const statusCode = error?.response?.data?.status||500
      return rejectWithValue({message:errorMessage,status:statusCode})
  }
})