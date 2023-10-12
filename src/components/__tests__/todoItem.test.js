import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import TodoItem from '../TodoItem/TodoItem';

test('should render todo item', () => {
  const todo = { id: 1, text: 'Go to the gym', completed: false}
  render(<TodoItem todo={todo}/>);
  const todoElement = screen.getByTestId('todo-item-1');
  expect(todoElement).toBeInTheDocument();
  expect(todoElement).toHaveTextContent('Go to the gym');
});
