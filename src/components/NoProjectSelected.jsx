import Button from "./Button.jsx"

export default function NoProjectSelected({onAddProject}) {
    return (
        <div className="mt-24 text-center w-2/3">
            <h2 className="text-xl font-bold text-stone-500 my-4">
                No Project Selected!
            </h2>
            <p className="text-stone-400 mb-4">Please select a project or create a new one</p>
            
            <Button onClick={onAddProject} title="Add New Project" />
        </div>
    )
}