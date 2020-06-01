import React from 'react';
import Todo from './Todo';
import PropTypes from 'prop-types';

const TodoList = ({ todos, handleDelete, handleDone }) => {
  return (
    <div>
      {todos.map((task, key) => (
        <Todo
          task={task}
          key={key}
          handleDelete={handleDelete}
          handleDone={handleDone}
        />
      ))}
    </div>
  );
};
Todo.propTypes = {
  todos: PropTypes.object,
  handleDelete: PropTypes.func,
  handleDone: PropTypes.func,
};

export default TodoList;
