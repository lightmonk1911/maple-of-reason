import React from 'react';

import { Link } from 'react-router-dom';
import { INavigationProps } from '../../navigation/navigation';

export const NavBar: React.FunctionComponent<INavigationProps> = (props) => {
  const links = props.routes.map((route) => (
    <React.Fragment key={route.linkText}>
      <Link to={route.to}>{route.linkText}</Link>
      <br />
    </React.Fragment>
  ));
  return <nav>{links}</nav>;
};
