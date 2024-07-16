import React from 'react';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import TodoItem from '../TodoItem/TodoItem';

afterEach(() => {
  cleanup();
});

test('debe renderizar todo item incompleto', () => {
  const todo = { id: 1, text: 'Ir al gimnasio', completed: false}
  render(<TodoItem todo={todo}/>);
  const todoElement = screen.getByTestId('todo-item-1');
  expect(todoElement).toBeInTheDocument();
  expect(todoElement).toHaveTextContent('Ir al gimnasio');
});

test('debe renderizar todo item completado', () => {
  const todo = { id: 2, text: 'Lavar el carro', completed: true}
  render(<TodoItem todo={todo}/>);
  const todoElement = screen.getByTestId('todo-item-2');
  expect(todoElement).toBeInTheDocument();
  expect(todoElement).toHaveTextContent('Lavar el carro');
});

test('debe llamar a la función onDelete al hacer clic en el botón de eliminar', () => {
  const todo = { id: 3, text: 'Comprar leche', completed: false };
  const onDelete = jest.fn();
  render(<TodoItem todo={todo} onDelete={()=> onDelete(todo.id)} />);
  const deleteButton = screen.getByTestId('delete-button-3');
  fireEvent.click(deleteButton);
  expect(onDelete).toHaveBeenCalledWith(3);
});
