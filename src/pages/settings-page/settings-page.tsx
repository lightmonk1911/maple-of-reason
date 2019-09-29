import React from 'react';
import { NavBar } from '../../components/navbar/index';
import { routes } from '../../navigation/navigation';

export const SettingsPage = () => (
  <>
    <NavBar routes={routes} />
    <div className="page-content settings-page-content">
      Settings page content
    </div>
  </>
);
