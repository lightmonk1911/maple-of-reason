import { act } from 'react-dom/test-utils';
import ReactDOM from 'react-dom';
import React from 'react';
import { Task } from './task.component';
import { tasks } from '../../../backend/tasks';

describe('should render with bem', (): void => {
  let container: HTMLElement | null;
  beforeEach((): void => {
    container = document.createElement('div');
    document.body.appendChild(container);

    act((): void => {
      ReactDOM.render(<Task {...tasks[0]} className="mix" />, container);
    });
  });

  afterEach((): void => {
    if (container) {
      document.body.removeChild(container);
    }
    container = null;
  });

  test('should have mixed class', () => {
    const element = container && container.querySelector('.task');
    expect(element).toBeInstanceOf(Element);
    if (!element) return;
    expect(element.classList.contains('mix'));
  });
});
