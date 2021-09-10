import React from "react";
import Todo from "./Todo";
const TodoList = ({ todos, setTodos, filterTodo }) => {
  // console.log(todos);
  return (
    <div>
      <div className="todo-container">
        <ul className="todo-list">
          {filterTodo.map((todo) => (
            <Todo
              todos={todos}
              todo={todo}
              setTodos={setTodos}
              key={todo.id}
              text={todo.text}
              filterTodo={filterTodo}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
