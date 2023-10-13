import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      // You can redirect the user to a dashboard or another page upon successful login.
    } catch (error) {
      console.error('Error signing in:', error);
      // You can display an error message to the user here.
    }
  }

  return (
    <div>
      <h2>Log In</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignIn}>Log In</button>
    </div>
  );
}

export default SignIn;