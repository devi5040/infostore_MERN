import {createAsyncThunk, isRejectedWithValue} from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

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

export const logout = createAsyncThunk('auth/logout',async()=>{
  const URL = BASE_URL+'/logout'
  try {
    const response = await axios.post(URL,{},{withCredentials:true});
    return response.data;
  } catch (error) {
    console.log('Error:',error)
  }
})