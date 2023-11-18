import React, { useState, useEffect } from 'react';
import { FaStar } from "react-icons/fa";
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../firebase';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { signOut } from 'firebase/auth';

Modal.setAppElement('#root');

const ProfilePage = ({ userPhotoURL, username }) => {
  const [appointments, setAppointments] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [newAppointment, setNewAppointment] = useState({ title: '', date: '' });
  const navigate = useNavigate();

  const fetchAppointments = async () => {
    const user = auth.currentUser;
    if (user) {
      const appointmentsRef = collection(db, 'users', user.uid, 'appointments');
      const appointmentDocs = await getDocs(appointmentsRef);
      setAppointments(appointmentDocs.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  const handleAddAppointment = async () => {
    const user = auth.currentUser;
    if (user) {
      const appointmentsRef = collection(db, 'users', user.uid, 'appointments');
      await addDoc(appointmentsRef, newAppointment);
      setNewAppointment({ title: '', date: '' });
      closeModal();
      await fetchAppointments();
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate('/login');
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleAppointmentChange = (e) => {
    setNewAppointment({ ...newAppointment, [e.target.name]: e.target.value });
  };

  // Inline styles
  const pageStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    height: '100vh',
    color: '#333',
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    boxSizing: 'border-box',
    backgroundColor: '#cdd7d6',
  };

  const sidebarStyle = {
    background: '#6c757d',
    borderRadius: '16px',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    flex: '0 0 250px',
    height: '90vh',
    overflowY: 'auto',
    margin: '0 20px',
  };

  const profileImageStyle = {
    borderRadius: '50%',
    width: '150px',
    height: '150px',
    marginBottom: '1rem',
    border: '6px solid pink',
    objectFit: 'cover',
  };

  const textStyle = {
    color: '#ffffff',
    margin: '0.5rem 0',
    textAlign: 'center',
  };

  const buttonStyle = {
    background: 'none',
    border: 'none',
    color: '#ffffff',
    cursor: 'pointer',
    textDecoration: 'underline',
    padding: '10px 0',
    width: '100%',
    textAlign: 'center',
  };

  const classItemStyle = {
    background: '#000000',
    color: '#ffffff',
    padding: '10px 20px',
    borderRadius: '20px',
    margin: '10px 0',
    textAlign: 'center',
    width: '100%',
  };

  const logOutButtonStyle = {
    background: '#dc3545',
    color: '#ffffff',
    border: 'none',
    borderRadius: '20px',
    padding: '10px 20px',
    cursor: 'pointer',
    fontSize: '0.9rem',
    fontWeight: 'bold',
    width: '100%',
    textDecoration: 'none',
    textAlign: 'center',
    marginTop: '20px',
  };

  // Modal styles
  const modalStyle = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#6c757d',
      borderRadius: '20px',
      padding: '20px',
      width: '300px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
  };

  const modalInputStyle = {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    borderRadius: '5px',
    border: '1px solid #ddd',
  };

  const modalButtonStyle = {
    background: '#3cb371',
    color: '#ffffff',
    border: 'none',
    borderRadius: '20px',
    padding: '10px 20px',
    cursor: 'pointer',
    fontSize: '0.9rem',
    fontWeight: 'bold',
    width: '100%',
    textDecoration: 'none',
    textAlign: 'center',
    marginTop: '10px',
  };

  return (
    <div style={pageStyle}>
      <div style={sidebarStyle}>
        <img src={userPhotoURL || 'default-profile-pic-url'} alt='Profile' style={profileImageStyle} />
        <h2 style={textStyle}>{username || 'Username'}</h2>
        <p style={textStyle}>class of 2025</p>
        <div>
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} size={25} style={{ color: '#ffc107' }} />
          ))}
        </div>
        <button style={buttonStyle}>view reviews</button>
        <div style={{ width: '100%' }}>
          <h3 style={textStyle}>Classes Taken</h3>
          <div style={classItemStyle}>CS4101</div>
          <div style={classItemStyle}>CS1351</div>
          <div style={classItemStyle}>CS4101</div>
        </div>
      </div>

      <div style={{ flex: 1, padding: '1rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <p>Main content goes here</p>
      </div>

      <div style={sidebarStyle}>
        <h2 style={textStyle}>Upcoming Appointments</h2>
        {appointments.map((appointment, index) => (
          <div key={index} style={{ ...classItemStyle, background: '#ffffff', color: '#000000', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
            <h3>{appointment.title}</h3>
            <p>{appointment.date}</p>
          </div>
        ))}
        <button style={{ ...buttonStyle, background: '#3cb371', textDecoration: 'none' }} onClick={openModal}>Add Appointment</button>
        <button onClick={handleSignOut} style={logOutButtonStyle}>Log Out</button>
      </div>

      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={modalStyle} contentLabel="Add Appointment">
        <h2 style={{ color: '#ffffff', textAlign: 'center' }}>Add New Appointment</h2>
        <input type="text" placeholder="Appointment Title" name="title" value={newAppointment.title} onChange={handleAppointmentChange} style={modalInputStyle} />
        <input type="date" name="date" value={newAppointment.date} onChange={handleAppointmentChange} style={modalInputStyle} />
        <button onClick={handleAddAppointment} style={modalButtonStyle}>Add Appointment</button>
        <button onClick={closeModal} style={{ ...modalButtonStyle, background: '#dc3545' }}>Cancel</button>
      </Modal>
    </div>
  );
};

export default ProfilePage;
