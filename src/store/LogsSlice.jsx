import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const sendLogToBackend = createAsyncThunk(
  'logs/sendLogToBackend',
  async (logData, { rejectWithValue, getState }) => {
    try {
      // Assuming you have a way to get the current user's ID from the state
      const userId = getState().auth.userId; // Adjust this based on your actual state structure
      const logWithUser = { ...logData, user: { id: userId } };
      const response = await axios.post('/api/logs', logWithUser);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const logsSlice = createSlice({
  name: 'logs',
  initialState: {
    logs: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    addLog: (state, action) => {
      state.logs.push(action.payload);
      // Dispatch the sendLogToBackend thunk immediately when a log is added
      sendLogToBackend(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendLogToBackend.fulfilled, (state, action) => {
        console.log('Log saved successfully:', action.payload);
      })
      .addCase(sendLogToBackend.rejected, (state, action) => {
        console.error('Failed to save log:', action.payload);
        state.error = action.payload;
      });
  },
});

export const { addLog } = logsSlice.actions;

export default logsSlice.reducer;