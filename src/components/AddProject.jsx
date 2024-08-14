import { useRef } from "react";
import Input from "./Input.jsx";

import Modal from "./Modal.jsx";

export default function AddProject({ onAdd, onCancel }) {

  const modal = useRef();

  const title = useRef();
  const description = useRef();
  const deadline = useRef();

  function handleSave() {
    const entertedTitle = title.current.value;
    const entertedDescription = title.current.value;
    const entertedDeadline = title.current.value;

    if (entertedTitle.trim() === '' || entertedDescription.trim() === '' || entertedDeadline.trim() === '' ) {
      modal.current.open();
      return;
    }

    onAdd({
      title: entertedTitle,
      description: entertedDescription,
      deadline: entertedDeadline,
    });
  }

  return (
    <>
    <Modal ref={modal} buttonCaption="Okay">
      <h2 className="text-xl font-bold my-4">Invalid Input</h2>
      <p className="mb-4">Oops.. did you forget to enter a value!</p>
      <p className="mb-4">Please make sure to add valid values for all the inputs.</p>
    </Modal>
    <div className="w-[35rem] mt-16 mr-5">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button 
            onClick={onCancel}
            className="text-stone-800 dark:text-stone-200 hover:text-stone-950">Cancel</button>
        </li>
      </menu>

      <Input ref={title} required label="Title" />
      <Input ref={description} required label="Description" textarea />
      <Input ref={deadline} type="date" required label="Deadline" />
      <button
          onClick={handleSave}
          className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Save</button>
      
    </div>
    </>
  );
}
