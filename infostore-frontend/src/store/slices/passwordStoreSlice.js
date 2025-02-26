import {createSlice} from '@reduxjs/toolkit';
import {getPasswordStore} from '../actions/passwordStoreActions';
const initialState = {passwordStore: [], count: 0};

const passwordSlice = createSlice ({
  name: 'passwordStore',
  reducers: {},
  initialState: initialState,
  extraReducers: builder => {
    builder.addCase (getPasswordStore.fulfilled, (state, action) => {
      state.passwordStore = action.payload.data;
      state.count = action.payload.count;
    });
  },
});

export default passwordSlice;
