import {createSlice} from '@reduxjs/toolkit';
import {
  fetchDocumentCount,
  fetchPasswordCount,
  fetchProfileCompletion,
} from '../actions/homeInfoAction';
import {toast} from 'react-toastify';

const initialState = {
  numberOfDocuments: 0,
  passwordCount: 0,
  profileCompleted: 0,
};

const homeInfoSlice = createSlice ({
  name: 'homeInfo',
  reducers: {
    clearHomeInfo: (state, action) => {
      state.numberOfDocuments = initialState.numberOfDocuments;
      state.passwordCount = initialState.passwordCount;
      state.profileCompleted = initialState.profileCompleted;
    },
  },
  initialState: initialState,
  extraReducers: builder => {
    builder.addCase (fetchDocumentCount.fulfilled, (state, action) => {
      const count = action.payload.count;
      state.numberOfDocuments = count;
    });
    builder.addCase (fetchDocumentCount.rejected, (state, action) => {
      toast.error ('Some error occured in fetching document count');
    });
    builder.addCase (fetchPasswordCount.fulfilled, (state, action) => {
      const count = action.payload.count;
      state.passwordCount = count;
    });
    builder.addCase (fetchPasswordCount.rejected, (state, action) => {
      toast.error ('Some error occured in fetching password count');
    });
    builder.addCase (fetchProfileCompletion.fulfilled, (state, action) => {
      const count = action.payload.count;
      state.profileCompleted = count;
    });
    builder.addCase (fetchProfileCompletion.rejected, (state, action) => {
      toast.error ('Some error occured in fetching profile details');
    });
  },
});

export const clearAction = homeInfoSlice.actions;
export default homeInfoSlice;
