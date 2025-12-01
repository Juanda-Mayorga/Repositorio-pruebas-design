import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { MainLayout } from './platform/design-system/templates/MainLayout';
import { SubscriptionPage } from './platform/pages/SubscriptionPage';
import { ProfilePage } from './platform/pages/ProfilePage';
import { ResourcesPage } from './web/pages/ResourcesPage';
import { LandingPage } from './web/pages/LandingPage';
import { ContactPage } from './web/pages/ContactPage';
import { ThemeProvider } from './platform/design-system/theme/ThemeContext';
import { WebThemeProvider } from './web/design-system/WebThemeContext';

function App() {
  return (
    <ThemeProvider>
      <CssBaseline />
      <Router>
        <Routes>
          {/* Default redirect */}
          <Route path="/" element={<Navigate to="/landing" replace />} />

          {/* Website routes - no MainLayout (no Sidebar/Header) */}
          <Route path="/landing" element={<WebThemeProvider><LandingPage /></WebThemeProvider>} />
          <Route path="/resources" element={<WebThemeProvider><ResourcesPage /></WebThemeProvider>} />
          <Route path="/contact" element={<WebThemeProvider><ContactPage /></WebThemeProvider>} />

          {/* Platform routes - wrapped with MainLayout (Sidebar + Header) */}
          <Route path="/subscription" element={<MainLayout><SubscriptionPage /></MainLayout>} />
          <Route path="/profile" element={<MainLayout><ProfilePage /></MainLayout>} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
