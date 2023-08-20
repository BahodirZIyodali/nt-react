import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Navigate } from 'react-router-dom';

const AuthPage = () => {
  const [email, setEmail] = useState('');
  const [token, setToken] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user');
  const [isLogin, setIsLogin] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const [userEmail, setUserEmail] = useState(''); 
  const [redirectToHome, setRedirectToHome] = useState(false); 

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');
     const webToken = localStorage.getItem('token')
    if (loggedInUser) {
      setIsLoggedIn(true);
      setUserEmail(loggedInUser);
      setToken(webToken)
     
    }
  }, []);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    toast.dismiss();
  
    if (isLogin) {
      try {
        const response = await axios.post('https://ntbackend.onrender.com/login', {
          email,
          user_password: password,
          role,
        });

        toast.success('Login successful', {
          position: toast.POSITION.TOP_RIGHT,
        });
        localStorage.setItem('token', response.data.token);

        localStorage.setItem('loggedInUser', email);

        setIsLoggedIn(true);
        setUserEmail(email);
        setToken(token);
       setRedirectToHome(true);
    
      
      } catch (error) {
        console.error('Login error:', error);
        toast.error('Login failed');
      }
    } else {
      try {
        const response = await axios.post('https://ntbackend.onrender.com/register', {
          email,
          user_password: password,
          role
        });

        // Handle success
        toast.success('Registration successful');
        setIsLogin(true);
      } catch (error) {
        toast.error('Registration failed');
      }
    }
  };

  if (redirectToHome) {
    if (role === 'admin') {
      window.location.href = '/crm'; 
    } else {
      window.location.href = '/'; 
    }
  }




  return (
    <div className="container">
      <div className="form-container">
        <h2 className="title">{isLogin ? 'Login' : 'Sign Up'}</h2>
        <ToastContainer />
        <form onSubmit={handleFormSubmit}>
          <input
            type="email"
            className="input-field"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            className="input-field"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {!isLogin && (
            <select
              className="select-field"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </select>
          )}
          <button className="submit-button" type="submit">
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>
        <p className="toggle-link" onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? 'Create an account' : 'Already have an account? Login'}
        </p>
      </div>
    </div>
  );
};

export default AuthPage;
