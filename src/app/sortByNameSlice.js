import { createSlice } from '@reduxjs/toolkit';

const sortByNameSlice = createSlice({
  name: 'statusFilter',
  initialState: {},
  reducers: {
    setSortName(state, action) {
      state.value = action.payload;
    },
  },
});

export const { setSortName } = sortByNameSlice.actions;
export default sortByNameSlice.reducer;
