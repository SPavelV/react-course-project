import React from 'react';
import { useRoute } from '../../hooks/useRoute';

export const Routes = ({ children }) => {
  console.log('children :>> ', children);
  const route = useRoute();
  return (
    <>
      {children.find(
        (routeElement) =>
          !routeElement.props.path ||
          (route && routeElement.props.path.indexOf(route) !== -1)
      )}
    </>
  );
};
