import {createAsyncThunk, isRejectedWithValue} from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';
import { persistor } from '..';

const BASE_URL = 'http://localhost:8080/auth';

export const login = createAsyncThunk (
  'auth/login',
  async ({email, password}) => {
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
      toast.error(error.response?.data?.message);
      return isRejectedWithValue(error.response?.data?.message)
    }
  }
);

export const register = createAsyncThunk('auth/register',async({name,email,password,mobileNumber,height, weight,age,bloodGroup})=>{
  const URL = BASE_URL+'/register';
  try {
    const response = await axios.post(URL,{name,email,password,mobileNumber,height,weight,age, bloodGroup},{withCredentials:true});
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log('Error::',error)
  }
})

export const receiveOtp = createAsyncThunk('auth/receiveOtp',async(email)=>{
  const URL = BASE_URL+'/get-otp';
  try {
    const response = await axios.post(URL,{email})
    return response.data;
  } catch (error) {
    console.log('Error::',error)
  }
})

export const verifyOtp = createAsyncThunk('auth/verifyOtp',async({userEmail, otp})=>{
  const URL = BASE_URL + '/verify-otp';
  try {
    console.log('otp::',otp)
    const response = await axios.post(URL,{email:userEmail,otp});
    console.log("Response", response.data)
    return response.data
  } catch (error) {
   console.log('Error verify:',error) 
  }
})

export const logout = createAsyncThunk('auth/logout',async()=>{
  const URL = BASE_URL+'/logout'
  try {
    const response = await axios.post(URL,{},{withCredentials:true});
    return response.data;
  } catch (error) {
    console.log('Error:',error)
  }
})