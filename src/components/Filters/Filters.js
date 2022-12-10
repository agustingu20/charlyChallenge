import React from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';

const Filters = () => {
  return (
    <div className='mt-3 mb-5'>
      <DropdownButton id="dropdown-basic-button" title="Filtrar por status: ">
        <Dropdown.Item name='accepted'>Aceptados</Dropdown.Item>
        <Dropdown.Item name='declined'>Declinados</Dropdown.Item>
        <Dropdown.Item name='pending'>Pendientes</Dropdown.Item>
      </DropdownButton>
    </div>
  );
};

export default Filters;
