import React, { useEffect } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setFilteredCompanies } from '../../app/filteredCompaniesSlice';
import { setStatusFilter } from '../../app/statusFilterSlice';
import { companies } from '../../assets/companiesArray';

const Filters = () => {
  const { statusFilter } = useSelector((state) => state);

  const dispatch = useDispatch();

  const statusOnClick = (e) => {
    const { name } = e.target;
    dispatch(setStatusFilter(name));
  };

  useEffect(() => {
    const filteredCompaniesByStatus = companies.filter(
      (company) => company.status === statusFilter.value,
    );
    dispatch(setFilteredCompanies(filteredCompaniesByStatus));
  }, [statusFilter]);

  return (
    <div className="mt-3 mb-5">
      <DropdownButton id="dropdown-basic-button" title="Filtrar por status: ">
        <Dropdown.Item name="accepted" onClick={statusOnClick}>
          Aceptados
        </Dropdown.Item>
        <Dropdown.Item name="declined" onClick={statusOnClick}>
          Declinados
        </Dropdown.Item>
        <Dropdown.Item name="pending" onClick={statusOnClick}>
          Pendientes
        </Dropdown.Item>
        <Dropdown.Item onClick={statusOnClick}>
          Todos
        </Dropdown.Item>
      </DropdownButton>
    </div>
  );
};

export default Filters;
