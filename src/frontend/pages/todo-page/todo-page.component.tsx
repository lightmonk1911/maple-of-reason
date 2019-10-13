import React from 'react';
import { routes } from '../../navigation/navigation';
import { block } from '../../../../node_modules/bem-cn/lib/index.js';
import { NavBar } from '../../components/navbar/navbar.component';

const b = block('todo-page');

export const ToDoPage = () => (
  <>
    <NavBar routes={routes} />
    <div className={b('page-content').mix('page-content')}>
      Todo page content
    </div>
  </>
);
