import React from 'react';
import { useSelector } from 'react-redux';
import { companies } from '../../assets/companiesArray';

const TotalRegistries = () => {
    const { filteredCompanies } = useSelector((state) => state)

  return <p>Total de registros: {filteredCompanies?.value?.length ? filteredCompanies.value.length : companies.length}</p>;
};

export default TotalRegistries;
