import React, { useState } from "react";
import "./CSS/Mod.css";

const Modal = ({ isOpen, onClose, onConfirm, children }) => {
  return (
    <>
      {isOpen && (
        <div className="modal-overlay" onClick={onClose}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <p>{children}</p>
            <div className="modal-buttons">
              <button className="modal-confirm" onClick={onConfirm}>
                Yes
              </button>
              <button className="modal-close" onClick={onClose}>
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;