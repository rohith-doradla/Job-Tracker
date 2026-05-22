import React from 'react';

import { useState, useEffect } from 'react';

function ProfilePage() {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const [isEditEnabled, setEditEnabled] = useState(false);

  useEffect(() => {
    const existingUser = JSON.parse(localStorage.getItem('currentUser'));

    if (existingUser) {
      console.log('User found:', existingUser);
      setUser(existingUser);
    } else {
      console.log('User Not found');
    }
  }, []);

  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  function handleEditPassword() {
    setEditEnabled(true);
  }

  function handleSubmit(e) {
    e.preventDefault();

    localStorage.setItem(JSON.stringify(''));
  }

  return (
    <div className="flex flex-col justify-center">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2>Profile</h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form action="" className="space-y-6">
          <div className="flex justify-between">
            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-sm/6 font-medium text-black-100 text-left"
              >
                First Name
                <input
                  type="text"
                  placeholder=""
                  name="firstName"
                  value={user.firstName}
                  onChange={handleChange}
                  required
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-black/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
              </label>
            </div>
            <div>
              <label
                htmlFor="last-name"
                className="block text-sm/6 font-medium text-black-100 text-left"
              >
                Last Name
                <input
                  type="text"
                  placeholder=""
                  name="lastName"
                  value={user.lastName}
                  onChange={handleChange}
                  required
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base  outline-1 -outline-offset-1 outline-black/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
              </label>
            </div>
          </div>
          <label
            htmlFor="email"
            className="block text-sm/6 font-medium text-black-100 text-left"
          >
            Email
            <input
              type="email"
              name="email"
              value={user.email}
              disabled
              className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base  outline-1 -outline-offset-1 outline-black/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
            />
          </label>
          <div className="flex justify-start">
            <input
              type="button"
              value="Edit Password"
              className="font-semibold text-indigo-400 hover:text-indigo-300"
              onClick={handleEditPassword}
            />
          </div>
          {isEditEnabled ? (
            <div>
              <label
                htmlFor="current-password"
                className="block text-sm/6 font-medium text-black-100 text-left"
              >
                Current Password
                <input
                  type="password"
                  id=""
                  name="current-password"
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base  outline-1 -outline-offset-1 outline-black/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
              </label>
              <label
                htmlFor="new-password"
                className="block text-sm/6 font-medium text-black-100 text-left"
              >
                New Password
                <input
                  type="password"
                  id=""
                  name="new-password"
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base  outline-1 -outline-offset-1 outline-black/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
              </label>
              <label
                htmlFor="confirm-password"
                className="block text-sm/6 font-medium text-black-100 text-left"
              >
                Confirm Password
                <input
                  type="password"
                  id=""
                  name="confirm-password"
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base  outline-1 -outline-offset-1 outline-black/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
              </label>
            </div>
          ) : null}

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProfilePage;
