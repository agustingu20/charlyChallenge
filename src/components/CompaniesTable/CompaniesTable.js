import React from 'react';
import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { companies } from '../../assets/companiesArray';

const CompaniesTable = () => {
  const { filteredCompanies } = useSelector((state) => state);
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Id</th>
          <th>Status</th>
          <th>Name</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {!filteredCompanies?.value?.length
          ? companies.map((company) => (
              <tr key={`companyId-${company.id}`}>
                <td>{company.id}</td>
                <td>{company.status}</td>
                <td>{company.name}</td>
                <td>{company.date}</td>
              </tr>
            ))
          : filteredCompanies.value.map((company) => (
              <tr key={`companyId-${company.id}`}>
                <td>{company.id}</td>
                <td>{company.status}</td>
                <td>{company.name}</td>
                <td>{company.date}</td>
              </tr>
            ))}
      </tbody>
    </Table>
  );
};

export default CompaniesTable;
