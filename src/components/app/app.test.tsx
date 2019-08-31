import { act } from 'react-dom/test-utils';
import ReactDOM from 'react-dom';
import React from 'react';
import App from './app';
const a = 21;

describe('tests works with ts', (): void => {
  test('shold just equal', (): void => {
    expect(a).toBe(21);
  });
});

describe('should change routes', (): void => {
  let container: HTMLElement | null;
  beforeEach((): void => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach((): void => {
    if (container) {
      document.body.removeChild(container);
    }
    container = null;
  });

  test('can render', (): void => {
    act((): void => {
      ReactDOM.render(<App />, container);
    });

    const navElement: HTMLElement | null = document.querySelector('nav');
    if (!navElement) {
      throw new Error('nav Element is null');
    }
    expect(navElement).toBeInstanceOf(HTMLElement);
    expect(navElement.querySelectorAll('a')).toHaveLength(4);
    let link = navElement.querySelectorAll('a')[1];
    expect(link).not.toBeFalsy();
    expect(link).toBeInstanceOf(HTMLAnchorElement);
    let linkNotNull = link;

    act(() => {
      linkNotNull.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    expect(
      ((navElement.parentElement as HTMLElement).lastChild as HTMLElement)
        .textContent
    ).toBe('Tree');

    link = navElement.querySelectorAll('a')[2];
    expect(link).not.toBeFalsy();
    expect(link).toBeInstanceOf(HTMLAnchorElement);
    linkNotNull = link;

    act(() => {
      linkNotNull.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    expect(
      ((navElement.parentElement as HTMLElement).lastChild as HTMLElement)
        .textContent
    ).toBe('Settings');
  });
});
