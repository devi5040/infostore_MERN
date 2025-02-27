import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'http://localhost:8080/profile';

export const getProfile = createAsyncThunk ('profile/getProfile', async ({},{rejectWithValue}) => {
  const URL = BASE_URL + '/get-profile';
  try {
    const response = await axios.get (URL, {withCredentials: true});
    return response.data;
  } catch (error) {
    const errorMessage = error?.response?.data?.message||'Some error has been occured'
      const statusCode = error?.response?.data?.status||500
      return rejectWithValue({message:errorMessage,status:statusCode})
  }
});

export const editProfile = createAsyncThunk (
  'profile/editProfile',
  async ({
    name,
    mobileNumber,
    age,
    height,
    weight,
    file,
    address,
    bloodGroup,
  },{rejectWithValue}) => {
    const URL = BASE_URL + '/edit-profile';
    try {
      const response = await axios.post (
        URL,
        {
          name,
          mobileNumber,
          age,
          height,
          weight,
          file,
          address,
          bloodGroup,
        },
        {
          withCredentials: true,
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      return response.data;
    } catch (error) {
      const errorMessage = error?.response?.data?.message||'Some error has been occured'
      const statusCode = error?.response?.data?.status||500
      return rejectWithValue({message:errorMessage,status:statusCode})
    }
  }
);
