import React from 'react';
import { useNavigate } from '../../hooks/useNavigate';

export const Link = ({ to, children, className }) => {
  const navigate = useNavigate();

  const onClick = (evt) => {
    evt.preventDefault();
    navigate(to);
  };

  return (
    <a onClick={onClick} href={to}>
      {children}
    </a>
  );
};
