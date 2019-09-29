import React from 'react';
import { NavBar } from '../../components/navbar/index';
import { routes } from '../../navigation/navigation';

export const TreePage = () => (
  <>
    <NavBar routes={routes} />
    <div className="page-content tree-page-content">Tree page content</div>
  </>
);
