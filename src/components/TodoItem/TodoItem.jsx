import React from "react";
import "./todoItem.scss";

const TodoItem = ({ todo, onDelete }) => {
  const {id, text } = todo;
   return (
      <div className="container" data-testid={`todo-item-${id}`}>
         <div className="text">{text}</div>
         <div className="icon" onClick={onDelete}>
            <span className="material-icons">delete</span>
         </div>
      </div>
   );
};

export default TodoItem;
