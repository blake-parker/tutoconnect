import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import "../CSS/SignUp.css";


function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (error) {
      console.error('Error signing up:', error.message);
    }
  }

  return (
    <div className="body">
    <div className="profile-setup">
      <h2>Profile Set Up</h2>
      <label>username</label>
      <input
        type="email"
        placeholder=""
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label>password</label>
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
