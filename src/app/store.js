import { configureStore } from '@reduxjs/toolkit';
import filteredCompaniesSlice from './filteredCompaniesSlice';
import statusFilterSlice from './statusFilterSlice';

const store = configureStore({
  reducer: {
    statusFilter: statusFilterSlice,
    filteredCompanies: filteredCompaniesSlice,
  },
  devTools: true,
});

export default store;
