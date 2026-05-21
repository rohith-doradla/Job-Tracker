import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from './pages/HomePage.jsx';
import RegisterPage from './pages/RegisterPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import ForgotPassword from './pages/ForgotPassword.jsx';
import ResetPassword from './pages/ResetPassword.jsx';
import ProfilePage from './pages/ProfilePage.jsx';
import DashboardPage from './pages/DashboardPage.jsx';
import BoardsPage from './pages/BoardsPage.jsx';
import JobsPage from './pages/JobsPage.jsx';
import ErrorPage from './pages/ErrorPage.jsx';

import './App.css';

const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '/register', element: <RegisterPage /> },
  { path: '/login', element: <LoginPage /> },
  { path: '/forgot-password', element: <ForgotPassword /> },
  { path: '/reset-password', element: <ResetPassword /> },
  { path: '/profile', element: <ProfilePage /> },
  { path: '/dashboard', element: <DashboardPage /> },
  { path: '/boards', element: <BoardsPage /> },
  { path: '/jobs', element: <JobsPage /> },
  { path: '*', element: <ErrorPage /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
