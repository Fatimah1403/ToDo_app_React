import {useState} from 'react'
import Todoform from './Todoform'
import Todo from './Todo'
import { v4 as uuidv4 } from 'uuid';
import EditTodoForm from './EditTodoForm';
uuidv4();

function TodoWrapper() {
    const [todos, setTodos] = useState([]);
    const [showCompleted, setShowCompleted] = useState(false);
    const toggleShowCompleted = () => {
        setShowCompleted(!showCompleted);
    };

    const addTodo = todo => {
        setTodos([...todos, {id: uuidv4(), task: todo,
        completed: false, isEditing: false}])
        console.log(todos)
    } 
    const toggleComplete = id => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo))

    }
    const deleteTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id))
    }
    const editTodo = id => {
      setTodos(todos.map(todo => todo.id === id ? {...
        todo, isEditing: !todo.isEditing} : todo))  
    }
    const editTask = (task, id) => {
        setTodos(todos.map(todo => todo.id === id ? {...
        todo, task, isEditing: !todo.isEditing} : todo))
    }
    return (
        <div className='TodoWrapper'>
            <h1>Todo Lists</h1>
            <Todoform addTodo={addTodo} />
            {/* Toggle button to show/hide completed task */}
            <button onClick={toggleShowCompleted}>
                {showCompleted ? 'Hide Completed' : 'Show completed'}
            </button>
              {/* Display todos based on showCompleted state */}
            {todos.map((todo, index) => (
                (showCompleted || !todo.completed) && (
                    todo.isEditing ? (
                        <EditTodoForm editTodo={editTask} task=
                        {todo} />
                    ) : (
                        <Todo task={todo} key={index} 
                        toggleComplete={toggleComplete}
                        deleteTodo={deleteTodo}
                        editTodo={editTodo} />
                    )
                    
                )
                
            ))}

        </div>
    )
}

export default TodoWrapper
