import PropTypes from 'prop-types';
import Button from "./Button.jsx"

function SideBar({ projects, onSelectProject, selectedProjectIndex, onDeleteProject, onAddProject }) {
  return (
    <aside className="w-1/3 px-8 py-16 md:w-72 rounded-xl 
          bg-gray-400 text-gray-900 dark:bg-neutral-950 dark:text-white shadow-lg">
      <div className='flex justify-center'>
        <Button title="+ Add New" onClick={onAddProject} />
      </div>
      
      {projects.map((project, index) => (
        <SideBarCell
          key={index}
          title={project.title}
          isSelected={index === selectedProjectIndex}
          onClick={() => onSelectProject(index)}
          onDelete={() => onDeleteProject(index)}
        />
      ))}
    </aside>
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
      className={`sidebar-cell font-bold group flex justify-between items-center p-2 ${isSelected ? "bg-blue-500 text-white" : ""
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

