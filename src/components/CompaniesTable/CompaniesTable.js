import React from 'react';
import { Table } from 'react-bootstrap';
import { companies } from '../../assets/companiesArray';

const CompaniesTable = () => {
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
        {companies.map((company) => (
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
