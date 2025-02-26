import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'http://localhost:8080/profile';

export const getProfile = createAsyncThunk ('profile/getProfile', async () => {
  const URL = BASE_URL + '/get-profile';
  try {
    const response = await axios.get (URL, {withCredentials: true});
    console.log ('response:', response.data);
    return response.data;
  } catch (error) {
    console.log ('Error:', error);
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
  }) => {
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
      console.log (response.data);
      return response.data;
    } catch (error) {
      console.log ('Error editing profile:', error);
    }
  }
);
