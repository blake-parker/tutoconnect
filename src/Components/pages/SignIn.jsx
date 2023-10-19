import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import logo from '../../logo/big_logo.png';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/home');
    } catch (error) {
      console.error('Error signing in:', error.message);
    }
  }

    return (
      <div style={styles.container}>
        <img src={logo} alt="TutoConnect Logo" style={styles.logo} />

        <label style={styles.label}>email</label>
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />

        <label style={styles.label}>password</label>
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />

        <button onClick={handleSignIn} style={styles.loginBtn}>Login</button>

        <div style={styles.extraLinks}>
          <a href="/signup">sign up</a>
          <a href="#">reset password</a>
        </div>
      </div>
  );

}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#CDD7D6',
    padding: '30px',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100%',
    boxSizing: 'border-box'
  },
  logo: {
    maxWidth: '100%',
    marginBottom: '20px'
  },
  label: {
    alignSelf: 'flex-start', 
    marginLeft: '10%', 
    fontWeight: 'bold'
  },
  input: {
    width: '80%',  
    padding: '10px',
    margin: '10px 0',
    border: '1px solid #ccc',
    borderRadius: '5px'
  },
  loginBtn: {
    backgroundColor: '#3CB371',
    color: '#FFF',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  },
  extraLinks: {
    marginTop: '20px',
    display: 'flex',
    justifyContent: 'center',
    width: '80%',
    gap: '20px'
  }
}

export default SignIn;
