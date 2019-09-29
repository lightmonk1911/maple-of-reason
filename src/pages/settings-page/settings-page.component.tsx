import React from 'react';
import { NavBar } from '../../components/navbar/index';
import { routes } from '../../navigation/navigation';
import { block } from '../../../node_modules/bem-cn/lib/index.js';

const b = block('settings-page');
export const SettingsPage = () => (
  <>
    <NavBar routes={routes} />
    <div className={b('page-content').mix('page-content')}>
      Settings page content
    </div>
  </>
);
