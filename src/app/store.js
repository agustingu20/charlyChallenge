import { configureStore } from '@reduxjs/toolkit';
import filteredCompaniesSlice from './filteredCompaniesSlice';
import sortByDateSlice from './sortByDateSlice';
import sortByNameSlice from './sortByNameSlice';
import statusFilterSlice from './statusFilterSlice';

const store = configureStore({
  reducer: {
    statusFilter: statusFilterSlice,
    filteredCompanies: filteredCompaniesSlice,
    dateFilter: sortByDateSlice,
    nameFilter: sortByNameSlice,
  },
  devTools: true,
});

export default store;
