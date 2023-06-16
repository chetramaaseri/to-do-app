import React,{useState} from 'react'

export const ToDoForm = ({addTodo}) => {
    const [value,setvalue] = useState("");
    const handleSubmit = (e)=>{
        e.preventDefault();
        addTodo(value);
        setvalue("");
    }
  return (
    <form className='ToDoForm' onSubmit={handleSubmit}>
        <input onChange={(e)=>{setvalue(e.target.value)}} type="text" className='todo-input' value={value} placeholder='Enter Task Here' />
        <button type='submit' className='todo-btn'>Add Task</button>
    </form>
  )
}
