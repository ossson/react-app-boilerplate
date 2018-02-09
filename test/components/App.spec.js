import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import expect from 'expect';
import App from '../../src/components/App';

describe('App', () => {
  it('renders without problems', () => {
    const app = ReactTestUtils.renderIntoDocument(<App />);
    expect(app).toBeTruthy();
  })
})
