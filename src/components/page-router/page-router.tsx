import React from 'react';
import { Route } from 'react-router';
import { INavigationProps } from '../../navigation/navigation';

export const PageRouter: React.FunctionComponent<INavigationProps> = (props) => {
  const renderRoutes = props.routes.map((route) => (
    <Route
      key={route.linkText}
      path={route.path}
      exact={true}
      component={route.component}
    />
  ));
  return <>{renderRoutes}</>;
};
