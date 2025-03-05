import { configureStore } from '@reduxjs/toolkit';
// Import the user slice reducer to manage user state
import userReducer from './slices/userSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

// Infer the `RootState` type from the store itself

export type RootState = ReturnType<typeof store.getState>;

export default store;
