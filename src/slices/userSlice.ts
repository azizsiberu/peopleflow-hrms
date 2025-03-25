import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  username: string;
  role: string;
}

interface UserState {
  user: User | null; // Define the user as User type or null
  role: string | null; // Keep the role for backward compatibility
}

const initialState: UserState = {
  user: null, // Initial user is null
  role: null, // Initial role is null
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setDemoUser(state, action: PayloadAction<User>) {
      state.user = action.payload; // Set the demo user
      state.role = action.payload.role; // Update the role based on the user
    },
    clearUserRole(state) {
      state.role = null; // Clear the role
    },
  },
});

// Export actions
export const { clearUserRole, setDemoUser } = userSlice.actions;

// Export the reducer
export default userSlice.reducer;
