import React from 'react';
import { useRoute } from '../../hooks/useRoute';

export const Route = ({ path, element }) => {
  const route = useRoute();

  if (!path || !route || path.indexOf(route) === -1) {
    return null;
  }

  return element;
};
