import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const url = "http://localhost:8080/api/vehicle-types";

// GET all vehicles Features
export const getVehicleTypes = createAsyncThunk(
  "vehicleType/getVehicleTypes",
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

const vehicleTypeSlice = createSlice({
  name: "vehicleType",
  initialState: {
    vehicleTypes: [],
    isVehicleTypesLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    // Get all vehiclesFeatures
    builder.addCase(getVehicleTypes.pending, (state) => {
      state.isvehicleTypesLoading = true;
    });
    builder.addCase(getVehicleTypes.rejected, (state, action) => {
      state.isvehicleTypesLoading = false;
      state.error = action.error.message;
    });
    builder.addCase(getVehicleTypes.fulfilled, (state, action) => {
      state.isvehicleTypesLoading = false;
      state.vehicleTypes = action.payload;
    });
  },
});

// export const {} = vehicleTypeSlice.actions;
export default vehicleTypeSlice.reducer;
