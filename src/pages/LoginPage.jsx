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

      navigate('/');
    } else {
      alert('Please enter valid Email or Password');
    }
  }

  return (
    <div className="flex flex-col justify-center ">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2>Login</h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form action="" onSubmit={handleSubmit} className="space-y-6">
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
          <div className="text-sm flex justify-between">
            <div>
              <Link
                to="/forgot-password"
                className="font-semibold text-gray-400 hover:text-gray-300"
              >
                Forgot Password
              </Link>
            </div>
            <div>
              <p className="mt-10 text-center text-sm/6 text-gray-250">
                Don't have an Account?
                <Link
                  to="/register"
                  className="font-semibold text-indigo-400 hover:text-indigo-300 ml-2"
                >
                  Register
                </Link>
              </p>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
