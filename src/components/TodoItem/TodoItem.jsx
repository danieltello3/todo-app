import React from "react";
import "./todoItem.scss";

const TodoItem = ({ todo, onDelete, onCompleted}) => {
   const { id, text, completed } = todo;

   return (
      <div className={`container ${completed ? 'completed' : null}`} data-testid={`todo-item-${id}`}>
         <div className="icon" onClick={onCompleted}>
            <span className={`material-icons ${completed ? 'white' : null}`}>check_circle</span>
         </div>
         <div className="text">{text}</div>
         <div className="icon" onClick={onDelete} data-testid={`delete-button-${id}`}>
            <span className={`material-icons ${completed ? 'white' : null}`}>delete</span>
         </div>
      </div>
   );
};

export default TodoItem;
