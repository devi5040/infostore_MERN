import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {toast} from 'react-toastify';

const BASE_URL = 'http://localhost:8080/home-info';

export const fetchDocumentCount = createAsyncThunk (
  'homeInfo/fetchDocumentCount',
  async ({}, {rejectWithValue}) => {
    console.log ('inside fetch documents');
    const URL = BASE_URL + '/documents-number';
    try {
      const response = await axios.get (URL, {withCredentials: true});
      return response.data;
    } catch (error) {
      const errorMessage = error?.response?.data?.message||'Some error has been occured'
      const statusCode = error?.response?.data?.status||500
      return rejectWithValue({message:errorMessage,status:statusCode})
    }
  }
);

export const fetchPasswordCount = createAsyncThunk (
  'homeInfo/fetchPasswordCount',
  async ({},{rejectWithValue}) => {
    const URL = BASE_URL + '/passwords-number';
    try {
      const response = await axios.get (URL, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      const errorMessage = error?.response?.data?.message||'Some error has been occured'
      const statusCode = error?.response?.data?.status||500
      return rejectWithValue({message:errorMessage,status:statusCode})
    }
  }
);

export const fetchProfileCompletion = createAsyncThunk (
  'homeInfo/fetchProfileCompletion',
  async ({},{rejectWithValue}) => {
    const URL = BASE_URL + '/profile-completion';
    try {
      const response = await axios.get (URL, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      const errorMessage = error?.response?.data?.message||'Some error has been occured'
      const statusCode = error?.response?.data?.status||500
      return rejectWithValue({message:errorMessage,status:statusCode})
    }
  }
);
