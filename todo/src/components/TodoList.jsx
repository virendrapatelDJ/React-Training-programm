import React from 'react';
import { TodoListItem } from './TodoListItem';

function TodoList(props) {
  const { todos = [], onDelete } = props;
  return (
    <ul>
      {todos.map((item, index) => (
        <TodoListItem
          item={item}
          onDelete={() => {
            onDelete(item, index);
          }}
        />
      ))}
    </ul>
  );
}

export { TodoList };
