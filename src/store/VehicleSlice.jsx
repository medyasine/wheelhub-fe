import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const url = "http://localhost:8080/api/vehicles";

// GET all vehicles
export const getVehicles = createAsyncThunk(
  "vehicles/getVehicles",
  async () => {
    const user = JSON.parse(sessionStorage.getItem("login"));

    const res = await fetch(url + "/all", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });
    if (!res.ok)
      throw new Error("Could not fetch vehicles from vehicle service");
    const data = await res.json();
    return data;
  }
);

// GET all deleted vehicles
export const getAllDeletedVehicles = createAsyncThunk(
  "vehicles/getAllDeletedVehicles",
  async () => {
    const user = JSON.parse(sessionStorage.getItem("login"));

    const res = await fetch(url + "/allDeleted", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });
    if (!res.ok)
      throw new Error("Could not fetch vehicles from vehicle service");
    const data = await res.json();
    return data;
  }
);

// GET all deleted vehicles
export const getAllNotDeletedVehicles = createAsyncThunk(
  "vehicles/getAllNotDeletedVehicles",
  async () => {
    const user = JSON.parse(sessionStorage.getItem("login"));

    const res = await fetch(url + "/allNotDeleted", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });
    if (!res.ok)
      throw new Error("Could not fetch vehicles from vehicle service");
    const data = await res.json();
    return data;
  }
);

// GET a single vehicle
export const getVehicle = createAsyncThunk(
  "vehicles/getVehicle",
  async (vehicleId) => {
    const user = JSON.parse(sessionStorage.getItem("login"));

    const res = await fetch(url + `/${vehicleId}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });
    if (!res.ok)
      throw new Error("Could not fetch vehicle from vehicle service");
    const data = await res.json();
    return data;
  }
);

// CREATE a new vehicle
export const createVehicle = createAsyncThunk(
  "vehicles/createVehicle",
  async (newVehicle) => {
    const user = JSON.parse(sessionStorage.getItem("login"));

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify(newVehicle),
    });
    if (!res.ok) throw new Error("Could not create vehicle");
    const data = await res.json();
    return data;
  }
);

// UPDATE an existing vehicle
export const updateVehicle = createAsyncThunk(
  "vehicles/updateVehicle",
  async (updatedVehicle) => {
    const user = JSON.parse(sessionStorage.getItem("login"));

    const res = await fetch(url + `/${updatedVehicle.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify(updatedVehicle),
    });
    if (!res.ok) throw new Error("Could not update vehicle");
    const data = await res.json();
    return data;
  }
);

