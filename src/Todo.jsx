import React,{useState} from 'react'
import './ToDo.css'

const Todo = () => {
    const [tasks,setTasks] = useState([]);
    const [newTask,setNewTask] = useState('');
    const [editTask,setEditTask] = useState(false);

    const AddItem = () => {
        if (editTask !== false) {
            const updatedTasks = [...tasks];
            updatedTasks[editTask] = newTask;
            setTasks(updatedTasks);
            setEditTask(false); 
          } else {
            setTasks([...tasks, newTask]);
          }
             setNewTask('');
        };
    

    const removeItem = (i) => {
        const updatedTasks = [...tasks];
        updatedTasks.splice(i, 1);
        setTasks(updatedTasks);
        setEditTask(false);
      };

      
  const editItem = (i) => {
    setNewTask(tasks[i]);
    setEditTask(i);
  };
    
  return (
    <>   
    <div className='main-container'>
    <div className='main'>
         <h1 className='heading'>My ToDo</h1>
        <input type="text" placeholder='Enter your task..' value={newTask} onChange={(e)=>setNewTask(e.target.value)}/>
        <button className='add-btn' onClick={AddItem}>Add</button>
        <br />
        {tasks.map((task, i) => (
          <div className='box' key={i}>
          <div className='task'>
              <p>
                {task}
              </p> 
          </div>
            <button className='add-btn' onClick={AddItem}>Add</button>
            <button className="edit-btn" onClick={()=>editItem(i)}>Edit</button>
            <button className="remove-btn" onClick={()=>removeItem(i)}>Remove</button>
          </div>
        ))}
    </div>
    </div>
    </>

  )
}

export default Todo;