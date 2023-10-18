import React,{useState} from 'react'

export const EditTodoForm = ({editTodo,task}) => {

    const [val,setVal] = useState(task.task);

    const handleSubmit= e =>{
        e.preventDefault();

        editTodo(val,task.id); 
        setVal("")
    }
  return (
    <div>
        <form className='TodoForm' onSubmit={handleSubmit}>
            <input type='text' className='todo-input' placeholder='Update Task' value={val} onChange={(e)=>setVal(e.target.value) } />
            <button className='todo-button' type='submit'>
                Update Task
            </button>

        </form>
    
    </div>
  )
}
