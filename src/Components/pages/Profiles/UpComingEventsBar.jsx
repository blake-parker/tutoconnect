import React from 'react'
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

export const UpComingEventsBar = () => {

  const navigate = useNavigate();
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (e) {
      console.error("Error signing in:", e.message);
    }
  };

  return (
    <div className='UpComingEventsBar'>
        <div className='Appointments'>
            <p>
              Upcomming <br/> Appointments
            </p>
            <button className='AddAppointment'>Add Appointment</button>
        </div>

        <button className='LogOut' onClick={handleSignOut}>Log Out</button>
    </div>
  )
}

    export default UpComingEventsBar;