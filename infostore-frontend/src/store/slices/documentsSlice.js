import {createSlice} from '@reduxjs/toolkit';
import {addDocument, getDocuments} from '../actions/documentsAction';
import {toast} from 'react-toastify';
const initialState = {documents: [], documentsCount: 0};

const documentsSlice = createSlice ({
  name: 'documents',
  reducers: {},
  initialState: initialState,
  extraReducers: builder => {
    builder.addCase (getDocuments.pending, (state, action) => {
      toast.info ('Fetching Documents');
    });
    builder.addCase (getDocuments.fulfilled, (state, action) => {
      state.documents = action.payload.documents;
      state.documentsCount = action.payload.documentsCount;
    });
    builder.addCase (addDocument.fulfilled, (state, action) => {
      toast.success ('Document added successfully');
    });
  },
});

export default documentsSlice;
