import React from 'react';
import { INavBarProps } from './navbar.types';
import block from '../../../node_modules/bem-cn/lib/index';
import { Link } from 'react-router-dom';

const b = block('navbar');
export const NavBar: React.FunctionComponent<INavBarProps> = props => {
  const links = props.routes.map(route => (
    <React.Fragment key={route.linkText}>
      <Link className={b('link')} to={route.to}>
        {route.linkText}
      </Link>
      <br />
    </React.Fragment>
  ));
  return <nav className={b()}>{links}</nav>;
};
