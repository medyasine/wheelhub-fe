import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const url = "http://localhost:8080/api/users";

// GET single user
export const getUser = createAsyncThunk("users/getUser", async () => {
  const user = JSON.parse(sessionStorage.getItem("login"));

  const res = await fetch(url + `/username/${user.username}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${user.token}`,
    },
  });
  if (!res.ok) throw new Error("Could not fetch user from user service");
  const data = await res.json();
  return data;
});

// GET all users
export const getUsers = createAsyncThunk("users/getUsers", async () => {
  const user = JSON.parse(sessionStorage.getItem("login"));

  const res = await fetch(url + `/all/`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${user.token}`,
    },
  });
  if (!res.ok) throw new Error("Could not fetch users from user service");
  const data = await res.json();
  return data;
});

// GET users by role
export const getUsersByrole = createAsyncThunk(
  "users/getUsersByrole",
  async (role) => {
    const user = JSON.parse(sessionStorage.getItem("login"));

    const res = await fetch(url + `/all/${role}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });
    if (!res.ok) throw new Error("Could not fetch users from user service");
    const data = await res.json();
    return data;
  }
);

// CREATE a new user
export const createUser = createAsyncThunk(
  "users/createUser",
  async (newUser) => {
    const user = JSON.parse(sessionStorage.getItem("login"));

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify(newUser),
    });
    if (!res.ok) throw new Error("Could not create user");
    const data = await res.json();
    return data;
  }
);

// UPDATE an existing user
export const updateUser = createAsyncThunk(
  "users/updateUser",
  async (updatedUser) => {
    const user = JSON.parse(sessionStorage.getItem("login"));

    const res = await fetch(url + `/${updatedUser.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify(updatedUser),
    });
    if (!res.ok) throw new Error("Could not update user");
    const data = await res.json();
    return data;
  }
);

// DELETE a user
export const deleteUser = createAsyncThunk(
  "users/deleteUser",
  async (userId) => {
    const user = JSON.parse(sessionStorage.getItem("login"));

    const res = await fetch(url + `/${userId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    if (!res.ok) throw new Error("Could not delete user");
    return userId; // Return the deleted user's ID
  }
);

const userSlice = createSlice({
  name: "users",
  initialState: {
    user: null,
    users: [],
    usersByrole: [],
    isUsersByRoleLoading: false,
    isUserLoading: false,
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
      state.usersByrole = action.payload;
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
