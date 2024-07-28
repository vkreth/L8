import React, { useState } from 'react';
import './App.css';

function Vara() {
  const [Trich, Tiru] = useState([]);
  const [Coim, poll] = useState('');
  const [hyd, vzg] = useState(null);
  const [kdk, rmm] = useState('');

  const handleAddTask = () => {
    if (Coim.trim()) {
      Tiru([...Trich, Coim.trim()]);
      poll('');
    }
  };

  const handleEditTask = (index) => {
    vzg(index);
    rmm(Trich[index]);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = Trich.filter((_, i) => i !== index);
    Tiru(updatedTasks);
  };

  const handleSaveTask = (index) => {
    const updatedTasks = Trich.map((task, i) => (i === index ? kdk : task));
    Tiru(updatedTasks);
    vzg(null);
    rmm('');
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <div>
        <input
          type="text"
          value={Coim}
          onChange={(e) => poll(e.target.value)}
          placeholder="Enter a new task"
        />
        <button className="add-task" onClick={handleAddTask}>Add Task</button>
      </div>
      <ul>
        {Trich.map((task, index) => (
          <li key={index}>
            {hyd === index ? (
              <div>
                <input
                  type="text"
                  value={kdk}
                  onChange={(e) => rmm(e.target.value)}
                />
                <button className="save-task" onClick={() => handleSaveTask(index)}>Save</button>
              </div>
            ) : (
              <div>
                {task}
                <button className="edit-task" onClick={() => handleEditTask(index)}>Edit</button>
                <button className="delete-task" onClick={() => handleDeleteTask(index)}>Delete</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Vara;
