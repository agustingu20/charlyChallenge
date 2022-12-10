import React, { useEffect, useState } from 'react';
import CompaniesTable from '../../components/CompaniesTable/CompaniesTable';
import Filters from '../../components/Filters/Filters';
import SortFilters from '../../components/SortFilters.js/SortFilters';
import Title from '../../components/Title/Title';
import TotalRegistries from '../../components/TotalRegistries/TotalRegistries';
import useFetch from '../../hooks/useFetch';

const Home = () => {
  const [companiesArray, setCompaniesArray] = useState([]);
  console.log("Home ~ companiesArray", companiesArray)

  const { data, loading, error } = useFetch('https://pokeapi.co/api/v2/pokemon/'); 

  //Del custom hook useFetch se podria tomar el loading y error para realizar un spinner mientras se realiza la petición, 
  //y del error capturar si llega a haber un error en la petición.

  useEffect(() => {
    setCompaniesArray(data?.results)
  }, [data])

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
