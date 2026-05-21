import React from 'react';

import { useState, useEffect } from 'react';

function ProfilePage() {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

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

  function handleSubmit(e) {
    e.preventDefault();

    localStorage.setItem(JSON.stringify('',));
  }

  return (
    <>
      <h2>Profile</h2>
      <form action="">
        <label htmlFor="first-name">
          First Name
          <input
            type="text"
            placeholder=""
            name="firstName"
            value={user.firstName}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="last-name">
          Last Name
          <input
            type="text"
            placeholder=""
            name="lastName"
            value={user.lastName}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="email">
          Email
          <input type="email" name="email" value={user.email} disabled />
        </label>
        <label htmlFor="old-password">
          Old Password
          <input type="password" id="" name="old-passowrd" />
        </label>
        <label htmlFor="new-password">
          New Password
          <input type="password" id="" name="new-password" />
        </label>
        <label htmlFor="confirm-password">
          Confirm Password
          <input type="password" id="" name="confirm-password" />
        </label>
        <input type="submit" id="" value="Save Changes" />
      </form>
    </>
  );
}

export default ProfilePage;
