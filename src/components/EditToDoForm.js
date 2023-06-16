import React,{useState} from 'react'

export const EditToDoForm = ({task,editTask}) => {
  const [value,setvalue] = useState(task.task);
  const handleSubmit = (e)=>{
      e.preventDefault();
      editTask(task.id,value);
  }
  return (
    <form className='ToDoForm' onSubmit={handleSubmit}>
        <input onChange={(e)=>{setvalue(e.target.value)}} type="text" className='todo-input' value={value} placeholder='Update Task' />
        <button type='submit' className='todo-btn'>update Task</button>
    </form>
  )
}
