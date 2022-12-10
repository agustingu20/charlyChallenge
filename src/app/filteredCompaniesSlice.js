import { createSlice } from '@reduxjs/toolkit';

const filteredCompaniesSlice = createSlice({
  name: 'filteresCompanies',
  initialState: {},
  reducers: {
    setFilteredCompanies(state, action) {
      state.value = action.payload;
    },
  },
});

export const { setFilteredCompanies } = filteredCompaniesSlice.actions;
export default filteredCompaniesSlice.reducer;
