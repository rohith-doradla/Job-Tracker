import React from 'react';

import Sidebar from '../../components/Sidebar';

import { Outlet } from 'react-router-dom';

function MainLayout() {
  return (
    <div className="flex h-screen">
      <Sidebar />

      <main className="flex-1 p-6 overflow-y-auto bg-gray-100">
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
