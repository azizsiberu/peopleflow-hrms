import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  role: string | null; // Define the role as a string or null
}

const initialState: UserState = {
  role: null, // Initial role is null
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserRole(state, action: PayloadAction<string>) {
      state.role = action.payload; // Update the role
    },
    clearUserRole(state) {
      state.role = null; // Clear the role
    },
  },
});

// Export actions
export const { setUserRole, clearUserRole } = userSlice.actions;

// Export the reducer
export default userSlice.reducer;
