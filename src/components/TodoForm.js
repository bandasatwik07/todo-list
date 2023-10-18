import React,{useState} from 'react'

export const TodoForm = ({addTodo}) => {

    const [val,setVal] = useState("");

    const handleSubmit= e =>{
        e.preventDefault();

        addTodo(val); 
        setVal("")
    }
  return (
    <div>
        <form className='TodoForm' onSubmit={handleSubmit}>
            <input type='text' required className='todo-input' placeholder='What is your task today?' value={val} onChange={(e)=>setVal(e.target.value) } />
            <button className='todo-button' type='submit'>
                Add Task
            </button>

        </form>
    
    </div>
  )
}
