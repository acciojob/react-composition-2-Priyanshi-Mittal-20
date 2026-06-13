import React from "react";

const Modal = ({ show, onClose, children }) => {
  if (!show) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="model-overlay" onClick={handleOverlayClick}>
      <div className="model">
        <button className="model-close" onClick={onClose}>
          Close
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;