import React from 'react'


const Modal = ({show,onClose,children}) => {
  return (
    <div className="model-overlay">
      <div className="model" onClick={(e) => e.stopPropagation()}>
    <button className="model-close" onClick={onClose}>
      Close
    </button>
    {children}
  </div>
    </div>
  )
}

export default Modal
