import { RouteProps } from 'react-router';
import { ToDoPage } from '../pages/todo-page/todo-page.component';
import { TreePage } from '../pages/tree-page/tree-page.component';
import { SettingsPage } from '../pages/settings-page/settings-page.component';
import { TimelinePage } from '../pages/timeline-page/timeline-page.component';

export interface IRoute extends RouteProps {
  linkText: string;
  to: string;
}

export interface INavigationProps {
  routes: IRoute[];
}

export const routes: IRoute[] = [
  { to: '/', path: '/', component: ToDoPage, linkText: 'ToDo', exact: true },
  { to: '/tree', path: '/tree', component: TreePage, linkText: 'Tree' },
  {
    component: SettingsPage,
    linkText: 'Settings',
    path: '/settings',
    to: '/settings'
  },
  {
    component: TimelinePage,
    to: '/timeline',
    path: '/timeline',
    linkText: 'Timeline'
  }
];
