import PropTypes from 'prop-types';

function SideBar({ projects, onSelectProject, selectedProjectIndex, onDeleteProject, onAddProject }) {
  return (
    <div className="top-0 left-0 ml-2 max-h-max max-w-max p-2 flex flex-col rounded-xl bg-gray-400 text-gray-900 dark:bg-neutral-950 dark:text-white shadow-lg">
      {projects.map((project, index) => (
        <SideBarCell
          key={index}
          title={project.title}
          isSelected={index === selectedProjectIndex}
          onClick={() => onSelectProject(index)}
          onDelete={() => onDeleteProject(index)}
        />
      ))}
      <button
        className="p-2 mt-4 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={onAddProject}
      >
        Add New Project
      </button>
    </div>
  );
}

SideBar.propTypes = {
  projects: PropTypes.array.isRequired,
  onSelectProject: PropTypes.func.isRequired,
  selectedProjectIndex: PropTypes.number,
  onDeleteProject: PropTypes.func.isRequired,
};

export default SideBar;
function SideBarCell({ title, isSelected, onClick, onDelete }) {
    return (
      <div
        className={`sidebar-cell font-bold group flex justify-between items-center p-2 ${
          isSelected ? "bg-blue-500 text-white" : ""
        }`}
        onClick={onClick}
      >
        <span>{title}</span>
        <button
          className="ml-2 text-red-500 hover:text-red-700"
          onClick={(e) => {
            e.stopPropagation(); // Prevent triggering onClick for selecting the project
            onDelete();
          }}
        >
          Delete
        </button>
      </div>
    );
  }
  
