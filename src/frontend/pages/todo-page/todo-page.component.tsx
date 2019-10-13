import React, { useEffect, useState } from 'react';
import { routes } from '../../navigation/navigation';
import { block } from '../../../../node_modules/bem-cn/lib/index.js';
import { NavBar } from '../../components/navbar/navbar.component';
import { ITask } from '../../components/task/task.types';
import { Task } from '../../components/task/task.component';

const b = block('todo-page');

export const ToDoPage = () => {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const fetchTasks = async () => {
    const res = await fetch('/api/tasks');
    const tasks: ITask[] = await res.json();
    setTasks(tasks);
  };
  useEffect(() => {
    fetchTasks();
  }, []);
  return (
    <>
      <NavBar routes={routes} />
      <div className={b('page-content').mix('page-content')}>
        <ul className={b('tasks-list')}>
          {tasks.map(task => {
            const { id, name, duration } = task;
            return <Task key={id} duration={duration} name={name} id={id} />;
          })}
        </ul>
      </div>
    </>
  );
};
