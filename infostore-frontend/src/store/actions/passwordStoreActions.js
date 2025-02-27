import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
const BASE_URL = 'http://localhost:8080/password';

export const getPasswordStore = createAsyncThunk (
  'passwordStore/getPasswordStore',
  async (pagenumber,{rejectWithValue}) => {
    const URL = BASE_URL + `/password-store?page=${pagenumber}`;
    try {
      const response = await axios.get (URL, {withCredentials: true});
      return response.data;
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Something went wrong";
      const statusCode = error.response?.status || 500;
      return  rejectWithValue({message:errorMessage,status:statusCode})
    }
  }
);

export const addPasswords = createAsyncThunk (
  'passwordStore/addPasswords',
  async ({platform, username, email, password}, {rejectWithValue}) => {
    const URL = BASE_URL + '/password-store';
    try {
      const response = await axios.post (
        URL,
        {
          platform,
          username,
          email,
          password,
        },
        {withCredentials: true}
      );
      return response.data;
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Something went wrong";
      const statusCode = error.response?.status || 500;
      return  rejectWithValue({message:errorMessage,status:statusCode})
    }
  }
);

export const editPasswords = createAsyncThunk (
  'passwordStore/editPasswords',
  async ({platform, username, email, password, passwordId},{rejectWithValue}) => {
    const URL = BASE_URL + '/password-store';
    try {
      const response = await axios.put (
        URL,
        {
          platform,
          username,
          email,
          password,
          passwordId,
        },
        {
          withCredentials: true,
        }
      );
        return response.data;
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Something went wrong";
      const statusCode = error.response?.status || 500;
      return  rejectWithValue({message:errorMessage,status:statusCode})
    }
  }
);

export const deletePasswords = createAsyncThunk (
  'passwordStore/deletePassword',
  async (passwordId,{rejectWithValue} )=> {
    const URL = BASE_URL + `/password-store/${passwordId}`;
    try {
      const response = await axios.delete (URL, {withCredentials: true});
      return response.data;
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Something went wrong";
      const statusCode = error.response?.status || 500;
      return  rejectWithValue({message:errorMessage,status:statusCode})
    }
  }
);
