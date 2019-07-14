import React from 'react';
import { Link, Route } from 'react-router-dom';

const ToDo = () => <>To do</>;
const Tree = () => <>Tree</>;
const Settings = () => <>Settings</>;

interface IRoute {
  path: string;
  linkText: string;
  component: React.ComponentType;
}

interface INavigationProps {
  routes: IRoute[];
}

export const routes: IRoute[] = [
  { path: '/', component: ToDo, linkText: 'ToDo' },
  { path: '/tree', component: Tree, linkText: 'Tree' },
  { path: '/settings', component: Settings, linkText: 'Settings' },
];

export const NavBar: React.FunctionComponent<INavigationProps> = (props) => {
  const links = props.routes.map((route) => (
    <React.Fragment key={route.linkText}>
      <Link to={route.path}>{route.linkText}</Link>
      <br />
    </React.Fragment>
  ));
  return <nav>{links}</nav>;
};

export const PageRouter: React.FunctionComponent<INavigationProps> = (props) => {
  const renderRoutes = props.routes.map((route) => (
    <Route
      key={route.path}
      path={route.path}
      exact={true}
      component={route.component}
    />
  ));
  return <>{renderRoutes}</>;
};

export default PageRouter;
