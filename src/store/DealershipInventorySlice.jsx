import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const url = "http://localhost:8080/api/dealership-inventory";

// GET all dealership inventories
export const getDealershipInventories = createAsyncThunk(
  "dealershipInventory/getDealershipInventories",
  async () => {
    const user = JSON.parse(sessionStorage.getItem("login"));

    const res = await fetch(url + "/all", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });
    if (!res.ok) throw new Error("Could not fetch dealership inventories");
    const data = await res.json();
    return data;
  }
);

// GET a single dealership inventory
export const getDealershipInventory = createAsyncThunk(
  "dealershipInventory/getDealershipInventory",
  async (inventoryId) => {
    const user = JSON.parse(sessionStorage.getItem("login"));

    const res = await fetch(url + `/${inventoryId}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });
    if (!res.ok) throw new Error("Could not fetch dealership inventory");
    const data = await res.json();
    return data;
  }
);

// CREATE a new dealership inventory
export const createDealershipInventory = createAsyncThunk(
  "dealershipInventory/createDealershipInventory",
  async (newInventory) => {
    const user = JSON.parse(sessionStorage.getItem("login"));

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify(newInventory),
    });
    if (!res.ok) throw new Error("Could not create dealership inventory");
    const data = await res.json();
    return data;
  }
);

// UPDATE an existing dealership inventory
export const updateDealershipInventory = createAsyncThunk(
  "dealershipInventory/updateDealershipInventory",
  async (updatedInventory) => {
    const user = JSON.parse(sessionStorage.getItem("login"));

    const res = await fetch(url + `/${updatedInventory.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify(updatedInventory),
    });
    if (!res.ok) throw new Error("Could not update dealership inventory");
    const data = await res.json();
    return data;
  }
);

// DELETE a dealership inventory
export const deleteDealershipInventory = createAsyncThunk(
  "dealershipInventory/deleteDealershipInventory",
  async (inventoryId) => {
    const user = JSON.parse(sessionStorage.getItem("login"));

    const res = await fetch(url + `/${inventoryId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    if (!res.ok) throw new Error("Could not delete dealership inventory");
    return inventoryId;
  }
);

const dealershipInventorySlice = createSlice({
  name: "dealershipInventory",
  initialState: {
    inventory: null,
    inventories: [],
    isLoading: false,
    isSaving: false,
    isUpdating: false,
    isDeleting: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    // Get all dealership inventories
    builder.addCase(getDealershipInventories.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getDealershipInventories.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
    builder.addCase(getDealershipInventories.fulfilled, (state, action) => {
      state.isLoading = false;
      state.inventories = action.payload;
    });

    // Get a single dealership inventory
    builder.addCase(getDealershipInventory.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getDealershipInventory.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
    builder.addCase(getDealershipInventory.fulfilled, (state, action) => {
      state.isLoading = false;
      state.inventory = action.payload;
    });

    // Create a new dealership inventory
    builder.addCase(createDealershipInventory.pending, (state) => {
      state.isSaving = true;
    });
    builder.addCase(createDealershipInventory.rejected, (state, action) => {
      state.isSaving = false;
      state.error = action.error.message;
    });
    builder.addCase(createDealershipInventory.fulfilled, (state, action) => {
      state.isSaving = false;
      state.inventories.push(action.payload);
    });

    // Update a dealership inventory
    builder.addCase(updateDealershipInventory.pending, (state) => {
      state.isUpdating = true;
    });
    builder.addCase(updateDealershipInventory.rejected, (state, action) => {
      state.isUpdating = false;
      state.error = action.error.message;
    });
    builder.addCase(updateDealershipInventory.fulfilled, (state, action) => {
      state.isUpdating = false;
      const index = state.inventories.findIndex(
        (inventory) => inventory.id === action.payload.id
      );
      if (index !== -1) {
        state.inventories[index] = action.payload;
      }
    });

    // Delete a dealership inventory
    builder.addCase(deleteDealershipInventory.pending, (state) => {
      state.isDeleting = true;
    });
    builder.addCase(deleteDealershipInventory.rejected, (state, action) => {
      state.isDeleting = false;
      state.error = action.error.message;
    });
    builder.addCase(deleteDealershipInventory.fulfilled, (state, action) => {
      state.isDeleting = false;
      state.inventories = state.inventories.filter(
        (inventory) => inventory.id !== action.payload
      );
    });
  },
});

export default dealershipInventorySlice.reducer;
