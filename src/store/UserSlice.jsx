import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "./AxiosInstance.jsx"; // or "./axiosInstance.jsx" if that's the file name
const url = "http://localhost:8080/api/users";


// GET single user
export const getUser = createAsyncThunk("users/getUser", async () => {
  const user = JSON.parse(sessionStorage.getItem("login"));
  const res = await axiosInstance.get(`${url}/username/${user.username}`, {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  });
  return res.data;
});

// GET single user by id
export const getUserById = createAsyncThunk("users/getUserById", async (id) => {
  const user = JSON.parse(sessionStorage.getItem("login"));
  const res = await axiosInstance.get(`${url}/${id}`, {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  });
  return res.data;
});

// GET all users
export const getUsers = createAsyncThunk("users/getUsers", async () => {
  const user = JSON.parse(sessionStorage.getItem("login"));
  const res = await axiosInstance.get(`${url}/all`, {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  });
  return res.data;
});

// GET users by role
export const getUsersByrole = createAsyncThunk(
  "users/getUsersByrole",
  async (role) => {
    const user = JSON.parse(sessionStorage.getItem("login"));
    const res = await axiosInstance.get(`${url}/all/${role}`, {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    return res.data;
  }
);


// CREATE a new user
export const createUser = createAsyncThunk(
  "users/createUser",
  async (newUser) => {
    const user = JSON.parse(sessionStorage.getItem("login"));
    const res = await axiosInstance.post(url, newUser, {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    return res.data;
  }
);

// UPDATE an existing user
export const updateUser = createAsyncThunk(
  "users/updateUser",
  async (updatedUser) => {
    const user = JSON.parse(sessionStorage.getItem("login"));
    const res = await axiosInstance.put(`${url}/${updatedUser.id}`, updatedUser, {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    return res.data;
  }
);

// DELETE a user
export const deleteUser = createAsyncThunk(
  "users/deleteUser",
  async (userId) => {
    const user = JSON.parse(sessionStorage.getItem("login")); 
    await axiosInstance.delete(`${url}/${userId}`, {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    return userId; // Return the deleted user's ID
  }
);

const userSlice = createSlice({
  name: "users",
  initialState: {
    user: null,
    userDetail: null,
    users: [],
    usersByRole: [],
    isUsersByRoleLoading: false,
    isUserLoading: false,
    isUserDetailLoading: false,
    isUsersLoading: false,
    isCreating: false,
    isUpdating: false,
    isDeleting: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    // Get a single user
    builder.addCase(getUser.pending, (state) => {
      state.isUserLoading = true;
    });
    builder.addCase(getUser.rejected, (state) => {
      state.isUserLoading = false;
    });
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.isUserLoading = false;
      state.user = action.payload;
    });

    // Get a single user by id
    builder.addCase(getUserById.pending, (state) => {
      state.isUserDetailLoading = true;
    });
    builder.addCase(getUserById.rejected, (state) => {
      state.isUserDetailLoading = false;
    });
    builder.addCase(getUserById.fulfilled, (state, action) => {
      state.isUserDetailLoading = false;
      state.userDetail = action.payload;
    });

    // Get all users
    builder.addCase(getUsers.pending, (state) => {
      state.isUsersLoading = true;
    });
    builder.addCase(getUsers.rejected, (state) => {
      state.isUsersLoading = false;
    });
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.isUsersLoading = false;
      state.users = action.payload;
    });

    // Get users by role
    builder.addCase(getUsersByrole.pending, (state) => {
      state.isUsersByRoleLoading = true;
    });
    builder.addCase(getUsersByrole.rejected, (state) => {
      state.isUsersByRoleLoading = false;
    });
    builder.addCase(getUsersByrole.fulfilled, (state, action) => {
      state.isUsersByRoleLoading = false;
      state.usersByRole = action.payload;
    });

    // Create a user
    builder.addCase(createUser.pending, (state) => {
      state.isCreating = true;
    });
    builder.addCase(createUser.rejected, (state) => {
      state.isCreating = false;
    });
    builder.addCase(createUser.fulfilled, (state, action) => {
      state.isCreating = false;
      state.users.push(action.payload);
    });

    // Update a user
    builder.addCase(updateUser.pending, (state) => {
      state.isUpdating = true;
    });
    builder.addCase(updateUser.rejected, (state) => {
      state.isUpdating = false;
    });
    builder.addCase(updateUser.fulfilled, (state, action) => {
      state.isUpdating = false;
      const index = state.users.findIndex(
        (user) => user.id === action.payload.id
      );
      if (index !== -1) {
        state.users[index] = action.payload;
      }
    });

    // Delete a user
    builder.addCase(deleteUser.pending, (state) => {
      state.isDeleting = true;
    });
    builder.addCase(deleteUser.rejected, (state) => {
      state.isDeleting = false;
    });
    builder.addCase(deleteUser.fulfilled, (state, action) => {
      state.isDeleting = false;
      state.users = state.users.filter((user) => user.id !== action.payload);
    });
  },
});

export default userSlice.reducer;