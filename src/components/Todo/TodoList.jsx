import React, { useEffect, useState } from "react";
import "./todoList.scss";
import TodoItem from "../TodoItem/TodoItem";

const TodoList = () => {
   const [todos, setTodos] = useState([]);
   const [todo, setTodo] = useState({text:'', completed: false,id: 0});

   const agregarTodo = () => {
      if (todo.text?.trim() !== "") {
         setTodos([...todos, {id: todos.length + 1, text: todo.text, completed: false}]);
         setTodo("");
      }
   };

   const handleChange = (e) => {
    e.preventDefault();
    setTodo({
      ...todo,
      text: e.target.value,
    });
   }

   const eliminarTodo = (index) => {
      const nuevosTodos = todos.filter((item) => item.id !== index);
      console.log(index);
      setTodos(nuevosTodos);
   };

   useEffect(()=>{
    setTodos([...todos, { id: 1, text: 'Go to the gym', completed: false}])
   },[])

   return (
      <div className="container-list">
         <h1>To-Do APP</h1>
         <div className="search">
            <input
               type="text"
               placeholder="Agregar una tarea"
               value={todo.text}
               onChange={handleChange}
            />
            <button onClick={agregarTodo}>Agregar</button>
         </div>
         <div className="items-list">
            {todos.map((tarea, index) => (
               <TodoItem todo={tarea} key={tarea.id} onDelete={() => eliminarTodo(tarea.id)} />
            ))}
         </div>
      </div>
   );
};

export default TodoList;
