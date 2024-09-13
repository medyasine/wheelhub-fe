import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const url = "http://localhost:8080/api/inquiries";

// GET all inquiries
export const getInquiries = createAsyncThunk(
  "inquiry/getInquiries",
  async () => {
    const user = JSON.parse(sessionStorage.getItem("login"));

    const res = await fetch(url + "/all", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });
    if (!res.ok) throw new Error("Could not fetch inquiries");
    const data = await res.json();
    return data;
  }
);

// GET a single inquiry
export const getInquiry = createAsyncThunk(
  "inquiry/getInquiry",
  async (inquiryId) => {
    const user = JSON.parse(sessionStorage.getItem("login"));

    const res = await fetch(url + `/${inquiryId}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });
    if (!res.ok) throw new Error("Could not fetch inquiry");
    const data = await res.json();
    return data;
  }
);

// CREATE a new inquiry
export const createInquiry = createAsyncThunk(
  "inquiry/createInquiry",
  async (newInquiry) => {
    const user = JSON.parse(sessionStorage.getItem("login"));

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify(newInquiry),
    });
    if (!res.ok) throw new Error("Could not create inquiry");
    const data = await res.json();
    return data;
  }
);

// UPDATE an existing inquiry
export const updateInquiry = createAsyncThunk(
  "inquiry/updateInquiry",
  async (updatedInquiry) => {
    const user = JSON.parse(sessionStorage.getItem("login"));

    const res = await fetch(url + `/${updatedInquiry.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify(updatedInquiry),
    });
    if (!res.ok) throw new Error("Could not update inquiry");
    const data = await res.json();
    return data;
  }
);

// DELETE an inquiry
export const deleteInquiry = createAsyncThunk(
  "inquiry/deleteInquiry",
  async (inquiryId) => {
    const user = JSON.parse(sessionStorage.getItem("login"));

    const res = await fetch(url + `/${inquiryId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    if (!res.ok) throw new Error("Could not delete inquiry");
    return inquiryId;
  }
);

const inquirySlice = createSlice({
  name: "inquiry",
  initialState: {
    inquiry: null,
    inquiries: [],
    isLoading: false,
    isSaving: false,
    isUpdating: false,
    isDeleting: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    // Get all inquiries
    builder.addCase(getInquiries.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getInquiries.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
    builder.addCase(getInquiries.fulfilled, (state, action) => {
      state.isLoading = false;
      state.inquiries = action.payload;
    });

    // Get a single inquiry
    builder.addCase(getInquiry.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getInquiry.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
    builder.addCase(getInquiry.fulfilled, (state, action) => {
      state.isLoading = false;
      state.inquiry = action.payload;
    });

    // Create a new inquiry
    builder.addCase(createInquiry.pending, (state) => {
      state.isSaving = true;
    });
    builder.addCase(createInquiry.rejected, (state, action) => {
      state.isSaving = false;
      state.error = action.error.message;
    });
    builder.addCase(createInquiry.fulfilled, (state, action) => {
      state.isSaving = false;
      state.inquiries.push(action.payload);
    });

    // Update an existing inquiry
    builder.addCase(updateInquiry.pending, (state) => {
      state.isUpdating = true;
    });
    builder.addCase(updateInquiry.rejected, (state, action) => {
      state.isUpdating = false;
      state.error = action.error.message;
    });
    builder.addCase(updateInquiry.fulfilled, (state, action) => {
      state.isUpdating = false;
      const index = state.inquiries.findIndex(
        (inquiry) => inquiry.id === action.payload.id
      );
      if (index !== -1) {
        state.inquiries[index] = action.payload;
      }
    });

    // Delete an inquiry
    builder.addCase(deleteInquiry.pending, (state) => {
      state.isDeleting = true;
    });
    builder.addCase(deleteInquiry.rejected, (state, action) => {
      state.isDeleting = false;
      state.error = action.error.message;
    });
    builder.addCase(deleteInquiry.fulfilled, (state, action) => {
      state.isDeleting = false;
      state.inquiries = state.inquiries.filter(
        (inquiry) => inquiry.id !== action.payload
      );
    });
  },
});

export default inquirySlice.reducer;
