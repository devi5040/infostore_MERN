import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
const BASE_URL = 'http://localhost:8080/education';

export const getEducation = createAsyncThunk (
  'education/getEducation',
  async (pageNumber,{rejectWithValue}) => {
    const URL = BASE_URL + `/get-education?page=${pageNumber}`;
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

export const addEducation = createAsyncThunk (
  'education/addDocument',
  async ({level, institute, marks, achievements, otherDetails},{rejectWithValue}) => {
    const URL = BASE_URL + '/add-education';
    try {
      const response = await axios.post (
        URL,
        {education: level, institute, marks, achievements, otherDetails},
        {withCredentials: true}
      );
      return response.data;
    } catch (error) {
      const errorMessage = error?.response?.data?.message||'Some error has been occured'
      const statusCode = error?.response?.data?.status||500
      return rejectWithValue({message:errorMessage,status:statusCode})
    }
  }
);

export const editEducation = createAsyncThunk (
  'education/editEducation',
  async ({
    educationId,
    level,
    institute,
    marks,
    achievements,
    otherDetails,
  },{rejectWithValue}) => {
    const URL = BASE_URL + '/edit-education';
    try {
      const response = await axios.post (
        URL,
        {
          educationId,
          education: level,
          institute,
          marks,
          achievements,
          otherDetails,
        },
        {withCredentials: true}
      );
      return response.data;
    } catch (error) {
      const errorMessage = error?.response?.data?.message||'Some error has been occured'
      const statusCode = error?.response?.data?.status||500
      return rejectWithValue({message:errorMessage,status:statusCode})
    }
  }
);

export const deleteEducation = createAsyncThunk (
  'education/deleteEducation',
  async (educationId,{rejectWithValue}) => {
    const URL = BASE_URL + `/delete-education/${educationId}`;
    try {
      const response = await axios.delete (URL, {withCredentials: true});
      return response.data;
    } catch (error) {
      const errorMessage = error?.response?.data?.message||'Some error has been occured'
      const statusCode = error?.response?.data?.status||500
      return rejectWithValue({message:errorMessage,status:statusCode})
    }
  }
);
