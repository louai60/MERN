import React, { useState } from 'react';
import './style.css'


function TodoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    const handleAddTask = () => {
        if (newTask !== '') {
        setTasks([...tasks, { id: tasks.length + 1, text: newTask, completed: false }]);
        setNewTask('');
        }
    };

    const handleRemoveTask = (taskId) => {
        setTasks(tasks.filter((task) => task.id !== taskId));
    };

    const handleToggleTask = (taskId) => {
        setTasks(
        tasks.map((task) =>
            task.id === taskId ? { ...task, completed: !task.completed } : task
        )
        );
    };

    return (
        <div className='container'>
            <div>
                <input
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    placeholder="Add new task"
                />
          
                <button className='add' onClick={handleAddTask}>Add</button>
            </div>
            <ul>
                {tasks.map((task) => (
                <li key={task.id}>
                    <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                        {task.text}
                    </span>
                    <input
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => handleToggleTask(task.id)}
                    />
                    <button className='delete' onClick={() => handleRemoveTask(task.id)}>Delete</button>
                </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList

