import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
const BASE_URL = 'http://localhost:8080/documents';

export const getDocuments = createAsyncThunk (
  'documents/getDocuments',
  async (pageNumber,{rejectWithValue}) => {
    const URL = BASE_URL + `/get-documents?page=${pageNumber}`;
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

export const addDocument = createAsyncThunk (
  'documents/addDocument',
  async ({title, file},{rejectWithValue}) => {
    const URL = BASE_URL + '/add-documents';
    try {
      const response = await axios.put (
        URL,
        {title, file},
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

export const deleteDocument = createAsyncThunk (
  'documents/deleteDocument',
  async (documentId,{rejectWithValue}) => {
    const URL = BASE_URL + `/delete-document/${documentId}`;
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
