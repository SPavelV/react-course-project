import React from 'react';

export const Tab = ({ name, onClick }) => {
  return <button onClick={onClick}>{name}</button>;
};
