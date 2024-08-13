import { useState } from "react";

export default function AddProject({ onAddProject }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    onAddProject({ title, description });
    setTitle("");
    setDescription("");
  }

  return (
    <div>
      <p className="mb-4 text-lg font-semibold dark:text-white">Create New Project</p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Project Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="p-2 border border-gray-300 rounded-md dark:bg-neutral-800 dark:text-white"
          required
        />
        <textarea
          placeholder="Project Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="p-2 border border-gray-300 rounded-md dark:bg-neutral-800 dark:text-white"
          required
        />
        <button
          type="submit"
          className="p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Add Project
        </button>
      </form>
    </div>
  );
}
