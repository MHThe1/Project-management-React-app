import { useState } from "react";
import SideBar from "./components/SideBar";
import ToggleTheme, { ThemeMode } from "./components/ToggleTheme";
import AddProject from "./components/AddProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ViewProject from "./components/ViewProject";

export default function App() {
  const [projects, setProjects] = useState([]);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);
  const [isAddingProject, setIsAddingProject] = useState(false);

  function handleAddProject(newProject) {
    const projectWithTasks = { ...newProject, tasks: [] };
    setProjects((prevProjects) => [...prevProjects, projectWithTasks]);
    setSelectedProjectIndex(projects.length);
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
    project.tasks[taskIndex].isDone = !project.tasks[taskIndex].isDone;
    setProjects(updatedProjects);
  }

  function handleAddTask(text) {
    const updatedProjects = [...projects];
    updatedProjects[selectedProjectIndex].tasks.push({ title: text, isDone: false });
    setProjects(updatedProjects);
  }

  function handleDeleteTask(taskIndex) {
    setProjects((prevProjects) => {
      const updatedProjects = [...prevProjects];
      const selectedProject = { ...updatedProjects[selectedProjectIndex] };

      selectedProject.tasks = selectedProject.tasks.filter((_, index) => index !== taskIndex);
      updatedProjects[selectedProjectIndex] = selectedProject;

      return updatedProjects;
    });
  }



  function handleCancel() {
    setIsAddingProject(false);
  }

  let selectedProject = selectedProjectIndex !== null ? projects[selectedProjectIndex] : null;


  let content;

  if (selectedProject && !isAddingProject) {
    content = (
      <ViewProject
        selectedProject={selectedProject}
        onDeleteProject={() => handleDeleteProject(selectedProjectIndex)}
        handleToggleTask={handleToggleTask}
        handleAddTask={handleAddTask}
        handleDeleteTask={handleDeleteTask}
      />
    );
  } else if (isAddingProject === false && selectedProjectIndex === null) {
    content = <NoProjectSelected onAddProject={() => setIsAddingProject(true)} />;
  } else {
    content = <AddProject onAdd={handleAddProject} onCancel={handleCancel} />;
  }


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

        <div className="h-screen flex gap-8">
          <SideBar
            projects={projects}
            onSelectProject={handleSelectProject}
            selectedProjectIndex={selectedProjectIndex}
            onDeleteProject={handleDeleteProject}
            onAddProject={() => setIsAddingProject(true)}
          />

          {content}

        </div>
      </main>
    </div>
  );
}
