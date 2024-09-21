import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const url = "http://localhost:8080/api/vehicle-features";

// GET all vehicles Features
export const getVehicleFeatures = createAsyncThunk(
  "vehiclesFeatures/getVehicleFeatures",
  async () => {
    const user = JSON.parse(sessionStorage.getItem("login"));

    const res = await fetch(url + "/all", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });
    if (!res.ok)
      throw new Error("Could not fetch vehiclesFeatures from vehicle service");
    const data = await res.json();
    return data;
  }
);

// GET a single vehicle feature
export const getVehicleFeature = createAsyncThunk(
  "vehiclesFeatures/getVehicleFeature",
  async (vehicleId) => {
    const user = JSON.parse(sessionStorage.getItem("login"));

    const res = await fetch(url + `/${vehicleId}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });
    if (!res.ok)
      throw new Error("Could not fetch vehicle feature from vehicle service");
    const data = await res.json();
    return data;
  }
);

// GET all vehicle features for a vehicle
export const getVehicleFeaturesForVehicle = createAsyncThunk(
  "vehiclesFeatures/getVehicleFeaturesForVehicle",
  async (vehicleId) => {
    const user = JSON.parse(sessionStorage.getItem("login"));

    const res = await fetch(url + `/vehicle/${vehicleId}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });
    if (!res.ok)
      throw new Error("Could not fetch vehicle feature from vehicle service");
    const data = await res.json();
    return data;
  }
);

// CREATE a new vehicle feature
export const createVehicleFeature = createAsyncThunk(
  "vehiclesFeatures/createVehicleFeature",
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
    if (!res.ok) throw new Error("Could not create vehicle feature");
    const data = await res.json();
    return data;
  }
);

// UPDATE an existing vehicle
export const updateVehicleFeature = createAsyncThunk(
  "vehiclesFeatures/updateVehicleFeature",
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
    if (!res.ok) throw new Error("Could not update vehicle feature");
    const data = await res.json();
    return data;
  }
);

// DELETE a vehicle
export const deleteVehicleFeature = createAsyncThunk(
  "vehiclesFeatures/deleteVehicleFeature",
  async (vehicleId) => {
    const user = JSON.parse(sessionStorage.getItem("login"));

    const res = await fetch(url + `/${vehicleId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    if (!res.ok) throw new Error("Could not delete vehicle feature");
    return vehicleId;
  }
);

const vehicleFeatureSlice = createSlice({
  name: "vehicleFeature",
  initialState: {
    vehicleFeature: null,
    vehicleFeatures: [],
    vehicleFeaturesForVehicle: [],
    isVehicleFeaturesForVehicleLoading: false,
    isVehicleFeaturesLoading:false,
    isVehicleFeatureLoading: false,
    isSaving: false,
    isUpdating: false,
    isDeleting: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    // Get all vehiclesFeatures
    builder.addCase(getVehicleFeatures.pending, (state) => {
      state.isVehicleFeaturesLoading = true;
    });
    builder.addCase(getVehicleFeatures.rejected, (state, action) => {
      state.isVehicleFeaturesLoading = false;
      state.error = action.error.message;
    });
    builder.addCase(getVehicleFeatures.fulfilled, (state, action) => {
      state.isVehicleFeaturesLoading = false;
      state.vehicleFeatures = action.payload;
    });

    builder.addCase(getVehicleFeaturesForVehicle.pending, (state) => {
      state.isVehicleFeaturesForVehicleLoading = true;
    });
    builder.addCase(getVehicleFeaturesForVehicle.rejected, (state, action) => {
      state.isVehicleFeaturesForVehicleLoading = false;
      state.error = action.error.message;
    });
    builder.addCase(getVehicleFeaturesForVehicle.fulfilled, (state, action) => {
      state.isVehicleFeaturesForVehicleLoading = false;
      state.vehicleFeaturesForVehicle = action.payload;
    });

    builder.addCase(getVehicleFeature.pending, (state) => {
      state.isVehicleFeatureLoading = true;
    });
    builder.addCase(getVehicleFeature.rejected, (state, action) => {
      state.isVehicleFeatureLoading = false;
      state.error = action.error.message;
    });
    builder.addCase(getVehicleFeature.fulfilled, (state, action) => {
      state.isVehicleFeatureLoading = false;
      state.vehicle = action.payload;
    });

    builder.addCase(createVehicleFeature.pending, (state) => {
      state.isSaving = true;
    });
    builder.addCase(createVehicleFeature.rejected, (state, action) => {
      state.isSaving = false;
      state.error = action.error.message;
    });
    builder.addCase(createVehicleFeature.fulfilled, (state, action) => {
      state.isSaving = false;
      state.vehicleFeatures.push(action.payload);
    });

    builder.addCase(updateVehicleFeature.pending, (state) => {
      state.isUpdating = true;
    });
    builder.addCase(updateVehicleFeature.rejected, (state, action) => {
      state.isUpdating = false;
      state.error = action.error.message;
    });
    builder.addCase(updateVehicleFeature.fulfilled, (state, action) => {
      state.isUpdating = false;
      const index = state.vehicleFeatures.findIndex(
        (vehicle) => vehicle.id === action.payload.id
      );
      if (index !== -1) {
        state.vehicleFeatures[index] = action.payload;
      }
    });

    // Delete a vehicle
    builder.addCase(deleteVehicleFeature.pending, (state) => {
      state.isDeleting = true;
    });
    builder.addCase(deleteVehicleFeature.rejected, (state, action) => {
      state.isDeleting = false;
      state.error = action.error.message;
    });
    builder.addCase(deleteVehicleFeature.fulfilled, (state, action) => {
      state.isDeleting = false;
      state.vehicleFeatures = state.vehicleFeatures.filter(
        (vehicle) => vehicle.id !== action.payload
      );
    });
  },
});

// export const {} = vehicleFeatureSlice.actions;
export default vehicleFeatureSlice.reducer;
