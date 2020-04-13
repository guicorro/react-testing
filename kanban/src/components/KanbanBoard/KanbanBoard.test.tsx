import React from 'react';
import { render } from '@testing-library/react';
import KanbanBoard from './KanbanBoard';

test('renders learn react link', () => {
  const { getByText } = render(<KanbanBoard />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
