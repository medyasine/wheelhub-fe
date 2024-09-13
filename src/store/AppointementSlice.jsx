import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const url = "http://localhost:8080/api/appointments";

// GET all appointments
export const getAppointments = createAsyncThunk(
  "appointments/getAppointments",
  async () => {
    const user = JSON.parse(sessionStorage.getItem("login"));

    const res = await fetch(url + "/all", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });
    if (!res.ok) throw new Error("Could not fetch appointments");
    const data = await res.json();
    return data;
  }
);

// GET a single appointment
export const getAppointment = createAsyncThunk(
  "appointments/getAppointment",
  async (appointmentId) => {
    const user = JSON.parse(sessionStorage.getItem("login"));

    const res = await fetch(url + `/${appointmentId}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });
    if (!res.ok) throw new Error("Could not fetch appointment");
    const data = await res.json();
    return data;
  }
);

// CREATE a new appointment
export const createAppointment = createAsyncThunk(
  "appointments/createAppointment",
  async (newAppointment) => {
    const user = JSON.parse(sessionStorage.getItem("login"));

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify(newAppointment),
    });
    if (!res.ok) throw new Error("Could not create appointment");
    const data = await res.json();
    return data;
  }
);

// UPDATE an existing appointment
export const updateAppointment = createAsyncThunk(
  "appointments/updateAppointment",
  async (updatedAppointment) => {
    const user = JSON.parse(sessionStorage.getItem("login"));

    const res = await fetch(url + `/${updatedAppointment.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify(updatedAppointment),
    });
    if (!res.ok) throw new Error("Could not update appointment");
    const data = await res.json();
    return data;
  }
);

// DELETE an appointment
export const deleteAppointment = createAsyncThunk(
  "appointments/deleteAppointment",
  async (appointmentId) => {
    const user = JSON.parse(sessionStorage.getItem("login"));

    const res = await fetch(url + `/${appointmentId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    if (!res.ok) throw new Error("Could not delete appointment");
    return appointmentId;
  }
);

const appointmentSlice = createSlice({
  name: "appointments",
  initialState: {
    appointment: null,
    appointments: [],
    isLoading: false,
    isSaving: false,
    isUpdating: false,
    isDeleting: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    // Get all appointments
    builder.addCase(getAppointments.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAppointments.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
    builder.addCase(getAppointments.fulfilled, (state, action) => {
      state.isLoading = false;
      state.appointments = action.payload;
    });

    // Get a single appointment
    builder.addCase(getAppointment.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAppointment.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
    builder.addCase(getAppointment.fulfilled, (state, action) => {
      state.isLoading = false;
      state.appointment = action.payload;
    });

    // Create a new appointment
    builder.addCase(createAppointment.pending, (state) => {
      state.isSaving = true;
    });
    builder.addCase(createAppointment.rejected, (state, action) => {
      state.isSaving = false;
      state.error = action.error.message;
    });
    builder.addCase(createAppointment.fulfilled, (state, action) => {
      state.isSaving = false;
      state.appointments.push(action.payload);
    });

    // Update an appointment
    builder.addCase(updateAppointment.pending, (state) => {
      state.isUpdating = true;
    });
    builder.addCase(updateAppointment.rejected, (state, action) => {
      state.isUpdating = false;
      state.error = action.error.message;
    });
    builder.addCase(updateAppointment.fulfilled, (state, action) => {
      state.isUpdating = false;
      const index = state.appointments.findIndex(
        (appointment) => appointment.id === action.payload.id
      );
      if (index !== -1) {
        state.appointments[index] = action.payload;
      }
    });

    // Delete an appointment
    builder.addCase(deleteAppointment.pending, (state) => {
      state.isDeleting = true;
    });
    builder.addCase(deleteAppointment.rejected, (state, action) => {
      state.isDeleting = false;
      state.error = action.error.message;
    });
    builder.addCase(deleteAppointment.fulfilled, (state, action) => {
      state.isDeleting = false;
      state.appointments = state.appointments.filter(
        (appointment) => appointment.id !== action.payload
      );
    });
  },
});

export default appointmentSlice.reducer;
