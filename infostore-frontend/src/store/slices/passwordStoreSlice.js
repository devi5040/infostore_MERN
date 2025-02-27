import {createSlice} from '@reduxjs/toolkit';
import {
  addPasswords,
  deletePasswords,
  editPasswords,
  getPasswordStore,
} from '../actions/passwordStoreActions';
import {toast} from 'react-toastify';

const initialState = {passwordStore: [], count: 0};

const passwordSlice = createSlice ({
  name: 'passwordStore',
  reducers: {},
  initialState: initialState,
  extraReducers: builder => {
    builder.addCase (getPasswordStore.fulfilled, (state, action) => {
      if (action.payload) {
        state.passwordStore = action.payload.data;
        state.count = action.payload.count;
      }
    });
    builder.addCase(getPasswordStore.rejected,(state,action)=>{
      toast.success(action?.payload?.message)
    })
    builder.addCase (addPasswords.fulfilled, (state, action) => {
      toast.success ('Added password successfully');
    });
    builder.addCase (addPasswords.rejected, (state, action) => {
      toast.error (action?.payload?.message);
    });
    builder.addCase (editPasswords.fulfilled, (state, action) => {
      toast.success ('Updated password successfully');
    });
    builder.addCase(editPasswords.rejected,(state,action)=>{
      toast.error(action?.payload?.message)
    })
    builder.addCase (deletePasswords.fulfilled, (state, action) => {
      toast.success ('Deleted password successfully');
    });
    builder.addCase(deletePasswords.rejected,(state,action)=>{
      toast.error(action?.payload?.message)
    })
  },
});

export default passwordSlice;
