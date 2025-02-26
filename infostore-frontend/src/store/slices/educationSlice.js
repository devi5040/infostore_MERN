import {createSlice} from '@reduxjs/toolkit';
import {
  addEducation,
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
    builder.addCase (addEducation.fulfilled, (state, action) => {
      toast.success ('Education details added successfully');
    });
    builder.addCase (editEducation.fulfilled, (state, action) => {
      toast.success ('Details edited successfully');
    });
  },
});

export default educationSlice;
