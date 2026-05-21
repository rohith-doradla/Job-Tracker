import React from 'react';

import { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';

function RegisterPage() {
  const [userInput, setUserInput] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  function handleChange(e) {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });

    console.log(userInput);
  }

  function handleSubmit(e) {
    e.preventDefault();

    // console.log(`Registered:`, userInput);

    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

    const updatedUsers = [...existingUsers, userInput];

    localStorage.setItem('users', JSON.stringify(updatedUsers));

    setUserInput({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    });

    navigate('/login');
  }

  return (
    <>
      <h2>Register</h2>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="firstName">
          First Name
          <input
            type="text"
            placeholder="Enter First Name"
            name="firstName"
            value={userInput.firstName}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="lastName">
          Last Name
          <input
            type="text"
            placeholder="Enter Last Name"
            name="lastName"
            value={userInput.lastName}
            onChange={handleChange}
            required
          />
        </label>
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
        <p>
          Already have an Account <Link to="/login">Login</Link>
        </p>
        <input type="submit" value="Register" />
      </form>
    </>
  );
}

export default RegisterPage;
