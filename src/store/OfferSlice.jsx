import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const url = "http://localhost:8080/api/offers";

// GET all offers
export const getOffers = createAsyncThunk("offers/getOffers", async () => {
  const user = JSON.parse(sessionStorage.getItem("login"));

  const res = await fetch(url + "/all", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${user.token}`,
    },
  });
  if (!res.ok) throw new Error("Could not fetch offers");
  const data = await res.json();
  return data;
});

// GET a single offer
export const getOffer = createAsyncThunk("offers/getOffer", async (offerId) => {
  const user = JSON.parse(sessionStorage.getItem("login"));

  const res = await fetch(url + `/${offerId}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${user.token}`,
    },
  });
  if (!res.ok) throw new Error("Could not fetch offer");
  const data = await res.json();
  return data;
});

// CREATE a new offer
export const createOffer = createAsyncThunk(
  "offers/createOffer",
  async (newOffer) => {
    const user = JSON.parse(sessionStorage.getItem("login"));

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify(newOffer),
    });
    if (!res.ok) throw new Error("Could not create offer");
    const data = await res.json();
    return data;
  }
);

// UPDATE an existing offer
export const updateOffer = createAsyncThunk(
  "offers/updateOffer",
  async (updatedOffer) => {
    const user = JSON.parse(sessionStorage.getItem("login"));

    const res = await fetch(url + `/${updatedOffer.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify(updatedOffer),
    });
    if (!res.ok) throw new Error("Could not update offer");
    const data = await res.json();
    return data;
  }
);

// DELETE an offer
export const deleteOffer = createAsyncThunk(
  "offers/deleteOffer",
  async (offerId) => {
    const user = JSON.parse(sessionStorage.getItem("login"));

    const res = await fetch(url + `/${offerId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    if (!res.ok) throw new Error("Could not delete offer");
    return offerId;
  }
);

const offerSlice = createSlice({
  name: "offers",
  initialState: {
    offer: {},
    offers: [],
    isLoading: false,
    isSaving: false,
    isUpdating: false,
    isDeleting: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    // Get all offers
    builder.addCase(getOffers.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getOffers.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
    builder.addCase(getOffers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.offers = action.payload;
    });

    // Get a single offer
    builder.addCase(getOffer.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getOffer.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
    builder.addCase(getOffer.fulfilled, (state, action) => {
      state.isLoading = false;
      state.offer = action.payload;
    });

    // Create a new offer
    builder.addCase(createOffer.pending, (state) => {
      state.isSaving = true;
    });
    builder.addCase(createOffer.rejected, (state, action) => {
      state.isSaving = false;
      state.error = action.error.message;
    });
    builder.addCase(createOffer.fulfilled, (state, action) => {
      state.isSaving = false;
      state.offers.push(action.payload);
    });

    // Update an offer
    builder.addCase(updateOffer.pending, (state) => {
      state.isUpdating = true;
    });
    builder.addCase(updateOffer.rejected, (state, action) => {
      state.isUpdating = false;
      state.error = action.error.message;
    });
    builder.addCase(updateOffer.fulfilled, (state, action) => {
      state.isUpdating = false;
      const index = state.offers.findIndex(
        (offer) => offer.id === action.payload.id
      );
      if (index !== -1) {
        state.offers[index] = action.payload;
      }
    });

    // Delete an offer
    builder.addCase(deleteOffer.pending, (state) => {
      state.isDeleting = true;
    });
    builder.addCase(deleteOffer.rejected, (state, action) => {
      state.isDeleting = false;
      state.error = action.error.message;
    });
    builder.addCase(deleteOffer.fulfilled, (state, action) => {
      state.isDeleting = false;
      state.offers = state.offers.filter(
        (offer) => offer.id !== action.payload
      );
    });
  },
});

export default offerSlice.reducer;
