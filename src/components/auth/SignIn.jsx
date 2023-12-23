import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import './SignIn.css';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      console.log('Please enter both email and password.');
      alert('Please enter both email and password.');
      return;
    }

    setLoading(true);

    try {
      if (isSignUp) {
        console.log('User signed up successfully.');
      } else {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log('User signed in:', userCredential.user);

        navigate('/dashboard');
      }
    } catch (error) {
      console.error('Authentication error:', error.message);
      alert(error)
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="sign-in-container">
      <div className="tabs">
        <button onClick={() => setIsSignUp(false)} className={!isSignUp ? 'active' : ''}>
          Sign In
        </button>
        <button onClick={() => setIsSignUp(true)} className={isSignUp ? 'active' : ''}>
          Sign Up
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        <h1>{isSignUp ? 'Create Account' : 'Log In'}</h1>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Processing...' : isSignUp ? 'Sign Up' : 'Sign In'}
        </button>
      </form>
    </div>
  );
};

export default SignIn;
