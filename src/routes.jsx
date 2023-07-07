import { Route, Routes } from 'react-router-dom';
import Main from './pages/main/main';

function AppRoutes({ loading }) {
  return (
    <Routes>
      <Route path="/" element={<Main loading={loading} />} />
    </Routes>
  );
}

export default AppRoutes;
