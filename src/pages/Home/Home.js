import React from 'react';
import CompaniesTable from '../../components/CompaniesTable/CompaniesTable';
import Filters from '../../components/Filters/Filters';
import Title from '../../components/Title/Title';
import TotalRegistries from '../../components/TotalRegistries/TotalRegistries';

const Home = () => {
  return (
    <>
      <Title title={'Listado de empresas'}/>
      <Filters />
      <CompaniesTable />
      <TotalRegistries />
    </>
  );
};

export default Home;
