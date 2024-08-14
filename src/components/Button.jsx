export default function Button({ title, ...props }) {
    return (
        <button
        className="p-2 mt-4 bg-blue-500 text-white rounded hover:bg-blue-600"
        {...props}
      >
        {title}
      </button>
    )
}