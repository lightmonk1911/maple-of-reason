import React from 'react';
import { ITaskProps } from './task.types';
import block from '../../../../node_modules/bem-cn/lib/index';

const b = block('task');
export const Task: React.FunctionComponent<ITaskProps> = props => {
  const { name, id, duration } = props;
  return (
    <div className={b() + ` ${props.className}`}>
      <h3 className={b('name')}>{name}</h3>
      <div className={b('id')}>{id}</div>
      <div className={b('duration')}>{duration}</div>
    </div>
  );
};
