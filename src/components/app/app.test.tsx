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
  let nav: HTMLElement | null;
  let navLinks: NodeListOf<HTMLAnchorElement>;
  beforeEach((): void => {
    container = document.createElement('div');
    document.body.appendChild(container);

    act((): void => {
      ReactDOM.render(<App />, container);
    });

    nav = document.querySelector('nav');
    if (!nav) throw new Error('nav is falsy! nav:' + nav);
    navLinks = nav.querySelectorAll('a');
    expect(navLinks).toHaveLength(4);
    if (!navLinks.length) return;
  });

  afterEach((): void => {
    if (container) {
      document.body.removeChild(container);
    }
    container = null;
  });

  test('can navigate to settings page', (): void => {
    expect(
      container && container.lastChild && container.lastChild.textContent
    ).toBe('Todo page content');

    const settingsLink = navLinks[2];
    expect(settingsLink.textContent).toBe('Settings');

    act(() => {
      settingsLink.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    const settingsPageContent = document.querySelector('.page-content');
    if (!settingsPageContent)
      throw new Error('pageContent is falsy! pageContent:' + nav);
    expect(
      settingsPageContent.classList.contains('settings-page__page-content')
    ).toBe(true);
  });

  test('can navigate to timeline page', (): void => {
    const timelineLink = navLinks[3];
    expect(timelineLink.textContent).toBe('Timeline');

    act(() => {
      timelineLink.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    const timelinePageContent = document.querySelector('.page-content');
    if (!timelinePageContent)
      throw new Error('pageContent is falsy! pageContent:' + nav);
    expect(
      timelinePageContent.classList.contains('timeline-page__page-content')
    ).toBe(true);
  });

  describe('navigate after navigation to timeline', () => {
    beforeEach(() => {
      const timelineLink = navLinks[3];

      act(() => {
        timelineLink.dispatchEvent(new MouseEvent('click', { bubbles: true }));
      });

      const timelinePageContent = document.querySelector('.page-content');
      if (!timelinePageContent)
        throw new Error('pageContent is falsy! pageContent:' + nav);
    });

    test('should be correctly initialized', () => {
      expect(
        container && container.lastChild && container.lastChild.textContent
      ).toBe('Timeline page content');
    });

    test('should navigate to setting', () => {
      const settingsLink = navLinks[2];
      expect(settingsLink.textContent).toBe('Settings');
  
      act(() => {
        settingsLink.dispatchEvent(new MouseEvent('click', { bubbles: true }));
      });
  
      const settingsPageContent = document.querySelector('.page-content');
      if (!settingsPageContent)
        throw new Error('pageContent is falsy! pageContent:' + nav);
      expect(
        settingsPageContent.classList.contains('settings-page__page-content')
      ).toBe(true);
    });
  });
});
