import {createSlice} from '@reduxjs/toolkit';
import {editProfile, getProfile} from '../actions/profileAction';
import { toast } from 'react-toastify';
const initialState = {profileDetails: {}};

const profileSlice = createSlice ({
  name: 'profile',
  reducers: {},
  initialState: initialState,
  extraReducers: builder => {
    builder.addCase (getProfile.fulfilled, (state, action) => {
      state.profileDetails = action.payload.user;
    });
    builder.addCase(editProfile.fulfilled,(state,action)=>{
      toast.success(action.payload?.message)
    })
    builder.addCase(editProfile.rejected,(state,action)=>{
      toast.error('Error occured')
    })
  },
});

export default profileSlice;
