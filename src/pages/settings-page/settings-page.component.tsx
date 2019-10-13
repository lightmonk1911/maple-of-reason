import React from 'react';
import { routes } from '../../navigation/navigation';
import { block } from '../../../node_modules/bem-cn/lib/index.js';
import { NavBar } from '../../components/navbar/navbar.component';

const b = block('settings-page');
export const SettingsPage = () => (
  <>
    <NavBar routes={routes} />
    <div className={b('page-content').mix('page-content')}>
      Settings page content
    </div>
  </>
);
