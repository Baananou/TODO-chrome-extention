import React, { useState, useEffect } from 'react';
import { AiFillCloseSquare, AiOutlineCheckSquare } from 'react-icons/ai';

function Todo() {
    const [tasks, setTasks] = useState([]);
    const [taskText, setTaskText] = useState('');

    useEffect(() => {
        const storedTasks = localStorage.getItem('tasks');
        if (storedTasks) {
            setTasks(JSON.parse(storedTasks));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const addTask = () => {
        if (taskText.trim() !== '') {
            const updatedTasks = [...tasks, { text: taskText, done: false }];
            setTasks(updatedTasks);
            setTaskText('');
        }
    };

    const toggleDone = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks[index].done = !updatedTasks[index].done;
        setTasks(updatedTasks);
    };

    const removeTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };

    return (
        <div className="container mx-auto p-4 ">
            <div className="flex mb-4">
                <input
                    type="text"
                    className="border p-2 w-full rounded-lg"
                    placeholder="Enter task"
                    value={taskText}
                    onChange={(e) => setTaskText(e.target.value)}
                />
                <button
                    className="bg-blue-500 text-white px-4 py-2 ml-2 rounded-lg"
                    onClick={addTask}
                >
                    Add Task
                </button>
            </div>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index} className={` flex justify-between items-center border p-2 mb-2 rounded-md bg-white ${task.done ? 'line-through' : ''}`}>
                        <span onClick={() => toggleDone(index)} className="cursor-pointer">
                            {task.text}
                        </span>
                        <div className='items-center'>
                            <button
                                className="bg-green-500 rounded-lg text-white px-2 py-1 ml-2"
                                onClick={() => toggleDone(index)}
                            >
                                {task.done ? 'Undo' : 'Done'}
                                {/* {task.done ? <AiFillCloseSquare size={24} /> : <AiOutlineCheckSquare size={24} />} */}

                            </button>
                            <button
                                className="bg-red-500 rounded-lg text-white px-2 py-1 ml-2"
                                onClick={() => removeTask(index)}
                            >
                                Remove
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Todo;
