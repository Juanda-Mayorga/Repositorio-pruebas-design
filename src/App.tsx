import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { MainLayout } from './design-system/templates/MainLayout';
import { SubscriptionPage } from './pages/SubscriptionPage';
import { ProfilePage } from './pages/ProfilePage';
import { ThemeProvider } from './design-system/theme/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <CssBaseline />
      <Router>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Navigate to="/subscription" replace />} />
            <Route path="/subscription" element={<SubscriptionPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
        </MainLayout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
