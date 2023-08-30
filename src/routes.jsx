import { Route, Routes } from 'react-router-dom';
import Main from './pages/main/main';
import LoginPage from './pages/login/login';
import RegisterPage from './pages/register/register';
import NotFound from './pages/not-found/not-found.jsx';
import PlaylistPage from './pages/playlist-page/playlist-page.jsx';
import Favorites from './pages/favorites/favorites.jsx';
import ProtectedRoute from './components/protected-route/protected-route';

function AppRoutes({ loading, auth, errorMessage, registerUser, setAuth }) {
  return (
    <Routes>
      <Route element={<ProtectedRoute isAllowed={auth} />}>
        <Route
          path="/"
          element={<Main loading={loading} errorMessage={errorMessage} />}
        />
        <Route path="/category/:id" element={<PlaylistPage />} />
        <Route path="/favorites" element={<Favorites />} />
      </Route>

      {/* <Route
        path="/react-music-player"
        element={<LoginPage setAuth={setAuth} />}
      /> */}
      <Route path="/login" element={<LoginPage setAuth={setAuth} />} />
      <Route
        path="/register"
        element={<RegisterPage />}
        registerUser={registerUser}
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
