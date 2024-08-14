import { useRef, forwardRef, useImperativeHandle } from "react";
import { createPortal } from "react-dom";

import Button from "./Button.jsx";

const Modal = forwardRef(function Modal({ children, buttonCaption }, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => ({
    open() {
      dialog.current.showModal();
    },
  }));

  return createPortal(
    <dialog
      ref={dialog}
      className="bg-black text-white backdrop:bg-stone-900/70 p-6 rounded-md shadow-lg"
    >
      {children}
      <form method="dialog" className="mt-4 text-right">
        <Button title={buttonCaption} />
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default Modal;
