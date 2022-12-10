import React from 'react';
import CompaniesTable from '../../components/CompaniesTable/CompaniesTable';
import Filters from '../../components/Filters/Filters';
import SortFilters from '../../components/SortFilters.js/SortFilters';
import Title from '../../components/Title/Title';
import TotalRegistries from '../../components/TotalRegistries/TotalRegistries';

const Home = () => {
  return (
    <>
      <Title title={'Listado de empresas'}/>
      <Filters />
      <SortFilters />
      <CompaniesTable />
      <TotalRegistries />
    </>
  );
};

export default Home;
