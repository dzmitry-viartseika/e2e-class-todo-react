import './Modal.css';

function Modal({ children, onClose }) {
  return (
    <>
      <div data-cy="modal__backdrop" className="backdrop" onClick={onClose}></div>
      <dialog data-cy="modal__content" className="modal" open>
        {children}
      </dialog>
    </>
  );
}

export default Modal;
