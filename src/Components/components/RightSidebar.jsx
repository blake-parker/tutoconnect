import React, { useState, useContext } from "react";
import Modal from "react-modal";
import { AuthContext } from '../contexts/AuthContext';
import { db } from "../firebase"; // Ensure this path is correct for your setup
import { collection, addDoc } from "firebase/firestore";

Modal.setAppElement("#root"); // Set the root element for accessibility reasons

const RightSidebar = () => {
  const { currentUser } = useContext(AuthContext);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [newTip, setNewTip] = useState("");

  // Open and close modal functions
  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  // Handle tip input changes
  const handleTipChange = (e) => setNewTip(e.target.value);

  // Handle the addition of a new tip
  const handleAddTip = async () => {
    if (currentUser) {
      try {
        const tipsRef = collection(db, "users", currentUser.uid, "tips");
        await addDoc(tipsRef, { tip: newTip });
        setNewTip("");
        closeModal();
      } catch (error) {
        console.error("Error adding tip: ", error);
      }
    }
  };

  return (
    <div className='rightSidebar' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
      {/* Hardcoded profile picture */}
      <div className="user">
        <img src="https://i.pinimg.com/736x/a8/45/1f/a8451fc4aa4b4e3c39298fdfe2c3fd4d.jpg" alt="Profile" className='displayProfilePic'></img>
      </div>
      {/* Hardcoded username */}
      <span className='userName'>Tutor</span>

      {/* 'Add Tip' button styled similarly to the modal's button */}
      <div style={{ alignSelf: 'center', marginTop: 'auto' }}>
        <button onClick={openModal} className="modal-button">Add Tip</button>
      </div>

      {/* Modal for adding a tip */}
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className="modal-content">
        <h2 className="modal-heading">Add New Tip</h2>
        <input
          className="modal-input"
          type="text"
          placeholder="Enter your tip"
          value={newTip}
          onChange={handleTipChange}
        />
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <button
            className="modal-button"
            onClick={handleAddTip}
          >
            Add Tip
          </button>
          <button
            className="modal-button modal-button-cancel"
            onClick={closeModal}
          >
            Cancel
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default RightSidebar;
