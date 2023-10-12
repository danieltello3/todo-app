import React, { useState } from "react";
import "./todoList.scss";
import TodoItem from "../TodoItem/TodoItem";

const TodoList = () => {
   const [todos, setTodos] = useState([]);
   const [value, setValue] = useState("");

   const agregarTodo = () => {
      if (value?.trim() !== "") {
         setTodos([...todos, {id: todos.length + 1, text: value, completed: false}]);
      }
      setValue("");
   };

   const eliminarTodo = (index) => {
      const nuevosTodos = todos.filter((item) => item.id !== index);
      console.log(index);
      setTodos(nuevosTodos);
   };

   const handleEnterKey = (e) => {
    if (e.key === 'Enter') {
      agregarTodo();
    }
  }

   return (
      <div className="container-list">
         <h1>To-Do APP</h1>
         <div className="search">
            <input
               type="text"
               placeholder="Agregar una tarea"
               value={value}
               onChange={(e) => setValue(e.target.value)}
               onKeyUp={handleEnterKey}
            />
            <button onClick={agregarTodo}>Agregar</button>
         </div>
         <div className="items-list">
            {todos.sort((a,b)=> b.id - a.id).map((tarea, index) => (
               <TodoItem todo={tarea} key={tarea.id} onDelete={() => eliminarTodo(tarea.id)} />
            ))}
         </div>
      </div>
   );
};

export default TodoList;
