import { useState } from 'react';
import { TodoInput } from './TodoInput';
import { TodoList } from './TodoList';
import { TodoListItem } from './TodoListItem';

function Todo() {
  const [todos, setTodos] = useState(['Angular', 'React']);

  function handleOnCreate(newTodo) {
    const temp = [...todos];
    temp.push(newTodo);
    setTodos(temp);
  }

  function handleDelete(item, index) {
    const copy = todos.slice();
    copy.splice(index, 1);
    setTodos(copy);
    console.log(copy);
  }

  return (
    <div>
      <TodoInput onCreate={handleOnCreate} />
      <TodoList todos={todos} onDelete={handleDelete} />
    </div>
  );
}

export { Todo };
