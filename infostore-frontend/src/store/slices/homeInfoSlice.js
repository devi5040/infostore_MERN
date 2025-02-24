import {createSlice} from '@reduxjs/toolkit';
import {
  fetchDocumentCount,
  fetchPasswordCount,
  fetchProfileCompletion,
} from '../actions/homeInfoAction';

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
      const count = action.payload.count;
      state.numberOfDocuments = count;
    });
    builder.addCase (fetchPasswordCount.fulfilled, (state, action) => {
      const count = action.payload.count;
      state.passwordCount = count;
    });
    builder.addCase (fetchProfileCompletion.fulfilled, (state, action) => {
      const count = action.payload.count;
      state.profileCompleted = count;
    });
  },
});

export default homeInfoSlice;
