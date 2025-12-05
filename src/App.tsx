import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { MainLayout } from './platform/design-system/templates/MainLayout';
import { SubscriptionPage } from './platform/pages/SubscriptionPage';
import { ProfilePage } from './platform/pages/ProfilePage';
import { ResourcesPage } from './web/pages/ResourcesPage';
import { LandingPage } from './web/pages/LandingPage';
import { ContactPage } from './web/pages/ContactPage';
import { ContactSalesPage } from './web/pages/ContactSalesPage';
import { ContactSalesSubmittingPage } from './web/pages/ContactSalesSubmittingPage';
import { ContactSalesSuccessPage } from './web/pages/ContactSalesSuccessPage';
import { ProductPage } from './web/pages/ProductPage';
import { CloudServicesPage } from './web/pages/CloudServicesPage';
import { SupportPage } from './web/pages/SupportPage';
import { ThemeProvider } from './platform/design-system/theme/ThemeContext';
import { WebThemeProvider } from './web/design-system/WebThemeContext';

import { AnimatePresence } from 'framer-motion';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Default redirect */}
        <Route path="/" element={<Navigate to="/landing" replace />} />

        {/* Website routes - no MainLayout (no Sidebar/Header) */}
        <Route path="/landing" element={<WebThemeProvider><LandingPage /></WebThemeProvider>} />
        <Route path="/resources" element={<WebThemeProvider><ResourcesPage /></WebThemeProvider>} />
        <Route path="/contact" element={<WebThemeProvider><ContactPage /></WebThemeProvider>} />
        <Route path="/contact-sales" element={<WebThemeProvider><ContactSalesPage /></WebThemeProvider>} />
        <Route path="/contact-sales/submitting" element={<WebThemeProvider><ContactSalesSubmittingPage /></WebThemeProvider>} />
        <Route path="/contact-sales/success" element={<WebThemeProvider><ContactSalesSuccessPage /></WebThemeProvider>} />
        <Route path="/product" element={<WebThemeProvider><ProductPage /></WebThemeProvider>} />
        <Route path="/cloud-services" element={<WebThemeProvider><CloudServicesPage /></WebThemeProvider>} />
        <Route path="/support" element={<WebThemeProvider><SupportPage /></WebThemeProvider>} />

        {/* Platform routes - wrapped with MainLayout (Sidebar + Header) */}
        <Route path="/subscription" element={<MainLayout><SubscriptionPage /></MainLayout>} />
        <Route path="/profile" element={<MainLayout><ProfilePage /></MainLayout>} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <ThemeProvider>
      <CssBaseline />
      <Router>
        <AnimatedRoutes />
      </Router>
    </ThemeProvider>
  );
}

export default App;
