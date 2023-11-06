import React, { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import "../CSS/SignUp.css";


function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      const userCred = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCred.user;

      await updateProfile(user, {
        displayName: username
      });
      navigate('/');
    } catch (error) {
      console.error('Error signing up:', error.message);
    }
  }

  return (
    <div className="body">
    <div className="profile-setup">
      <h2>Profile Set Up</h2>
      <label>Username</label>
      <input
        type="username"
        placeholder=""
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <label >Email</label>
      <input
        type="email"
        placeholder=""
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label>Password</label>
      <input
        type="password"
        placeholder=""
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
       <label>What School Do You Attend?

        <select>
          
          <option value="Lousiana State university">Lousiana State University</option>

          <option value="Texas A&M">Texas A&M</option>

          <option value="'Bama :(">Bama</option>

        </select>

      </label>
      <button className="submit-btn" onClick={handleSignUp}>Get Started!</button>
      <p>
        Already have an account? <a href="/login">Log In</a>
      </p>
    </div>
  </div>



  );
}

export default SignUp;
