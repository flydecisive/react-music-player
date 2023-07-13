import { Route, Routes } from 'react-router-dom';
import Main from './pages/main/main';
import LoginPage from './pages/login/login';
import RegisterPage from './pages/register/register';
import NotFound from './pages/not-found/not-found';
import PlaylistPage from './pages/playlist-page/playlist-page';
import Favorites from './pages/favorites/favorites';
import ProtectedRoute from './components/protected-route/protected-route';

function AppRoutes({ loading, auth }) {
  return (
    <Routes>
      <Route element={<ProtectedRoute isAllowed={auth} />}>
        <Route path="/" element={<Main loading={loading} />} />
        <Route path="/category/:id" element={<PlaylistPage />} />
        <Route path="/favorites" element={<Favorites />} />
      </Route>

      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
