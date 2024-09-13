import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const url = "http://localhost:8080/api/news-articles";

// GET all news articles
export const getNewsArticles = createAsyncThunk(
  "newsArticles/getNewsArticles",
  async () => {
    const user = JSON.parse(sessionStorage.getItem("login"));

    const res = await fetch(url + "/all", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });
    if (!res.ok) throw new Error("Could not fetch news articles");
    const data = await res.json();
    return data;
  }
);

// GET a single news article
export const getNewsArticle = createAsyncThunk(
  "newsArticles/getNewsArticle",
  async (newsArticleId) => {
    const user = JSON.parse(sessionStorage.getItem("login"));

    const res = await fetch(url + `/${newsArticleId}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });
    if (!res.ok) throw new Error("Could not fetch news article");
    const data = await res.json();
    return data;
  }
);

// CREATE a new news article
export const createNewsArticle = createAsyncThunk(
  "newsArticles/createNewsArticle",
  async (newNewsArticle) => {
    const user = JSON.parse(sessionStorage.getItem("login"));

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify(newNewsArticle),
    });
    if (!res.ok) throw new Error("Could not create news article");
    const data = await res.json();
    return data;
  }
);

// UPDATE an existing news article
export const updateNewsArticle = createAsyncThunk(
  "newsArticles/updateNewsArticle",
  async (updatedNewsArticle) => {
    const user = JSON.parse(sessionStorage.getItem("login"));

    const res = await fetch(url + `/${updatedNewsArticle.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify(updatedNewsArticle),
    });
    if (!res.ok) throw new Error("Could not update news article");
    const data = await res.json();
    return data;
  }
);

// DELETE a news article
export const deleteNewsArticle = createAsyncThunk(
  "newsArticles/deleteNewsArticle",
  async (newsArticleId) => {
    const user = JSON.parse(sessionStorage.getItem("login"));

    const res = await fetch(url + `/${newsArticleId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    if (!res.ok) throw new Error("Could not delete news article");
    return newsArticleId;
  }
);

const newsArticleSlice = createSlice({
  name: "newsArticles",
  initialState: {
    newsArticle: null,
    newsArticles: [],
    isLoading: false,
    isSaving: false,
    isUpdating: false,
    isDeleting: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    // Get all news articles
    builder.addCase(getNewsArticles.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getNewsArticles.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
    builder.addCase(getNewsArticles.fulfilled, (state, action) => {
      state.isLoading = false;
      state.newsArticles = action.payload;
    });

    // Get a single news article
    builder.addCase(getNewsArticle.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getNewsArticle.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
    builder.addCase(getNewsArticle.fulfilled, (state, action) => {
      state.isLoading = false;
      state.newsArticle = action.payload;
    });

    // Create a new news article
    builder.addCase(createNewsArticle.pending, (state) => {
      state.isSaving = true;
    });
    builder.addCase(createNewsArticle.rejected, (state, action) => {
      state.isSaving = false;
      state.error = action.error.message;
    });
    builder.addCase(createNewsArticle.fulfilled, (state, action) => {
      state.isSaving = false;
      state.newsArticles.push(action.payload);
    });

    // Update a news article
    builder.addCase(updateNewsArticle.pending, (state) => {
      state.isUpdating = true;
    });
    builder.addCase(updateNewsArticle.rejected, (state, action) => {
      state.isUpdating = false;
      state.error = action.error.message;
    });
    builder.addCase(updateNewsArticle.fulfilled, (state, action) => {
      state.isUpdating = false;
      const index = state.newsArticles.findIndex(
        (newsArticle) => newsArticle.id === action.payload.id
      );
      if (index !== -1) {
        state.newsArticles[index] = action.payload;
      }
    });

    // Delete a news article
    builder.addCase(deleteNewsArticle.pending, (state) => {
      state.isDeleting = true;
    });
    builder.addCase(deleteNewsArticle.rejected, (state, action) => {
      state.isDeleting = false;
      state.error = action.error.message;
    });
    builder.addCase(deleteNewsArticle.fulfilled, (state, action) => {
      state.isDeleting = false;
      state.newsArticles = state.newsArticles.filter(
        (newsArticle) => newsArticle.id !== action.payload
      );
    });
  },
});

export default newsArticleSlice.reducer;
