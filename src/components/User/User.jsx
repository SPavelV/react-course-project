import React from 'react';

export const User = ({ name, onClick }) => {
  return (
    <div>
      {name} <button onClick={() => onClick(name)}>clickMe</button>
    </div>
  );
};
