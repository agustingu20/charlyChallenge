import { createSlice } from '@reduxjs/toolkit';

const sortByDateSlice = createSlice({
  name: 'statusFilter',
  initialState: {},
  reducers: {
    setSortDate(state, action) {
      state.value = action.payload;
    },
  },
});

export const { setSortDate } = sortByDateSlice.actions;
export default sortByDateSlice.reducer;
