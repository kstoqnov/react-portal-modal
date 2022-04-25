import React from "react";
import ReactDOM from "react-dom";

type PortalModalProps = {
  message: string;
  isOpen: boolean;
  onClose: () => void;
};

const PortalModal: React.FC<PortalModalProps> = ({
  message,
  isOpen,
  onClose,
}) => {
  if (!isOpen) {
    return null;
  }
  return ReactDOM.createPortal(
    <div className="modal">
      <h2>{message}</h2>
      <button className="close" onClick={onClose}>
        Close
      </button>
    </div>,
    document.body
  );
};

export default PortalModal;
