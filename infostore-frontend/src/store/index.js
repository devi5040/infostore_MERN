import {combineReducers, configureStore} from '@reduxjs/toolkit';
import authSlice from './slices/authSlilce';
import homeInfoSlice from './slices/homeInfoSlice';
import storage from 'redux-persist/lib/storage';
import {persistReducer, persistStore} from 'redux-persist';
import profileSlice from './slices/profileSlice';
import documentsSlice from './slices/documentsSlice';
import educationSlice from './slices/educationSlice';
import passwordSlice from './slices/passwordStoreSlice';

const persistConfig = {
  key: 'root',
  storage, // Use localStorage
};

const appReducer = combineReducers ({
  auth: authSlice.reducer,
  homeInfo: homeInfoSlice.reducer,
  profile: profileSlice.reducer,
  documents: documentsSlice.reducer,
  education: educationSlice.reducer,
  passwordStore: passwordSlice.reducer,
});

const rootReducer = (state, action) => {
  if (action.type === 'auth/logout/fulfilled') {
    console.log ('inside resetting state');
    storage.removeItem ('persist:root'); // Ensure storage is cleared
    return appReducer (undefined, action); // Reset Redux state
  }
  return appReducer (state, action);
};

const persistedReducer = persistReducer (persistConfig, rootReducer);

export const store = configureStore ({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware ({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'], // Ignore redux-persist actions
      },
    }),
});

export const persistor = persistStore (store);
