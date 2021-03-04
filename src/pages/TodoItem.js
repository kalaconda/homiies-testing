import React from 'react';
import { FaRegCircle } from 'react-icons/fa';
import { BiDotsVerticalRounded } from 'react-icons/bi';

const TodoItem = ({todos, removeTodo}) => {
    return(
        <>
        {todos.map(todoItem => (
                <div key={todoItem.todoId} className="todoItem">
                    <span className="check" onClick={() => removeTodo(todoItem.todoId)}><FaRegCircle /></span>
                    <p>{todoItem.todoText}</p>
                    <span className="moreopt" onClick={() => removeTodo(todoItem.todoId)}><BiDotsVerticalRounded /></span>
                </div>
        ))}
        </>
    );
};

export default TodoItem;