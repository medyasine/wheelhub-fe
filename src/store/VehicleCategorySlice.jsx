import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const url = "http://localhost:8080/api/vehicle-categories";

// GET all vehicles Features
export const getVehicleCategories = createAsyncThunk(
  "vehicleCategory/getVehicleCategories",
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

const vehicleCategorySlice = createSlice({
  name: "vehicleCategory",
  initialState: {
    vehicleCatgories: [],
    isVehicleCatgoriesLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    // Get all vehiclesFeatures
    builder.addCase(getVehicleCategories.pending, (state) => {
      state.isVehicleCatgoriesLoading = true;
    });
    builder.addCase(getVehicleCategories.rejected, (state, action) => {
      state.isVehicleCatgoriesLoading = false;
      state.error = action.error.message;
    });
    builder.addCase(getVehicleCategories.fulfilled, (state, action) => {
      state.isVehicleCatgoriesLoading = false;
      state.vehicleCatgories = action.payload;
    });
  },
});

// export const {} = vehicleCategorySlice.actions;
export default vehicleCategorySlice.reducer;
