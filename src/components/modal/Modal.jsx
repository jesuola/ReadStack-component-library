import "./modal.css";

function Modal(props) {
  if (!props.isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay">

      <div className="modal">

        <button
          className="close-button"
          onClick={props.onClose}
        >
          ×
        </button>

        {props.children}

      </div>

    </div>
  );
}

export default Modal;