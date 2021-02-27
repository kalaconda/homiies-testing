import React from 'react';
import { FaRegCircle } from 'react-icons/fa';

const TodoItem = ({todos, removeTodo}) => {
    return(
        <>
        {todos.map(todoItem => (
                <div key={todoItem.todoId} className="todoItem">
                    <div className="decorline"></div>
                    <span className="check" onClick={() => removeTodo(todoItem.todoId)}><FaRegCircle /></span>
                    <p>{todoItem.todoText}</p>
                </div>
        ))}
        </>
    );
};

export default TodoItem;