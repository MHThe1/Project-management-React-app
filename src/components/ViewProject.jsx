import TaskList from "./TaskList.jsx"

export default function ViewProject({ selectedProject, onDeleteProject, handleToggleTask, handleAddTask, handleDeleteTask }) {
    const formattedDate = new Date(selectedProject.deadline).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });

    return (
        <div className="w-2/4 mt-16 mr-2">
            <header className="pb-4 mb-4 border-b-2 border-stone-300">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold dark:text-white">{selectedProject.title}</h1>
                    <button
                        className="bg-slate-300 p-2 rounded-md text-stone-600 hover:text-stone-950"
                        onClick={onDeleteProject} >
                        Delete
                    </button>
                </div>
                <p className="mb-4 dark:text-white">{selectedProject.description}</p>
                <p className="text-stone-600 dark:text-white whitespace-pre-wrap">{formattedDate}</p>

            </header>
            <TaskList
                tasks={selectedProject.tasks}
                onToggleTask={handleToggleTask}
                onAddTask={handleAddTask}
                onDeleteTask={handleDeleteTask}
            />
        </div>
    )
}