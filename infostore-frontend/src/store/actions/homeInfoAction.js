import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'http://localhost:8080/home-info';

export const fetchDocumentCount = createAsyncThunk (
  'homeInfo/fetchDocumentCount',
  async () => {
    console.log ('inside fetch documents');
    const URL = BASE_URL + '/documents-number';
    try {
      const response = await axios.get (URL, {withCredentials: true});
      return response.data;
    } catch (error) {
      console.log ('Error', error);
    }
  }
);

export const fetchPasswordCount = createAsyncThunk (
  'homeInfo/fetchPasswordCount',
  async () => {
    const URL = BASE_URL + '/passwords-number';
    try {
      const response = await axios.get (URL, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      console.log ('Error:', error);
    }
  }
);

export const fetchProfileCompletion = createAsyncThunk (
  'homeInfo/fetchProfileCompletion',
  async () => {
    const URL = BASE_URL + '/profile-completion';
    try {
      const response = await axios.get (URL, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      console.log ('error:', error);
    }
  }
);
