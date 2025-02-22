import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

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
      });
      return response?.data;
    } catch (error) {
      console.log (error.response?.status);
      console.log (error.response?.data?.message);
    }
  }
);
