import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const url = "http://localhost:8080/api/dealerships";

// GET all dealerships
export const getDealerships = createAsyncThunk(
  "dealerships/getDealerships",
  async () => {
    const user = JSON.parse(sessionStorage.getItem("login"));

    const res = await fetch(url + "/all", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });
    if (!res.ok) throw new Error("Could not fetch dealerships");
    const data = await res.json();
    return data;
  }
);

// GET a single dealership
export const getDealership = createAsyncThunk(
  "dealerships/getDealership",
  async (dealershipId) => {
    const user = JSON.parse(sessionStorage.getItem("login"));

    const res = await fetch(url + `/${dealershipId}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });
    if (!res.ok) throw new Error("Could not fetch dealership");
    const data = await res.json();
    return data;
  }
);

// CREATE a new dealership
export const createDealership = createAsyncThunk(
  "dealerships/createDealership",
  async (newDealership) => {
    const user = JSON.parse(sessionStorage.getItem("login"));

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify(newDealership),
    });
    if (!res.ok) throw new Error("Could not create dealership");
    const data = await res.json();
    return data;
  }
);

// UPDATE an existing dealership
export const updateDealership = createAsyncThunk(
  "dealerships/updateDealership",
  async (updatedDealership) => {
    const user = JSON.parse(sessionStorage.getItem("login"));

    const res = await fetch(url + `/${updatedDealership.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify(updatedDealership),
    });
    if (!res.ok) throw new Error("Could not update dealership");
    const data = await res.json();
    return data;
  }
);

// DELETE a dealership
export const deleteDealership = createAsyncThunk(
  "dealerships/deleteDealership",
  async (dealershipId) => {
    const user = JSON.parse(sessionStorage.getItem("login"));

    const res = await fetch(url + `/${dealershipId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    if (!res.ok) throw new Error("Could not delete dealership");
    return dealershipId;
  }
);

const dealershipSlice = createSlice({
  name: "dealerships",
  initialState: {
    dealership: {},
    dealerships: [],
    isLoading: false,
    isSaving: false,
    isUpdating: false,
    isDeleting: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    // Get all dealerships
    builder.addCase(getDealerships.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getDealerships.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
    builder.addCase(getDealerships.fulfilled, (state, action) => {
      state.isLoading = false;
      state.dealerships = action.payload;
    });

    // Get a single dealership
    builder.addCase(getDealership.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getDealership.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
    builder.addCase(getDealership.fulfilled, (state, action) => {
      state.isLoading = false;
      state.dealership = action.payload;
    });

    // Create a new dealership
    builder.addCase(createDealership.pending, (state) => {
      state.isSaving = true;
    });
    builder.addCase(createDealership.rejected, (state, action) => {
      state.isSaving = false;
      state.error = action.error.message;
    });
    builder.addCase(createDealership.fulfilled, (state, action) => {
      state.isSaving = false;
      state.dealerships.push(action.payload);
    });

    // Update a dealership
    builder.addCase(updateDealership.pending, (state) => {
      state.isUpdating = true;
    });
    builder.addCase(updateDealership.rejected, (state, action) => {
      state.isUpdating = false;
      state.error = action.error.message;
    });
    builder.addCase(updateDealership.fulfilled, (state, action) => {
      state.isUpdating = false;
      const index = state.dealerships.findIndex(
        (dealership) => dealership.id === action.payload.id
      );
      if (index !== -1) {
        state.dealerships[index] = action.payload;
      }
    });

    // Delete a dealership
    builder.addCase(deleteDealership.pending, (state) => {
      state.isDeleting = true;
    });
    builder.addCase(deleteDealership.rejected, (state, action) => {
      state.isDeleting = false;
      state.error = action.error.message;
    });
    builder.addCase(deleteDealership.fulfilled, (state, action) => {
      state.isDeleting = false;
      state.dealerships = state.dealerships.filter(
        (dealership) => dealership.id !== action.payload
      );
    });
  },
});

export default dealershipSlice.reducer;
