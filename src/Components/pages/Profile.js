import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { query, where, onSnapshot } from "firebase/firestore";
import { signOut } from "firebase/auth";
import Post from "../PostPage/Post";
import Star from "../Star";

Modal.setAppElement("#root");

const ProfilePage = ({ userPhotoURL, username }) => {
  const [appointments, setAppointments] = useState([]);
  const [classes, setClasses] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [newAppointment, setNewAppointment] = useState({ title: "", date: "" });
  const [posts, setPosts] = useState([]);
  const [rating, setRating] = useState(0);
  const [classModalIsOpen, setClassModalIsOpen] = useState(false);
  const [newClass, setNewClass] = useState("");
  const navigate = useNavigate();

  const fetchAppointments = async () => {
    const user = auth.currentUser;
    if (user) {
      const appointmentsRef = collection(db, "users", user.uid, "appointments");
      const appointmentDocs = await getDocs(appointmentsRef);
      setAppointments(
        appointmentDocs.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      );
    }
  };

  const fetchClasses = async () => {
    const user = auth.currentUser;
    if (user) {
      const classesRef = collection(db, "users", user.uid, "classes");
      const classDocs = await getDocs(classesRef);
      setClasses(classDocs.docs.map((doc) => doc.data().name));
    }
  };
  useEffect(() => {
    const user = auth.currentUser;
    const postCollectionRef = collection(db, "posts");
    const postQuery = query(
      postCollectionRef,
      where("author.id", "==", user.uid)
    );

    const unsubscribe = onSnapshot(postQuery, (querySnapshot) => {
      const newPosts = [];
      querySnapshot.forEach((doc) => {
        newPosts.push({ ...doc.data(), id: doc.id });
      });
      setPosts(newPosts);
    });

    return () => {
      unsubscribe();
    };
  }, []);
  useEffect(() => {
    fetchAppointments();
    fetchClasses();
  }, []);

  useEffect(() => {
    const fetch = async () => {
      const result = await calculateAverageRating();
      setRating(result);
    };
    fetch();
  }, []);

  const handleAddAppointment = async () => {
    const user = auth.currentUser;
    if (user) {
      const appointmentsRef = collection(db, "users", user.uid, "appointments");
      await addDoc(appointmentsRef, newAppointment);
      setNewAppointment({ title: "", date: "" });
      closeModal();
      await fetchAppointments();
    }
  };

  const handleAddClass = async () => {
    const user = auth.currentUser;
    if (user) {
      const classesRef = collection(db, "users", user.uid, "classes");
      await addDoc(classesRef, { name: newClass });
      setNewClass("");
      closeClassModal();
      await fetchClasses();
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate("/login");
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

  const openClassModal = () => {
    setClassModalIsOpen(true);
  };

  const closeClassModal = () => {
    setClassModalIsOpen(false);
  };

  const handleAppointmentChange = (e) => {
    setNewAppointment({ ...newAppointment, [e.target.name]: e.target.value });
  };

  const calculateAverageRating = async () => {
    const postCollectionRef = collection(db, "posts");
    const querySnapshot = await getDocs(postCollectionRef);

    let totalRating = 0;
    let totalPosts = 0;

    querySnapshot.forEach((doc) => {
      const post = doc.data();

      if (post.author && typeof post.author.rating === "number") {
        totalRating += post.author.rating;
        totalPosts += 1;
      }
    });

    const averageRating = totalRating / totalPosts;
    return averageRating;
  };

  const pageStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    height: "100vh",
    color: "#333",
    fontFamily: "Arial, sans-serif",
    padding: "20px",
    boxSizing: "border-box",
    backgroundColor: "#cdd7d6",
  };

  const sidebarStyle = {
    background: "var(--dark-bg)",
    borderRadius: "16px",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    flex: "0 0 250px",
    height: "90vh",
    width: "auto",
    overflowY: "auto",
    margin: "0 20px",
  };

  const profileImageStyle = {
    borderRadius: "50%",
    width: "150px",
    height: "150px",
    marginBottom: "1rem",
    border: "2px solid black",
    objectFit: "cover",
  };

  const textStyle = {
    color: "#ffffff",
    margin: "0.5rem 0",
    textAlign: "center",
  };

  const buttonStyle = {
    background: "none",
    border: "none",
    color: "#ffffff",
    cursor: "pointer",
    textDecoration: "underline",
    padding: "10px 0",
    width: "100%",
    textAlign: "center",
  };

  const classItemStyle = {
    background: "var(--button-brown)",
    color: "#ffffff",
    padding: "10px 20px",
    borderRadius: "20px",
    margin: "10px 0",
    textAlign: "center",
    width: "100%",
  };

  const logOutButtonStyle = {
    background: "#dc3545",
    color: "#ffffff",
    border: "none",
    borderRadius: "20px",
    padding: "10px 20px",
    cursor: "pointer",
    fontSize: "0.9rem",
    fontWeight: "bold",
    width: "100%",
    textDecoration: "none",
    textAlign: "center",
    marginTop: "20px",
  };

  const modalStyle = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "var(--dark-bg)",
      borderRadius: "20px",
      padding: "20px",
      width: "300px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
  };

  const modalInputStyle = {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "5px",
    border: "1px solid #ddd",
  };

  const modalButtonStyle = {
    background: "#3cb371",
    color: "#ffffff",
    border: "none",
    borderRadius: "20px",
    padding: "10px 20px",
    cursor: "pointer",
    fontSize: "0.9rem",
    fontWeight: "bold",
    width: "100%",
    textDecoration: "none",
    textAlign: "center",
    marginTop: "10px",
  };

  return (
    <div style={pageStyle}>
      <div style={sidebarStyle}>
        <img
          src={
            "https://firebasestorage.googleapis.com/v0/b/tutoconnect-93c03.appspot.com/o/default.jpg?alt=media&token=19061a62-a3df-4ff1-ac4f-9623ee7447b3"
          }
          alt="Profile"
          style={profileImageStyle}
        />
        <h2 style={textStyle}>{username || "Username"}</h2>
        <p style={textStyle}>LSU class of 2025</p>
        <div>
          <Star x={rating} />
        </div>
        <button onClick={openClassModal} style={buttonStyle}>
          Add Class
        </button>
        <div style={{ width: "100%" }}>
          <h3 style={textStyle}>Classes Taken</h3>
          {classes.map((className, index) => (
            <div key={index} style={classItemStyle}>
              {className}
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          flex: 1,
          padding: "1rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          margin: 0,
        }}
      >
        {posts.map((post) => {
          return (
            <Post
              title={post.title}
              author={post.author.name}
              text={post.postText}
              id={post.id}
              authorID={post.author.id}
              userProfilePicture="https://firebasestorage.googleapis.com/v0/b/tutoconnect-93c03.appspot.com/o/default.jpg?alt=media&token=19061a62-a3df-4ff1-ac4f-9623ee7447b3"
              width="100%"
              rating={rating}
            />
          );
        })}
      </div>

      <div
        style={{
          ...sidebarStyle,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div>
          <h2 style={textStyle}>Upcoming Appointments</h2>
          {appointments.map((appointment, index) => (
            <div
              key={index}
              style={{
                ...classItemStyle,
                background: "#ffffff",
                color: "#000000",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              }}
            >
              <h3>{appointment.title}</h3>
              <p>{appointment.date}</p>
            </div>
          ))}
          <button
            style={{
              ...buttonStyle,
              background: "#3cb371",
              textDecoration: "none",
            }}
            onClick={openModal}
          >
            Add Appointment
          </button>
        </div>
        <button onClick={handleSignOut} style={logOutButtonStyle}>
          Log Out
        </button>
      </div>

      {/* Modals */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={modalStyle}
        contentLabel="Add Appointment"
      >
        <h2 style={{ color: "#ffffff", textAlign: "center" }}>
          Add New Appointment
        </h2>
        <input
          type="text"
          placeholder="Appointment Title"
          name="title"
          value={newAppointment.title}
          onChange={handleAppointmentChange}
          style={modalInputStyle}
        />
        <input
          type="date"
          name="date"
          value={newAppointment.date}
          onChange={handleAppointmentChange}
          style={modalInputStyle}
        />
        <button onClick={handleAddAppointment} style={modalButtonStyle}>
          Add Appointment
        </button>
        <button
          onClick={closeModal}
          style={{ ...modalButtonStyle, background: "#dc3545" }}
        >
          Cancel
        </button>
      </Modal>

      <Modal
        isOpen={classModalIsOpen}
        onRequestClose={closeClassModal}
        style={modalStyle}
      >
        <h2 style={{ color: "#ffffff", textAlign: "center" }}>Add New Class</h2>
        <input
          type="text"
          placeholder="Class Name"
          value={newClass}
          onChange={(e) => setNewClass(e.target.value)}
          style={modalInputStyle}
        />
        <button onClick={handleAddClass} style={modalButtonStyle}>
          Add Class
        </button>
        <button
          onClick={closeClassModal}
          style={{ ...modalButtonStyle, background: "#dc3545" }}
        >
          Cancel
        </button>
      </Modal>
    </div>
  );
};

export default ProfilePage;
