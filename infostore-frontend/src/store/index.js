import {configureStore} from '@reduxjs/toolkit';
import authSlice from './slices/authSlilce';

const store = configureStore ({
  reducer: authSlice.reducer,
});

export default store;
