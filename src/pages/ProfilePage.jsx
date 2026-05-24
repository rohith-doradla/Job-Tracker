import React from 'react';

import { useState, useEffect } from 'react';



function ProfilePage() {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const [isEditEnabled, setIsEditEnabled] = useState(false);

  const [passwordInputs, setPasswordInputs] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const existingUser = JSON.parse(localStorage.getItem('currentUser'));

    if (existingUser) {
      alert('User found');
      console.log('User found:', existingUser);
      setUser(existingUser);
    } else {
      alert('User Not found');
      console.log('User Not found');
    }
  }, []);

  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  function handleEditPassword() {
    setIsEditEnabled(true);
  }

  function handlePasswordChange(e) {
    setPasswordInputs({ ...passwordInputs, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    let updatedUser = { ...user };

    if (isEditEnabled) {
      if (passwordInputs.currentPassword !== user.password) {
        setErrorMessage('Current Password is Incorrect');
        return;
      }

      if (passwordInputs.newPassword !== passwordInputs.confirmPassword) {
        setErrorMessage('New Password & Confirm Password do not match');
        return;
      }

      updatedUser.password = passwordInputs.newPassword;
    }

    localStorage.setItem('currentUser', JSON.stringify(updatedUser));

    let users = JSON.parse(localStorage.getItem('users'));

    let newUsers = users.map((u) => {
      if (u.email === updatedUser.email) {
        return updatedUser;
      }
    });

    localStorage.setItem('users', JSON.stringify(newUsers));

    alert('Profile Updated Successfully!!');

    setErrorMessage('');
    setIsEditEnabled(false);
    setPasswordInputs({
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    });
  }

  return (
    <div className="flex flex-col justify-center">

      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2>Profile</h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form action="" className="space-y-6" onSubmit={handleSubmit}>
          {errorMessage && (
            <div className="text-red-500 text-sm font-medium text-center bg-red-50 p-2 rounded">
              {errorMessage}
            </div>
          )}
          <div className="flex justify-between">
            <div className="sm:col-span-3">
              <label
                htmlFor="firstName"
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
                htmlFor="lastName"
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
            <button
              type="button"
              onClick={handleEditPassword}
              className="font-semibold text-indigo-400 hover:text-indigo-300"
            >
              {'Edit Password'}
            </button>
          </div>
          {isEditEnabled ? (
            <div>
              <label
                htmlFor="currentPassword"
                className="block text-sm/6 font-medium text-black-100 text-left"
              >
                Current Password
                <input
                  type="password"
                  id=""
                  name="currentPassword"
                  value={passwordInputs.currentPassword}
                  onChange={handlePasswordChange}
                  required
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base  outline-1 -outline-offset-1 outline-black/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
              </label>
              <label
                htmlFor="newPassword"
                className="block text-sm/6 font-medium text-black-100 text-left"
              >
                New Password
                <input
                  type="password"
                  id=""
                  name="newPassword"
                  value={passwordInputs.newPassword}
                  onChange={handlePasswordChange}
                  required
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base  outline-1 -outline-offset-1 outline-black/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
              </label>
              <label
                htmlFor="confirmPassword"
                className="block text-sm/6 font-medium text-black-100 text-left"
              >
                Confirm Password
                <input
                  type="password"
                  id=""
                  name="confirmPassword"
                  value={passwordInputs.confirmPassword}
                  onChange={handlePasswordChange}
                  required
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
