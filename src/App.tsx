import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from './design-system/theme/theme';
import { MainLayout } from './design-system/templates/MainLayout';
import { SubscriptionPage } from './pages/SubscriptionPage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MainLayout>
        <SubscriptionPage />
      </MainLayout>
    </ThemeProvider>
  );
}

export default App;
