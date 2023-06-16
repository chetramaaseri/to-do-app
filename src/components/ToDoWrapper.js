import React, {useState} from 'react'
import { ToDoForm } from './ToDoForm'
import { EditToDoForm } from './EditToDoForm'
import {v4 as uuidv4} from 'uuid';
import { ToDo } from './ToDo';
uuidv4();

export const ToDoWrapper = () => {
  const [todos,setTodos] = useState([]);

  const addTodo =  todo =>{
    setTodos([...todos,{id :uuidv4(),task:todo,completed:false,isEditing:false}]);
  }

  const toggleCompleted = id =>{
     setTodos(todos.map(todo => todo.id === id ? {...todo,completed:!todo.completed}: todo));
  }
  const deleteTodo = id=>{
    setTodos(todos.filter(todo=> todo.id !== id))
  }
  const editTodo = id =>{
    setTodos(todos.map(todo=> todo.id === id ? {...todo,isEditing : !todo.isEditing}:todo))
  }
  const editTask = (id,task) =>{
    setTodos(todos.map(todo=> todo.id === id ? {...todo,isEditing: !todo.isEditing,task}: todo))
  }
  return (
    <div className='TodoWrapper'>
        <ToDoForm addTodo={addTodo} />
        {todos.map((todo) =>(
          todo.isEditing ? (
            <EditToDoForm key={todo.id} editTask={editTask} task={todo}/>
          ) : (
            <ToDo task={todo} key={todo.id} toggleCompleted={toggleCompleted} deleteTodo={deleteTodo} editTodo={editTodo} />
          )
        ))}
    </div>
  )
}
