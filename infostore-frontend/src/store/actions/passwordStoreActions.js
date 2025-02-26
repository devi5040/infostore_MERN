import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
const BASE_URL = 'http://localhost:8080/password';

export const getPasswordStore = createAsyncThunk (
  'passwordStore/getPasswordStore',
  async pagenumber => {
    const URL = BASE_URL + `/password-store?page=${pagenumber}`;
    try {
      const response = await axios.get (URL, {withCredentials: true});
      return response.data;
    } catch (error) {
      console.log ('Error:', error);
    }
  }
);
