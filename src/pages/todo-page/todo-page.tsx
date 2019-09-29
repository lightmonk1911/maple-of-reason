import React from 'react';
import { NavBar } from '../../components/navbar/index';
import { routes } from '../../navigation/navigation';

export const ToDoPage = () => (
  <>
    <NavBar routes={routes} />
    <div className="page-content todo-page-content">Todo page content</div>
  </>
);
