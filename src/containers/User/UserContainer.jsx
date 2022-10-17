import React from 'react';
import { useSelector } from 'react-redux';
import { User } from '../../components/User/User';
import { selectUserById } from '../../store/entities/users/selectors';

export const UserContainer = ({ id }) => {
  const user = useSelector((state) => selectUserById(state, { id }));

  if (!user) return null;
  return <User name={user.name} />;
};
