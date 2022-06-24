import React, { useState } from 'react';
import Tasks from './components/Tasks';
import Header from './components/Header';
import AddTask from './components/AddTask';

const App = () => {
    const [tasks, setTasks] = useState([
        { id: 1, title: 'Task1', date: '01-10-2022', reminder: false },
        { id: 2, title: 'Task2', date: '01-8-2022', reminder: false },
        { id: 3, title: 'Task3', date: '01-4-2022', reminder: true },
    ]);

    const [displayAddTask, setDisplayAddTask] = useState(false);

    const handleDisplayAddTask = () => setDisplayAddTask(!displayAddTask);

    //Add Task
    const handleAddTask = (task) => {
        const id = Math.floor(Math.random() * 10000 + 1);
        const newTask = { id, ...task };
        setTasks([...tasks, newTask]);
    };

    //Delete Task
    const handleDelete = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    // Toggle Reminder
    const handleReminder = (id) => {
        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, reminder: !task.reminder } : task
            )
        );
    };

    return (
        <div className='grid grid-rows-[10vh_30_vh_60vh] gap-y-4 justify-items-center items-center'>
            <Header
                handleDisplay={handleDisplayAddTask}
                displayAdd={displayAddTask}
            />
            <AddTask displayTask={displayAddTask} addTask={handleAddTask} />
            <Tasks
                tasks={tasks}
                handleDelete={handleDelete}
                handleReminder={handleReminder}
            />
        </div>
    );
};

export default App;
