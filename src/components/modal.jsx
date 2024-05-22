import React from "react";
import PropTypes from 'prop-types';

const BACKGROUND_STYLE = {
  position: 'fixed',
  width: '100%',
  height: '100%',
  top: '0',
  right: '0',
  left: '0',
  zIndex: '1000',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'rgba(255, 255, 255, 0.6)',
}

const MODAL_STYLE = {
  padding: '20px',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: 'rgba(255, 255, 255, 1)',
  height: '70%',
  width: '70%',
  borderRadius: '10px',
  border: 'solid var(--color4)'
}

const BUTTON_STYLE = {
    borderStyle: 'none',
    padding: '10px',
    color: 'white',
    fontWeight: '700',
    backgroundColor: 'var(--color3)',
    borderRadius: '10px',
    position: 'absolute',
    top: '10px',
    right: '10px',
}


export default function Modal({ isOpen, children, setModalOpen }) {

  const closeModal = () => {
    setModalOpen(!isOpen)
  }

  if(isOpen) {
  return (
    <div style={BACKGROUND_STYLE}>
      <div style={MODAL_STYLE}>
        {children}
        <button style={BUTTON_STYLE} onClick={closeModal}>X</button>
      </div>
    </div>
  )}

  return null;
}

Modal.propTypes = {
  isOpen: PropTypes.bool,
  children: PropTypes.node,
  setModalOpen: PropTypes.func,
}
