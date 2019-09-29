import React, { ReactElement } from 'react';

import { Link } from 'react-router-dom';
import { INavigationProps } from '../../navigation/navigation';
import block from '../../../node_modules/bem-cn/lib/index';
const b = block('navbar');

export const NavBar: React.FunctionComponent<INavigationProps> = (
  props: INavigationProps
): ReactElement => {
  const links = props.routes.map(
    (route): ReactElement => (
      <React.Fragment key={route.linkText}>
        <Link className={b('link')} to={route.to}>
          {route.linkText}
        </Link>
        <br />
      </React.Fragment>
    )
  );
  return <nav className={b}>{links}</nav>;
};
