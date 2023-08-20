import React, { useState } from 'react';

const AuthPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user');
  const [isLogin, setIsLogin] = useState(true);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (isLogin) {
      // Implement login logic
    } else {
      // Implement sign-up logic
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2 className="title">{isLogin ? 'Login' : 'Sign Up'}</h2>
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
