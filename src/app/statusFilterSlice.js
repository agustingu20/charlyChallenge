import { createSlice } from '@reduxjs/toolkit';

const statusFilterSlice = createSlice({
  name: 'statusFilter',
  initialState: {},
  reducers: {
    setStatusFilter(state, action) {
      state.value = action.payload;
    },
  },
});

export const { setStatusFilter } = statusFilterSlice.actions;
export default statusFilterSlice.reducer;
