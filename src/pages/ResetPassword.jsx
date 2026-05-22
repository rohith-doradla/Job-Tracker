import React from 'react';

import { Link } from 'react-router-dom';

function ResetPassword() {
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 ">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2>Reset Password</h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form action="" className="space-y-6">
          <label
            htmlFor="newPassword"
            className="block text-sm/6 font-medium text-black-100 text-left"
          >
            New Password
            <input
              type="password"
              placeholder="Enter New Password"
              name="newPassword"
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
              placeholder="Enter Confirm Password"
              name="confirmPassword"
              required
              className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base  outline-1 -outline-offset-1 outline-black/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
            />
          </label>
          <div>
            <p className="mt-10 text-center text-sm/6 text-gray-250">
              Go back to
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
              Reset Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;
