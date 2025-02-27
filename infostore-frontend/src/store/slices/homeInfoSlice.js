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
  reducers: {},
  initialState: initialState,
  extraReducers: builder => {
    builder.addCase (fetchDocumentCount.fulfilled, (state, action) => {
      if (action.payload) {
        const count = action.payload.count;
        state.numberOfDocuments = count;
      }
    });
    builder.addCase (fetchDocumentCount.rejected, (state, action) => {
      toast.error (action?.payload?.message);
    });
    builder.addCase (fetchPasswordCount.fulfilled, (state, action) => {
      if (action.payload) {
        const count = action.payload.count;
        state.passwordCount = count;
      }
    });
    builder.addCase (fetchPasswordCount.rejected, (state, action) => {
      toast.error (action?.payload?.message);
    });
    builder.addCase (fetchProfileCompletion.fulfilled, (state, action) => {
      if (action.payload) {
        const count = action.payload.count;
        state.profileCompleted = count;
      }
    });
    builder.addCase (fetchProfileCompletion.rejected, (state, action) => {
      toast.error (action?.payload?.message);
    });
  },
});
export default homeInfoSlice;
