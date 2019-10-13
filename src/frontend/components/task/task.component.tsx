import React from 'react';
import { ITaskProps } from './task.types';
import block from '../../../../node_modules/bem-cn/lib/index';

const b = block('task');
export const Task: React.FunctionComponent<ITaskProps> = props => {
  return (
    <div className={b() + ` ${props.className}`}>Task component works!</div>
  );
};