// DELETE a vehicle
export const deleteVehicle = createAsyncThunk(
  "vehicles/deleteVehicle",
  async (vehicleId) => {
    const user = JSON.parse(sessionStorage.getItem("login"));

    const res = await fetch(url + `/${vehicleId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    if (!res.ok) throw new Error("Could not delete vehicle");
    return vehicleId;
  }
);

// DELETE all selected vehicles
export const deleteAllSelectedVehicles = createAsyncThunk(
  "vehicles/deleteAllSelectedVehicles",
  async (ids) => {
    const user = JSON.parse(sessionStorage.getItem("login"));

    const res = await fetch(url + "/deleteAllSelected", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify(ids),
    });
    if (!res.ok) throw new Error("Could not delete vehicles");
    return ids;
  }
);

// SOFT DELETE all selected vehicles
export const softDeleteAllSelectedVehicles = createAsyncThunk(
  "vehicles/softDeleteAllSelectedVehicles",
  async (ids) => {
    const user = JSON.parse(sessionStorage.getItem("login"));

    const res = await fetch(url + "/softDeleteAllSelected", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify(ids),
    });
    if (!res.ok) throw new Error("Could not soft delete vehicles");
    return ids;
  }
);

// Export all selected vehicles
export const exportAllSelectedVehicles = createAsyncThunk(
  "vehicles/exportAllSelectedVehicles",
  async (ids) => {
    const user = JSON.parse(sessionStorage.getItem("login"));

    const res = await fetch(url + "/exportAllSelected", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify(ids),
    });
    if (!res.ok) throw new Error("Could not export vehicles");
  }
);

const vehicleSlice = createSlice({
  name: "vehicles",
  initialState: {
    vehicle: null,
    vehicles: [],
    isVehiclesLoading: false,
    isLoading: false,
    isSaving: false,
    isUpdating: false,
    isDeleting: false,
    isDeletingAllSelectedVehicles: false,
    isSoftDeletingAllSelectedVehicles: false,
    isAllSelectedVehiclesExported: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    // Get all vehicles
    builder.addCase(getVehicles.pending, (state) => {
      state.isVehiclesLoading = true;
    });
    builder.addCase(getVehicles.rejected, (state, action) => {
      state.isVehiclesLoading = false;
      state.error = action.error.message;
    });
    builder.addCase(getVehicles.fulfilled, (state, action) => {
      state.isVehiclesLoading = false;
      state.vehicles = action.payload;
    });

    // Get all deleted vehicles
    builder.addCase(getAllDeletedVehicles.pending, (state) => {
      state.isVehiclesLoading = true;
    });
    builder.addCase(getAllDeletedVehicles.rejected, (state, action) => {
      state.isVehiclesLoading = false;
      state.error = action.error.message;
    });
    builder.addCase(getAllDeletedVehicles.fulfilled, (state, action) => {
      state.isVehiclesLoading = false;
      state.vehicles = action.payload;
    });

    // Get all not deleted vehicles
    builder.addCase(getAllNotDeletedVehicles.pending, (state) => {
      state.isVehiclesLoading = true;
    });
    builder.addCase(getAllNotDeletedVehicles.rejected, (state, action) => {
      state.isVehiclesLoading = false;
      state.error = action.error.message;
    });
    builder.addCase(getAllNotDeletedVehicles.fulfilled, (state, action) => {
      state.isVehiclesLoading = false;
      state.vehicles = action.payload;
    });

    // Get a single vehicle
    builder.addCase(getVehicle.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getVehicle.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
    builder.addCase(getVehicle.fulfilled, (state, action) => {
      state.isLoading = false;
      state.vehicle = action.payload;
    });

    // Create a new vehicle
    builder.addCase(createVehicle.pending, (state) => {
      state.isSaving = true;
    });
    builder.addCase(createVehicle.rejected, (state, action) => {
      state.isSaving = false;
      state.error = action.error.message;
    });
    builder.addCase(createVehicle.fulfilled, (state, action) => {
      state.isSaving = false;
      state.vehicles.push(action.payload);
    });

    // Update a vehicle
    builder.addCase(updateVehicle.pending, (state) => {
      state.isUpdating = true;
    });
    builder.addCase(updateVehicle.rejected, (state, action) => {
      state.isUpdating = false;
      state.error = action.error.message;
    });
    builder.addCase(updateVehicle.fulfilled, (state, action) => {
      state.isUpdating = false;
      const index = state.vehicles.findIndex(
        (vehicle) => vehicle.id === action.payload.id
      );
      if (index !== -1) {
        state.vehicles[index] = action.payload;
      }
    });

    // Delete a vehicle
    builder.addCase(deleteVehicle.pending, (state) => {
      state.isDeleting = true;
    });
    builder.addCase(deleteVehicle.rejected, (state, action) => {
      state.isDeleting = false;
      state.error = action.error.message;
    });
    builder.addCase(deleteVehicle.fulfilled, (state, action) => {
      state.isDeleting = false;
      state.vehicles = state.vehicles.filter(
        (vehicle) => vehicle.id !== action.payload
      );
    });

    // Delete all selected vehicles
    builder.addCase(deleteAllSelectedVehicles.pending, (state) => {
      state.isDeletingAllSelectedVehicles = true;
    });
    builder.addCase(deleteAllSelectedVehicles.rejected, (state, action) => {
      state.isDeletingAllSelectedVehicles = false;
      state.error = action.error.message;
    });
    builder.addCase(deleteAllSelectedVehicles.fulfilled, (state, action) => {
      state.isDeletingAllSelectedVehicles = false;
      state.vehicles = state.vehicles.filter(
        (vehicle) => !action.payload.includes(vehicle.id)
      );
    });

    // Delete all selected vehicles
    builder.addCase(softDeleteAllSelectedVehicles.pending, (state) => {
      state.isSoftDeletingAllSelectedVehicles = true;
    });
    builder.addCase(softDeleteAllSelectedVehicles.rejected, (state, action) => {
      state.isSoftDeletingAllSelectedVehicles = false;
      state.error = action.error.message;
    });
    builder.addCase(
      softDeleteAllSelectedVehicles.fulfilled,
      (state, action) => {
        state.isSoftDeletingAllSelectedVehicles = false;
        state.vehicles.forEach((vehicle) => {
          if (action.payload.includes(vehicle.id)) {
            vehicle.isDeleted = !vehicle.isDeleted;
          }
        });
      }
    );

    // Export all selected vehicles
    builder.addCase(exportAllSelectedVehicles.pending, (state) => {
      state.isAllSelectedVehiclesExported = true;
    });
    builder.addCase(exportAllSelectedVehicles.rejected, (state, action) => {
      state.isAllSelectedVehiclesExported = false;
      state.error = action.error.message;
    });
    builder.addCase(exportAllSelectedVehicles.fulfilled, (state) => {
      state.isAllSelectedVehiclesExported = false;
    });
  },
});

export default vehicleSlice.reducer;
