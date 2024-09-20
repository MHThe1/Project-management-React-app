import { useState } from "react";

export default function TaskList({ tasks, onToggleTask, onAddTask, onDeleteTask }) {
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
      <h2 className="text-2xl font-bold text-stone-700 dark:text-stone-200 mb-4">Tasks</h2>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-4">
        <input
          type="text"
          placeholder="New Task"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
          className="w-full sm:w-auto p-2 border border-gray-300 rounded-md dark:bg-neutral-800 dark:text-white"
        />
        <button
          type="submit"
          className="w-full sm:w-auto p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Add Task
        </button>
      </form>
      <ul className="p-4 mt-8 rounded-md bg-stone-100 dark:bg-stone-800">
        {tasks.map((task, index) => (
          <li key={index} className="flex justify-between items-center my-2">
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={task.isDone}
                onChange={() => onToggleTask(index)}
                className="form-checkbox"
              />
              <span className={`${task.isDone ? 'line-through' : ''} mx-2 dark:text-white`}>
                {task.title}
              </span>
            </div>
            <button 
              onClick={() => onDeleteTask(index)}
              className="text-stone-700 dark:text-stone-400 hover:text-red-500">
              Clear
            </button>
          </li>
        ))}
      </ul>

    </div>
  );
}
