import React, { useState } from "react";

export default function TodoApp(){
    const [tasks, setTasks] = useState([]);
    const [text, setText] = useState("");

    function addTask(){
        if(text.trim()){
            setTasks([...tasks, { text, completed: false }]);
            setText("");
        }
    }

    function toggleTask(index) {
        const updatedTasks = tasks.map((task, i) => 
            i === index ? { ...task, completed: !task.completed } : task
        );
        setTasks(updatedTasks);
    }

    function deleteTask(index) {
        setTasks(tasks.filter((_, i) => i !== index));
    }
    return(
        <div className="container"> 
        <h3>To-Do-List</h3>
        <div style={{display: 'flex', gap: '10px', marginBottom: '15px'}}>
          <input className="input"
                 value={text}
                 onChange={e => setText(e.target.value)}
                 placeholder="New task"
                 style={{flex: 1}}
          />
          <button className="add" onClick={addTask} style={{width: '80px'}}>Add</button>
        </div>
          <ul>
            {tasks.map((task, i) => (
              <li key={i} style={{ textDecoration: task.completed ? 'line-through' : 'none', opacity: task.completed ? 0.7 : 1 }}>
                <input 
                  type="checkbox" 
                  checked={task.completed} 
                  onChange={() => toggleTask(i)}
                  style={{ marginRight: '10px' }}
                />
                {task.text}
                <button 
                  className="del" 
                  onClick={() => deleteTask(i)}
                  style={{ float: 'right' }}
                >
                  Delete
                </button> 
              </li>
            ))}
          </ul>
        </div>
    );
        
}