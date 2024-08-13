import { useState } from "react";

export default function TaskList({ tasks, onToggleTask, onAddTask }) {
  const [taskTitle, setTaskTitle] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (taskTitle.trim()) {
      onAddTask(taskTitle);
      setTaskTitle("");
    }
  }

  return (
    <div>
      <ul className="mt-4">
        {tasks.map((task, index) => (
          <li key={index} className="flex items-center gap-2">
            <input 
              type="checkbox" 
              checked={task.isDone} 
              onChange={() => onToggleTask(index)} 
              className="form-checkbox"
            />
            <span className={`${task.isDone ? 'line-through' : ''} dark:text-white`}>{task.title}</span>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit} className="flex mt-4 gap-2">
        <input
          type="text"
          placeholder="New Task"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
          className="p-2 flex-1 border border-gray-300 rounded-md dark:bg-neutral-800 dark:text-white"
        />
        <button
          type="submit"
          className="p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Add Task
        </button>
      </form>
    </div>
  );
}
