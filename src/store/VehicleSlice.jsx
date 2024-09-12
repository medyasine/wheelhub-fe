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

const vehicleSlice = createSlice({
  name: "vehicles",
  initialState: {
    vehicle: {},
    vehicles: [],
    isLoading: false,
    isSaving: false,
    isUpdating: false,
    isDeleting: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    // Get all vehicles
    builder.addCase(getVehicles.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getVehicles.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
    builder.addCase(getVehicles.fulfilled, (state, action) => {
      state.isLoading = false;
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
  },
});

export default vehicleSlice.reducer;
