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
    // console.log(userInput);

    setUserInput({ ...userInput, [e.target.name]: e.target.value });
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
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2>Register</h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form action="" onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm/6 font-medium text-black-100 text-left"
            >
              First Name
              <input
                type="text"
                placeholder="Enter First Name"
                name="firstName"
                value={userInput.firstName}
                onChange={handleChange}
                required
                className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-black/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
              />
            </label>
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="block text-sm/6 font-medium text-black-100 text-left"
            >
              Last Name
              <input
                type="text"
                placeholder="Enter Last Name"
                name="lastName"
                value={userInput.lastName}
                onChange={handleChange}
                required
                className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base  outline-1 -outline-offset-1 outline-black/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
              />
            </label>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm/6 font-medium text-black-100 text-left"
            >
              Email
              <input
                type="email"
                placeholder="Enter Email"
                name="email"
                value={userInput.email}
                onChange={handleChange}
                required
                className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base  outline-1 -outline-offset-1 outline-black/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
              />
            </label>
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm/6 font-medium text-black-100 text-left"
            >
              Password
              <input
                type="password"
                placeholder="Enter Password"
                name="password"
                value={userInput.password}
                onChange={handleChange}
                required
                className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base  outline-1 -outline-offset-1 outline-black/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
              />
            </label>
          </div>
          <div className="text-sm">
            <p className="mt-10 flex justify-end text-center text-sm/6 text-gray-400">
              Already have an Account?
              <Link
                to="/login"
                className="font-semibold text-indigo-400 hover:text-indigo-300 ml-2"
              >
                Login
              </Link>
            </p>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
