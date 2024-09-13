import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const url = "http://localhost:8080/api/price-drops";

// GET all price drops
export const getPriceDrops = createAsyncThunk(
  "priceDrops/getPriceDrops",
  async () => {
    const user = JSON.parse(sessionStorage.getItem("login"));

    const res = await fetch(url + "/all", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });
    if (!res.ok) throw new Error("Could not fetch price drops");
    const data = await res.json();
    return data;
  }
);

// GET a single price drop
export const getPriceDrop = createAsyncThunk(
  "priceDrops/getPriceDrop",
  async (priceDropId) => {
    const user = JSON.parse(sessionStorage.getItem("login"));

    const res = await fetch(url + `/${priceDropId}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });
    if (!res.ok) throw new Error("Could not fetch price drop");
    const data = await res.json();
    return data;
  }
);

// CREATE a new price drop
export const createPriceDrop = createAsyncThunk(
  "priceDrops/createPriceDrop",
  async (newPriceDrop) => {
    const user = JSON.parse(sessionStorage.getItem("login"));

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify(newPriceDrop),
    });
    if (!res.ok) throw new Error("Could not create price drop");
    const data = await res.json();
    return data;
  }
);

// UPDATE an existing price drop
export const updatePriceDrop = createAsyncThunk(
  "priceDrops/updatePriceDrop",
  async (updatedPriceDrop) => {
    const user = JSON.parse(sessionStorage.getItem("login"));

    const res = await fetch(url + `/${updatedPriceDrop.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify(updatedPriceDrop),
    });
    if (!res.ok) throw new Error("Could not update price drop");
    const data = await res.json();
    return data;
  }
);

// DELETE a price drop
export const deletePriceDrop = createAsyncThunk(
  "priceDrops/deletePriceDrop",
  async (priceDropId) => {
    const user = JSON.parse(sessionStorage.getItem("login"));

    const res = await fetch(url + `/${priceDropId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    if (!res.ok) throw new Error("Could not delete price drop");
    return priceDropId;
  }
);

const priceDropSlice = createSlice({
  name: "priceDrops",
  initialState: {
    priceDrop: null,
    priceDrops: [],
    isLoading: false,
    isSaving: false,
    isUpdating: false,
    isDeleting: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    // Get all price drops
    builder.addCase(getPriceDrops.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getPriceDrops.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
    builder.addCase(getPriceDrops.fulfilled, (state, action) => {
      state.isLoading = false;
      state.priceDrops = action.payload;
    });

    // Get a single price drop
    builder.addCase(getPriceDrop.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getPriceDrop.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
    builder.addCase(getPriceDrop.fulfilled, (state, action) => {
      state.isLoading = false;
      state.priceDrop = action.payload;
    });

    // Create a new price drop
    builder.addCase(createPriceDrop.pending, (state) => {
      state.isSaving = true;
    });
    builder.addCase(createPriceDrop.rejected, (state, action) => {
      state.isSaving = false;
      state.error = action.error.message;
    });
    builder.addCase(createPriceDrop.fulfilled, (state, action) => {
      state.isSaving = false;
      state.priceDrops.push(action.payload);
    });

    // Update a price drop
    builder.addCase(updatePriceDrop.pending, (state) => {
      state.isUpdating = true;
    });
    builder.addCase(updatePriceDrop.rejected, (state, action) => {
      state.isUpdating = false;
      state.error = action.error.message;
    });
    builder.addCase(updatePriceDrop.fulfilled, (state, action) => {
      state.isUpdating = false;
      const index = state.priceDrops.findIndex(
        (priceDrop) => priceDrop.id === action.payload.id
      );
      if (index !== -1) {
        state.priceDrops[index] = action.payload;
      }
    });

    // Delete a price drop
    builder.addCase(deletePriceDrop.pending, (state) => {
      state.isDeleting = true;
    });
    builder.addCase(deletePriceDrop.rejected, (state, action) => {
      state.isDeleting = false;
      state.error = action.error.message;
    });
    builder.addCase(deletePriceDrop.fulfilled, (state, action) => {
      state.isDeleting = false;
      state.priceDrops = state.priceDrops.filter(
        (priceDrop) => priceDrop.id !== action.payload
      );
    });
  },
});

export default priceDropSlice.reducer;
