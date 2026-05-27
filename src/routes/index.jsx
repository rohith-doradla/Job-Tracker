import { createBrowserRouter } from 'react-router-dom';

import HomePage from '../pages/HomePage.jsx';
import RegisterPage from '../pages/RegisterPage.jsx';
import LoginPage from '../pages/LoginPage.jsx';
import ForgotPassword from '../pages/ForgotPassword.jsx';
import ResetPassword from '../pages/ResetPassword.jsx';
import MainLayout from '../pages/MainLayout/MainLayout.jsx';
import DashboardPage from '../pages/DashboardPage.jsx';
import BoardsPage from '../pages/BoardsPage.jsx';
import BoardsDetailPage from '../pages/BoardsDetailPage.jsx';
import ProfilePage from '../pages/ProfilePage.jsx';
import ErrorPage from '../pages/ErrorPage.jsx';

export const router = createBrowserRouter([
  { path: '/home', element: <HomePage /> },

  { path: '/register', element: <RegisterPage /> },
  { path: '/login', element: <LoginPage /> },
  { path: '/forgot-password', element: <ForgotPassword /> },
  { path: '/reset-password', element: <ResetPassword /> },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '/', element: <DashboardPage /> },
      { path: 'boards', element: <BoardsPage /> },
      { path: 'boards/:id', element: <BoardsDetailPage /> },
      { path: 'profile', element: <ProfilePage /> },
    ],
  },

  { path: '*', element: <ErrorPage /> },
]);
