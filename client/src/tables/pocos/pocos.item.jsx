import React from 'react';
import { useParams } from 'react-router-dom';

const PocosItem = () => {
  const { id } = useParams();

  return <h3>{id}</h3>;
};

export default PocosItem;
