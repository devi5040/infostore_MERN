import {createSlice} from '@reduxjs/toolkit';
import {
  addEducation,
  deleteEducation,
  editEducation,
  getEducation,
} from '../actions/educatioActions';
import {toast} from 'react-toastify';
const initialState = {educationDetails: [], count: 0};

const educationSlice = createSlice ({
  name: 'education',
  reducers: {},
  initialState: initialState,
  extraReducers: builder => {
    builder.addCase (getEducation.fulfilled, (state, action) => {
      state.educationDetails = action.payload.educationDetails;
      state.count = action.payload.educationCount;
    });
    builder.addCase(getEducation.rejected,(state,action)=>{
      toast.error(action?.payload?.message)
    })
    builder.addCase (addEducation.fulfilled, (state, action) => {
      toast.success ('Education details added successfully');
    });
    builder.addCase(addEducation.rejected,(state,action)=>{
      toast.error(action?.payload?.message)
    })
    builder.addCase (editEducation.fulfilled, (state, action) => {
      toast.success ('Details edited successfully');
    });
    builder.addCase(editEducation.rejected,(state,action)=>{
      toast.error(action?.payload?.message)
    });
    builder.addCase(deleteEducation.fulfilled,(state,action)=>{
      toast.success('Education details deleted successfully')
    })
    builder.addCase(deleteEducation.rejected,(state,action)=>{
      toast.error(action?.payload?.message)
    })
  },
});

export default educationSlice;
