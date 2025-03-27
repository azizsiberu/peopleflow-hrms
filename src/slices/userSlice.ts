import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  username: string;
  role: number;
  roleLabel: string;
}

interface UserState {
  user: User | null;
  role: number | null;
  roleLabel: string | null;
}

const initialState: UserState = {
  user: null, // Initial user is null
  role: null, // Initial role is null
  roleLabel: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setDemoUser(state, action: PayloadAction<User>) {
      state.user = action.payload;
      state.role = action.payload.role;
      state.roleLabel = action.payload.roleLabel;
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
