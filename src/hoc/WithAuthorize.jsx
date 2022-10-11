import React from 'react';

export const WithAuthorize = ({
  ComponentAuthorized,
  ComponentUnAuthorized,
}) => {
  const WrappedComponentWithAuthorization = (props) => {
    // check is user authorized
    const isAuth = false;

    if (isAuth) {
      WrappedComponentWithAuthorization.displayName = 'ComponentAuthorized';
      return <ComponentAuthorized {...props} />;
    } else {
      WrappedComponentWithAuthorization.displayName = 'ComponentUnAuthorized';
      return <ComponentUnAuthorized {...props} />;
    }
  };

  return WrappedComponentWithAuthorization;
};
