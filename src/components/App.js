
import React from "react";
import './../styles/App.css';
import { useState } from "react";
import Modal from "./Modal";

const App = () => {
  function onClose()
  {
    setShow(false)
  }
  const [show,setShow]=useState(false)
  return (
    <div>
        <button onClick={()=>{setShow(true)}}>Show Modal</button>
        {show && (
  <Modal show={show} onClose={onClose}>
    <p>This is the content of the modal.</p>
  </Modal>
)}
    </div>
  )
}

export default App
