import React, { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [university, setUniversity] = useState('');
  const [creditCardNumber, setCreditCardNumber] = useState('');
  const [cvv, setCvv] = useState('');
  const [expirationMonth, setExpirationMonth] = useState('');
  const [expirationYear, setExpirationYear] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [address, setAddress] = useState('');
  const [state, setState] = useState('');

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
  };

  const states = [
    "AL", "AK", "AZ", "AR", "AS", "CA", "CO", "CT", "DE", "DC", "FL", "GA", 
    "GU", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", 
    "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", 
    "ND", "MP", "OH", "OK", "OR", "PA", "PR", "RI", "SC", "SD", "TN", "TX", 
    "TT", "UT", "VT", "VA", "VI", "WA", "WV", "WI", "WY"
  ];

  // Inline styles
  const styles = {
    body: {
      fontFamily: "'Kumbh Sans', sans-serif",
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#ADC2C0',
    },
    profileSetup: {
      backgroundColor: '#ADC2C0',
      padding: '30px',
      borderRadius: '5px',
      boxShadow: '0 0px 0px rgba(0, 0, 0, 0.1)',
      width: '300px',
    },
    header: {
      margin: '0',
      paddingBottom: '20px',
      textAlign: 'center',
    },
    input: {
      width: '100%',
      padding: '10px',
      marginTop: '10px',
      borderRadius: '30px',
      border: '1px solid #ddd',
      boxSizing: 'border-box',
    },
    select: {
      width: '100%',
      padding: '10px',
      marginTop: '10px',
      borderRadius: '30px',
      border: '1px solid #ddd',
      boxSizing: 'border-box',
    },
    submitButton: {
      width: '100%',
      padding: '15px',
      marginTop: '20px',
      border: 'none',
      borderRadius: '15px',
      backgroundColor: '#4CAF50',
      color: 'white',
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.body}>
      <div style={styles.profileSetup}>
        <h2 style={styles.header}>User Information</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={styles.input}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />
        <select
          value={university}
          onChange={(e) => setUniversity(e.target.value)}
          style={{ ...styles.select, marginBottom: '25px' }} // Added margin here for separation
        >
          <option value="">Select University</option>
          <option value="Louisiana State University">Louisiana State University</option>
          <option value="Texas A&M">Texas A&M</option>
          <option value="Bama">Bama</option>
        </select>

        <h3 style={{ ...styles.header, marginTop: '25px' }}>Payment Information</h3>
        <input
          type="text"
          placeholder="Credit Card Number"
          value={creditCardNumber}
          onChange={(e) => setCreditCardNumber(e.target.value)}
          style={styles.input}
          maxLength="16"
        />
        <input
          type="text"
          placeholder="CVV"
          value={cvv}
          onChange={(e) => setCvv(e.target.value)}
          style={styles.input}
          maxLength="3"
        />
        <select
          value={expirationMonth}
          onChange={(e) => setExpirationMonth(e.target.value)}
          style={styles.select}
        >
          <option value="">Month</option>
          {Array.from({ length: 12 }, (_, i) => (
            <option key={i + 1} value={i + 1}>{i + 1}</option>
          ))}
        </select>
        <select
          value={expirationYear}
          onChange={(e) => setExpirationYear(e.target.value)}
          style={styles.select}
        >
          <option value="">Year</option>
          {Array.from({ length: 8 }, (_, i) => (
            <option key={i} value={2023 + i}>{2023 + i}</option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Zip Code"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
          style={styles.input}
        />
        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          style={styles.input}
        />
        <select
          value={state}
          onChange={(e) => setState(e.target.value)}
          style={styles.select}
        >
          <option value="">Select State/Territory</option>
          {states.map((state, index) => (
            <option key={index} value={state}>{state}</option>
          ))}
        </select>

        <button
          style={styles.submitButton}
          onClick={handleSignUp}
        >
          Get Started!
        </button>
      </div>
    </div>
  );
}

export default SignUp;
