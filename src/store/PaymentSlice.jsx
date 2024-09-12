import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const url = "http://localhost:8080/api/payments";

// GET all payments
export const getPayments = createAsyncThunk(
  "payments/getPayments",
  async () => {
    const user = JSON.parse(sessionStorage.getItem("login"));

    const res = await fetch(url + "/all", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });
    if (!res.ok) throw new Error("Could not fetch payments");
    const data = await res.json();
    return data;
  }
);

// GET a single payment
export const getPayment = createAsyncThunk(
  "payments/getPayment",
  async (paymentId) => {
    const user = JSON.parse(sessionStorage.getItem("login"));

    const res = await fetch(url + `/${paymentId}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });
    if (!res.ok) throw new Error("Could not fetch payment");
    const data = await res.json();
    return data;
  }
);

// CREATE a new payment
export const createPayment = createAsyncThunk(
  "payments/createPayment",
  async (newPayment) => {
    const user = JSON.parse(sessionStorage.getItem("login"));

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify(newPayment),
    });
    if (!res.ok) throw new Error("Could not create payment");
    const data = await res.json();
    return data;
  }
);

// UPDATE an existing payment
export const updatePayment = createAsyncThunk(
  "payments/updatePayment",
  async (updatedPayment) => {
    const user = JSON.parse(sessionStorage.getItem("login"));

    const res = await fetch(url + `/${updatedPayment.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify(updatedPayment),
    });
    if (!res.ok) throw new Error("Could not update payment");
    const data = await res.json();
    return data;
  }
);

// DELETE a payment
export const deletePayment = createAsyncThunk(
  "payments/deletePayment",
  async (paymentId) => {
    const user = JSON.parse(sessionStorage.getItem("login"));

    const res = await fetch(url + `/${paymentId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    if (!res.ok) throw new Error("Could not delete payment");
    return paymentId;
  }
);

const paymentSlice = createSlice({
  name: "payments",
  initialState: {
    payment: {},
    payments: [],
    isLoading: false,
    isSaving: false,
    isUpdating: false,
    isDeleting: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    // Get all payments
    builder.addCase(getPayments.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getPayments.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
    builder.addCase(getPayments.fulfilled, (state, action) => {
      state.isLoading = false;
      state.payments = action.payload;
    });

    // Get a single payment
    builder.addCase(getPayment.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getPayment.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
    builder.addCase(getPayment.fulfilled, (state, action) => {
      state.isLoading = false;
      state.payment = action.payload;
    });

    // Create a new payment
    builder.addCase(createPayment.pending, (state) => {
      state.isSaving = true;
    });
    builder.addCase(createPayment.rejected, (state, action) => {
      state.isSaving = false;
      state.error = action.error.message;
    });
    builder.addCase(createPayment.fulfilled, (state, action) => {
      state.isSaving = false;
      state.payments.push(action.payload);
    });

    // Update a payment
    builder.addCase(updatePayment.pending, (state) => {
      state.isUpdating = true;
    });
    builder.addCase(updatePayment.rejected, (state, action) => {
      state.isUpdating = false;
      state.error = action.error.message;
    });
    builder.addCase(updatePayment.fulfilled, (state, action) => {
      state.isUpdating = false;
      const index = state.payments.findIndex(
        (payment) => payment.id === action.payload.id
      );
      if (index !== -1) {
        state.payments[index] = action.payload;
      }
    });

    // Delete a payment
    builder.addCase(deletePayment.pending, (state) => {
      state.isDeleting = true;
    });
    builder.addCase(deletePayment.rejected, (state, action) => {
      state.isDeleting = false;
      state.error = action.error.message;
    });
    builder.addCase(deletePayment.fulfilled, (state, action) => {
      state.isDeleting = false;
      state.payments = state.payments.filter(
        (payment) => payment.id !== action.payload
      );
    });
  },
});

export default paymentSlice.reducer;
