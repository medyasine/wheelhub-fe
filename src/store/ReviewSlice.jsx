import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const url = "http://localhost:8080/api/reviews";

// GET all reviews
export const getReviews = createAsyncThunk("review/getReviews", async () => {
  const user = JSON.parse(sessionStorage.getItem("login"));

  const res = await fetch(url + "/all", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${user.token}`,
    },
  });
  if (!res.ok) throw new Error("Could not fetch reviews");
  const data = await res.json();
  return data;
});

// GET a single review
export const getReview = createAsyncThunk(
  "review/getReview",
  async (reviewId) => {
    const user = JSON.parse(sessionStorage.getItem("login"));

    const res = await fetch(url + `/${reviewId}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });
    if (!res.ok) throw new Error("Could not fetch review");
    const data = await res.json();
    return data;
  }
);

// GET vehicle reviews
export const getVehicleReviews = createAsyncThunk(
  "review/getVehicleReviews",
  async ({ vehicleId, reviewType }) => {
    const user = JSON.parse(sessionStorage.getItem("login"));

    const res = await fetch(url + `/vehicle/${vehicleId}/${reviewType}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });
    if (!res.ok) throw new Error("Could not fetch vehicle reviews");
    const data = await res.json();
    return data;
  }
);

// CREATE a new review
export const createReview = createAsyncThunk(
  "review/createReview",
  async (newReview) => {
    const user = JSON.parse(sessionStorage.getItem("login"));

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify(newReview),
    });
    if (!res.ok) throw new Error("Could not create review");
    const data = await res.json();
    return data;
  }
);

// UPDATE an existing review
export const updateReview = createAsyncThunk(
  "review/updateReview",
  async (updatedReview) => {
    const user = JSON.parse(sessionStorage.getItem("login"));

    const res = await fetch(url + `/${updatedReview.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify(updatedReview),
    });
    if (!res.ok) throw new Error("Could not update review");
    const data = await res.json();
    return data;
  }
);

// DELETE a review
export const deleteReview = createAsyncThunk(
  "review/deleteReview",
  async (reviewId) => {
    const user = JSON.parse(sessionStorage.getItem("login"));

    const res = await fetch(url + `/${reviewId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    if (!res.ok) throw new Error("Could not delete review");
    return reviewId;
  }
);

const reviewSlice = createSlice({
  name: "review",
  initialState: {
    review: null,
    reviews: [],
    vehicleReviews:[],
    isLoading: false,
    isSaving: false,
    isUpdating: false,
    isDeleting: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    // Get all reviews
    builder.addCase(getReviews.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getReviews.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
    builder.addCase(getReviews.fulfilled, (state, action) => {
      state.isLoading = false;
      state.reviews = action.payload;
    });

    // Get all vehicle reviews
    builder.addCase(getVehicleReviews.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getVehicleReviews.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
    builder.addCase(getVehicleReviews.fulfilled, (state, action) => {
      state.isLoading = false;
      state.vehicleReviews = action.payload;
    });

    // Get a single review
    builder.addCase(getReview.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getReview.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
    builder.addCase(getReview.fulfilled, (state, action) => {
      state.isLoading = false;
      state.review = action.payload;
    });

    // Create a new review
    builder.addCase(createReview.pending, (state) => {
      state.isSaving = true;
    });
    builder.addCase(createReview.rejected, (state, action) => {
      state.isSaving = false;
      state.error = action.error.message;
    });
    builder.addCase(createReview.fulfilled, (state, action) => {
      state.isSaving = false;
      state.reviews.push(action.payload);
    });

    // Update an existing review
    builder.addCase(updateReview.pending, (state) => {
      state.isUpdating = true;
    });
    builder.addCase(updateReview.rejected, (state, action) => {
      state.isUpdating = false;
      state.error = action.error.message;
    });
    builder.addCase(updateReview.fulfilled, (state, action) => {
      state.isUpdating = false;
      const index = state.reviews.findIndex(
        (review) => review.id === action.payload.id
      );
      if (index !== -1) {
        state.reviews[index] = action.payload;
      }
    });

    // Delete a review
    builder.addCase(deleteReview.pending, (state) => {
      state.isDeleting = true;
    });
    builder.addCase(deleteReview.rejected, (state, action) => {
      state.isDeleting = false;
      state.error = action.error.message;
    });
    builder.addCase(deleteReview.fulfilled, (state, action) => {
      state.isDeleting = false;
      state.reviews = state.reviews.filter(
        (review) => review.id !== action.payload
      );
    });
  },
});

export default reviewSlice.reducer;
