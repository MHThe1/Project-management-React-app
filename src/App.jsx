import { useState } from "react";
import SideBar from "./components/SideBar";
import ToggleTheme, { ThemeMode } from "./components/ToggleTheme";
import AddProject from "./components/AddProject";
import TaskList from "./components/TaskList";

export default function App() {
  const [projects, setProjects] = useState([]);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);
  const [isAddingProject, setIsAddingProject] = useState(false);

  function handleAddProject(newProject) {
    const updatedProjects = [
      ...projects,
      { ...newProject, tasks: [] },
    ];
    setProjects(updatedProjects);
    setSelectedProjectIndex(updatedProjects.length - 1); // Automatically select the new project
    setIsAddingProject(false);
  }

  function handleSelectProject(index) {
    setSelectedProjectIndex(index);
    setIsAddingProject(false);
  }

  function handleDeleteProject(index) {
    const updatedProjects = projects.filter((_, i) => i !== index);
    setProjects(updatedProjects);

    if (selectedProjectIndex === index) {
      setSelectedProjectIndex(updatedProjects.length > 0 ? 0 : null);
    } else if (selectedProjectIndex > index) {
      setSelectedProjectIndex(selectedProjectIndex - 1);
    }
  }

  function handleToggleTask(taskIndex) {
    const updatedProjects = [...projects];
    const project = updatedProjects[selectedProjectIndex];
    project.tasks[taskIndex].done = !project.tasks[taskIndex].done;
    setProjects(updatedProjects);
  }

  function handleAddTask() {
    const updatedProjects = [...projects];
    updatedProjects[selectedProjectIndex].tasks.push({ text: "New Task", done: false });
    setProjects(updatedProjects);
  }

  const selectedProject = selectedProjectIndex !== null ? projects[selectedProjectIndex] : null;

  return (
    <div className={`${ThemeMode() && "dark"}`}>
      <main className="flex min-h-screen flex-col bg-neutral-100 dark:bg-neutral-900">
        <nav className="grid grid-cols-3 p-8 items-center">
          <h1 className="text-xl font-semibold dark:text-white">React Project Manager</h1>
          <span className="justify-self-center text-blue-600 font-mono">
            Easily manage your projects and tasks
          </span>
          <ToggleTheme />
        </nav>

        <div className="flex flex-1">
          <SideBar
            projects={projects}
            onSelectProject={handleSelectProject}
            selectedProjectIndex={selectedProjectIndex}
            onDeleteProject={handleDeleteProject}
            onAddProject={() => setIsAddingProject(true)}
          />

          <div className="p-8 flex-1">
            {isAddingProject || projects.length === 0 ? (
              <AddProject onAddProject={handleAddProject} />
            ) : selectedProject ? (
              <div className="mt-8 p-4 bg-gray-200 dark:bg-neutral-800 rounded-md">
                <h2 className="text-2xl font-bold dark:text-white">{selectedProject.title}</h2>
                <p className="mt-2 dark:text-white">{selectedProject.description}</p>
                <div className="mt-4">
                  <h3 className="text-xl font-semibold dark:text-white">Tasks</h3>
                  <TaskList
                    tasks={selectedProject.tasks}
                    onToggleTask={handleToggleTask}
                    onAddTask={handleAddTask}
                  />
                </div>
              </div>
            ) : (
              <p className="text-gray-500 dark:text-gray-400">Select a project</p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
