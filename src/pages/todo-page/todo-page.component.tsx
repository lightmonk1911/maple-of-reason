import React from 'react';
import { NavBar } from '../../components/navbar/index';
import { routes } from '../../navigation/navigation';
import { block } from '../../../node_modules/bem-cn/lib/index.js';

const b = block('todo-page');

export const ToDoPage = () => (
  <>
    <NavBar routes={routes} />
    <div className={b('page-content').mix('page-content')}>
      Todo page content
    </div>
  </>
);
