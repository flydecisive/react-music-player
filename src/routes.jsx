import { Route, Routes } from 'react-router-dom';
import Main from './pages/main/main';
import LoginPage from './pages/login/login';
import RegisterPage from './pages/register/register';
import NotFound from './pages/not-found/not-found';

function AppRoutes({ loading }) {
  return (
    <Routes>
      <Route path="/" element={<Main loading={loading} />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
