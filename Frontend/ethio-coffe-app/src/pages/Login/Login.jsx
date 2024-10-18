import React from 'react';

function Login() {
  return (
    <>
      <div className="login-section">
        <label htmlFor="username">Username <span className="required">*</span></label>
        <input type="text" id="username" placeholder="Enter username" required />

        <label htmlFor="password">Password <span className="required">*</span></label>
        <input type="password" id="password" placeholder="Enter password" required />

        <button id="loginBtn">Login</button>
        <button id="logoutBtn" className="hidden">Logout</button>
        <button id="createAccountBtn">Create Account</button>
        <button id="forgotPasswordBtn">Forgot Password</button>
        <p id="loginMessage"></p>
      </div>
    </>
  );
}

export default Login;