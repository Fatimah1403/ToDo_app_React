import {useState} from 'react'

function Todoform({addTodo}) {
    const [value, setValue] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(value)
        setValue("")
    }

  return (
    <form className='TodoForm'onSubmit={handleSubmit}>
      <input type="text"
      className='todo-input'
      value={value}
      placeholder='Enter your task here'
      onChange={(e) => setValue(e.target.value)}/>
      <button type='submit' className='todo-btn'>Add Task</button>
    </form>
  )
}

export default Todoform
