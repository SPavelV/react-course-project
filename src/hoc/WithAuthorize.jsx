import React from 'react';

export const WithAuthorize = ({
  ComponentAuthorized,
  ComponentUnAuthorized,
}) => {
  const WrappedComponentWithAuthorization = (props) => {
    // check is user authorized
    const isAuth = true;

    if (isAuth) {
      WrappedComponentWithAuthorization.displayName = `WithAuthorization${ComponentAuthorized.name}`;
      return <ComponentAuthorized {...props} />;
    } else {
      WrappedComponentWithAuthorization.displayName = `WithAuthorization${ComponentUnAuthorized.name}`;
      return <ComponentUnAuthorized {...props} />;
    }
  };

  return WrappedComponentWithAuthorization;
};
