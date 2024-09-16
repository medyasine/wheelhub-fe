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

export const getRatingAvgForVehicle = createAsyncThunk(
  "review/getRatingAvgForVehicle",
  async (vehicleId) => {
    const user = JSON.parse(sessionStorage.getItem("login"));

    const res = await fetch(url + `/ratingAvg/vehicle/${vehicleId}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });
    if (!res.ok)
      throw new Error(`Could not fetch rating avg for vehicle ${vehicleId}`);
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
    vehicleReviews: [],
    ratingAvgForVehicle: null,
    isLoadingReviews: false,
    isLoadingVehicleReviews: false,
    isLoadingReview: false,
    isLoadingRatingAvg: false,
    isSavingReview: false,
    isUpdatingReview: false,
    isDeletingReview: false,
    error: null,
  },
  reducers: {
    addVehicleReview: (state, action) => {
      const review = action.payload;
      state.vehicleReviews.push(review);
      state.reviews.push(review);
    },
  },
  extraReducers: (builder) => {
    // Get all reviews
    builder.addCase(getReviews.pending, (state) => {
      state.isLoadingReviews = true;
    });
    builder.addCase(getReviews.fulfilled, (state, action) => {
      state.isLoadingReviews = false;
      state.reviews = action.payload;
    });
    builder.addCase(getReviews.rejected, (state, action) => {
      state.isLoadingReviews = false;
      state.error = action.error.message;
    });

    // Get all vehicle reviews
    builder.addCase(getVehicleReviews.pending, (state) => {
      state.isLoadingVehicleReviews = true;
    });
    builder.addCase(getVehicleReviews.fulfilled, (state, action) => {
      state.isLoadingVehicleReviews = false;
      state.vehicleReviews = action.payload;
    });
    builder.addCase(getVehicleReviews.rejected, (state, action) => {
      state.isLoadingVehicleReviews = false;
      state.error = action.error.message;
    });

    // Get a single review
    builder.addCase(getReview.pending, (state) => {
      state.isLoadingReview = true;
    });
    builder.addCase(getReview.fulfilled, (state, action) => {
      state.isLoadingReview = false;
      state.review = action.payload;
    });
    builder.addCase(getReview.rejected, (state, action) => {
      state.isLoadingReview = false;
      state.error = action.error.message;
    });

    builder.addCase(getRatingAvgForVehicle.pending, (state) => {
      state.isLoadingRatingAvg = true;
    });
    builder.addCase(getRatingAvgForVehicle.fulfilled, (state, action) => {
      state.isLoadingRatingAvg = false;
      state.ratingAvgForVehicle = action.payload;
    });
    builder.addCase(getRatingAvgForVehicle.rejected, (state, action) => {
      state.isLoadingRatingAvg = false;
      state.error = action.error.message;
    });

    // Create a new review
    builder.addCase(createReview.pending, (state) => {
      state.isSavingReview = true;
    });
    builder.addCase(createReview.fulfilled, (state, action) => {
      state.isSavingReview = false;
      state.reviews.push(action.payload);
    });
    builder.addCase(createReview.rejected, (state, action) => {
      state.isSavingReview = false;
      state.error = action.error.message;
    });

    // Update an existing review
    builder.addCase(updateReview.pending, (state) => {
      state.isUpdatingReview = true;
    });
    builder.addCase(updateReview.fulfilled, (state, action) => {
      state.isUpdatingReview = false;
      const index = state.reviews.findIndex(
        (review) => review.id === action.payload.id
      );
      if (index !== -1) {
        state.reviews[index] = action.payload;
      }
    });
    builder.addCase(updateReview.rejected, (state, action) => {
      state.isUpdatingReview = false;
      state.error = action.error.message;
    });

    // Delete a review
    builder.addCase(deleteReview.pending, (state) => {
      state.isDeletingReview = true;
    });
    builder.addCase(deleteReview.fulfilled, (state, action) => {
      state.isDeletingReview = false;
      state.reviews = state.reviews.filter(
        (review) => review.id !== action.payload
      );
    });
    builder.addCase(deleteReview.rejected, (state, action) => {
      state.isDeletingReview = false;
      state.error = action.error.message;
    });
  },
});

export const { addVehicleReview } = reviewSlice.actions;
export default reviewSlice.reducer;
