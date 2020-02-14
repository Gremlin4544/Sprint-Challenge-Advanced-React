import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { render, fireEvent } from '@testing-library/react';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

it('Renders an h1 with FIFA Womens World Cup Players', () => {
  const { getByText } = render(<App />);
  const h1Element = getByText(/toggle dark mode/i);
  // expect(h1Element).toBeInTheDocument();
})

test('Test that players title is rendered to the screen', () => {
  const {getByTestId} = render(<App />);
});

test('Test that dark mode button is rendered to the screen', () => {
  const {getByTestId} = render(<App />);
});
