import React from 'react';
import { useParams } from 'react-router-dom';

const TableItem = () => {
  const { id } = useParams();

  return <h3>{id}</h3>;
};

export default TableItem;
