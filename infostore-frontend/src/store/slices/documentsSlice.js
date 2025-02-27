import {createSlice} from '@reduxjs/toolkit';
import {addDocument, deleteDocument, getDocuments} from '../actions/documentsAction';
import {toast} from 'react-toastify';
const initialState = {documents: [], documentsCount: 0};

const documentsSlice = createSlice ({
  name: 'documents',
  reducers: {},
  initialState: initialState,
  extraReducers: builder => {
    builder.addCase (getDocuments.fulfilled, (state, action) => {
      state.documents = action.payload.documents;
      state.documentsCount = action.payload.documentsCount;
    });
    builder.addCase(getDocuments.rejected,(state,action)=>{
      toast.error(action?.payload?.message);
    })
    builder.addCase (addDocument.fulfilled, (state, action) => {
      toast.success ('Document added successfully');
    });
    builder.addCase(addDocument.rejected,(state,action)=>{
      toast.error(action?.payload?.message)
    });
    builder.addCase(deleteDocument.fulfilled,(state,action)=>{
      toast.success('Document deleted successfully')
    });
    builder.addCase(deleteDocument.rejected,(state,action)=>{
      toast.error(action?.payload?.message)
    })
  },
});

export default documentsSlice;
