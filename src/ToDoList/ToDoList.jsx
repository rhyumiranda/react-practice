/* eslint-disable no-unused-vars */
import React, { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState(["Eat Breakfast", "Pet Dog", "Feed Cat"]);
  const [newTasks, setNewTasks] = useState("");

  function handleTasks() {
    setTasks(n => [...n, newTasks]);
    document.getElementById('task-input').value = "";
  }

  function handleAddNewTasks(event) { 
    setNewTasks(event.target.value);
  }

  function taskMoveUp(index) {
    if(index > 0){
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] =
      [updatedTasks[index - 1], updatedTasks[index]];

      setTasks(updatedTasks);
    }
  }

  function taskMoveDown(index) {
    if(index < tasks.length - 1){
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] =
      [updatedTasks[index + 1], updatedTasks[index]];

      setTasks(updatedTasks);
    }
  }

  function deleteTask(index) {
    const updatedTask = tasks.filter((_, i) => i !== index);
    setTasks(updatedTask);
  }

  return (
    <>
      <div>
        <input type="text" id="task-input" onChange={handleAddNewTasks}/>
        <button onClick={handleTasks}>Add</button>
      </div>
      <div>
        <ul>
          {tasks.map((task, index) => 
          <li key={index}>
            {task} 
            <button onClick={() => deleteTask(index)}>❌</button>
            <button onClick={() => taskMoveUp(index)}>☝️</button>
            <button onClick={() => taskMoveDown(index)}>👇</button>
          </li>
          )}
        </ul>
      </div>
    </>
  );
}

export default ToDoList;
