import React from 'react';
import CompaniesTable from '../../components/CompaniesTable/CompaniesTable';
import Title from '../../components/Title/Title';

const Home = () => {
  return (
    <>
      <Title title={'Listado de empresas'}/>
      <CompaniesTable />
    </>
  );
};

export default Home;
