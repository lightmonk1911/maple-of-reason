import React from 'react';
import { NavBar } from '../../components/navbar/index';
import { routes } from '../../navigation/navigation';

export const TimelinePage: React.FunctionComponent = () => (
  <>
    <NavBar routes={routes} />
    <div className="page-content timeline-page-content">
      Timeline page content
    </div>
  </>
);
