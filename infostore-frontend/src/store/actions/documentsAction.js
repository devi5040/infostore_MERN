import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
const BASE_URL = 'http://localhost:8080/documents';

export const getDocuments = createAsyncThunk (
  'documents/getDocuments',
  async pageNumber => {
    const URL = BASE_URL + `/get-documents?page=${pageNumber}`;
    try {
      console.log ('Inside get documents');
      const response = await axios.get (URL, {withCredentials: true});
      console.log (response.data);
      return response.data;
    } catch (error) {
      console.log ('Error', error);
    }
  }
);

export const addDocument = createAsyncThunk (
  'documents/addDocument',
  async ({title, file}) => {
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
      console.log ('Error:', error);
    }
  }
);

export const deleteDocument = createAsyncThunk (
  'documents/deleteDocument',
  async documentId => {
    const URL = BASE_URL + `/delete-document/${documentId}`;
    try {
      const response = await axios.delete (URL, {withCredentials: true});
      return response.data;
    } catch (error) {
      console.log ('Error::', error);
    }
  }
);
