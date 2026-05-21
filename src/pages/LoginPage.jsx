import React from 'react';

import { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';

function LoginPage() {
  const [userInput, setUserInput] = useState({ email: '', password: '' });

  const navigate = useNavigate();

  function handleChange(e) {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });

    // console.log(userInput);
  }

  function handleSubmit(e) {
    e.preventDefault();

    // console.log(userInput);

    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

    const validUser = existingUsers.find(
      (user) =>
        user.email === userInput.email && user.password === userInput.password,
    );

    if (validUser) {
      localStorage.setItem('currentUser', JSON.stringify(validUser));

      setUserInput({ email: '', password: '' });

      navigate('/dashboard');
    } else {
      alert('Please enter valid Email or Password');
    }
  }

  return (
    <>
      <h2>Login</h2>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="email">
          Email
          <input
            type="email"
            placeholder="Enter Email"
            name="email"
            value={userInput.email}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            value={userInput.password}
            onChange={handleChange}
            required
          />
        </label>
        <Link to="/forgot-password"> Forgot Password</Link>
        <p>
          Don't have an Account <Link to="/register">Register</Link>
        </p>

        <input type="submit" value="Login" />
      </form>
    </>
  );
}

export default LoginPage;
