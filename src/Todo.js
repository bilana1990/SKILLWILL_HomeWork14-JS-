import React, { memo } from 'react';

const Todo = memo(({ todo, index, removeTodo }) => {
  return (
    <div className="todo" onClick={() => removeTodo(index)}>
      {todo.text}
    </div>
  );
});

export default Todo;