import { act } from 'react-dom/test-utils';
import ReactDOM from 'react-dom';
import React from 'react';
import { NavBar } from './navbar.component';
import { BrowserRouter } from 'react-router-dom';
import { ToDoPage } from '../../pages/todo-page/todo-page.component';
import { TreePage } from '../../pages/tree-page/tree-page.component';
import { SettingsPage } from '../../pages/settings-page/settings-page.component';
import { TimelinePage } from '../../pages/timeline-page/timeline-page.component';

const routes = [
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

describe('should render with bem', (): void => {
  let container: HTMLElement | null;
  beforeEach((): void => {
    container = document.createElement('div');
    document.body.appendChild(container);

    act((): void => {
      ReactDOM.render(
        <BrowserRouter>
          <NavBar routes={routes} />
        </BrowserRouter>,
        container
      );
    });
  });

  afterEach((): void => {
    if (container) {
      document.body.removeChild(container);
    }
    container = null;
  });

  test('should have mixed class', () => {
    const element = container && container.querySelector('.navbar');
    expect(element).toBeInstanceOf(Element);
    if (!element) return;
    expect(element.classList.contains('mix'));
  });
});
