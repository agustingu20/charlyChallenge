import React from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { setFilteredCompanies } from '../../app/filteredCompaniesSlice';
import { companies } from '../../assets/companiesArray';

const SortFilters = () => {
  const dispatch = useDispatch();

  const sortNameUpwardOnClick = () => {
    const companiesSortByNameUpward = companies.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });
    dispatch(setFilteredCompanies(...companiesSortByNameUpward));
  };

  const sortNameFallingOnClick = () => {
    const companiesSortByNameFalling = companies.sort((a, b) => {
      if (a.name < b.name) {
        return 1;
      }
      if (a.name > b.name) {
        return -1;
      }
      return 0;
    });
    dispatch(setFilteredCompanies(...companiesSortByNameFalling));
  };

  const sortDateUpwardOnClick = () => {
    const companiesSortByDateUpward = companies.sort((a, b) => {
      if (a.date > b.date) {
        return 1;
      }
      if (a.date < b.date) {
        return -1;
      }
      return 0;
    });
    dispatch(setFilteredCompanies(...companiesSortByDateUpward));
  };

  const sortDateFallingOnClick = () => {
    const companiesSortByDateFalling = companies.sort((a, b) => {
      if (a.date < b.date) {
        return 1;
      }
      if (a.date > b.date) {
        return -1;
      }
      return 0;
    });
    dispatch(setFilteredCompanies(...companiesSortByDateFalling));
  };

  const sortIdUpwardOnClick = () => {
    const companiesSortByIdUpward = companies.sort((a, b) => {
      if (a.id > b.id) {
        return 1;
      }
      if (a.id < b.id) {
        return -1;
      }
      return 0;
    });
    dispatch(setFilteredCompanies(...companiesSortByIdUpward));
  };

  const sortIdFallingOnClick = () => {
    const companiesSortByIdFalling = companies.sort((a, b) => {
      if (a.id < b.id) {
        return 1;
      }
      if (a.id > b.id) {
        return -1;
      }
      return 0;
    });
    dispatch(setFilteredCompanies(...companiesSortByIdFalling));
  };

  return (
    <div className="mt-3 mb-5">
      <DropdownButton id="dropdown-basic-button" title="Ordenar por: ">
        <Dropdown.Item onClick={sortDateUpwardOnClick}>
          Ordenar por fecha ascendente
        </Dropdown.Item>
        <Dropdown.Item onClick={sortDateFallingOnClick}>
          Ordenar por fecha descendente
        </Dropdown.Item>
        <Dropdown.Item onClick={sortNameUpwardOnClick}>
          Ordenar por nombre ascendente
        </Dropdown.Item>
        <Dropdown.Item onClick={sortNameFallingOnClick}>
          Ordenar por nombre descendente
        </Dropdown.Item>
        <Dropdown.Item onClick={sortIdUpwardOnClick}>
          Ordenar por Id ascendente
        </Dropdown.Item>
        <Dropdown.Item onClick={sortIdFallingOnClick}>
          Ordenar por Id descendente
        </Dropdown.Item>
      </DropdownButton>
    </div>
  );
};

export default SortFilters;
