import {combineReducers, configureStore} from '@reduxjs/toolkit';
import authSlice from './slices/authSlilce';
import homeInfoSlice from './slices/homeInfoSlice';
import storage from 'redux-persist/lib/storage';
import {persistReducer, persistStore} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage, // Use localStorage
};

const rootReducer = combineReducers ({
  auth: authSlice.reducer,
  homeInfo: homeInfoSlice.reducer,
});

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
