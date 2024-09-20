import Button from "./Button.jsx"

function SideBar({ projects, onSelectProject, selectedProjectIndex, onAddProject }) {

  return (
    <aside className="w-1/3 px-8 py-16 md:w-72 rounded-xl 
          bg-gray-400 text-gray-900 dark:bg-neutral-950 dark:text-white shadow-lg">
      <div className='flex justify-center'>
        <Button title="+ Add New" onClick={onAddProject} />
      </div>

      {projects.map((project, index) => {
        let classes = "relative h-auto w-auto mt-2 mb-2 mx-auto shadow-lg hover:bg-green-600 hover:text-white hover:dark:bg-green-600 hover:dark:text-white rounded-3xl hover:rounded-xl transition-all duration-300 ease-linear font-bold group flex justify-between items-center p-2"

        if (selectedProjectIndex === index) {
          classes += " bg-green-600 text-white dark:bg-green-600 dark:text-white"
        } else {
          classes += " bg-gray-300 text-gray-800 dark:bg-neutral-800 dark:text-green-500"
        }

        return (
          <div
            key={index}
            className={classes}
            onClick={() => onSelectProject(index)}
          >
            <span>{project.title}</span>

          </div>
        )
      }
      )}
    </aside>
  );
}

export default SideBar;

