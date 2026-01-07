import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline'
import { MainLayout } from './platform/design-system/templates/MainLayout'
import { SubscriptionPage } from './platform/pages/SubscriptionPage'
import { ProfilePage } from './platform/pages/ProfilePage'
import { ResourcesPage } from './web/pages/ResourcesPage'
import { LandingPage } from './web/pages/LandingPage'
import { ContactPage } from './web/pages/ContactPage'
import { ContactSalesPage } from './web/pages/ContactSalesPage'
import { ContactSalesSubmittingPage } from './web/pages/ContactSalesSubmittingPage'
import { ContactSalesSuccessPage } from './web/pages/ContactSalesSuccessPage'
import { ProductPage } from './web/pages/ProductPage'
import { CloudServicesPage } from './web/pages/CloudServicesPage'
import { SupportPage } from './web/pages/SupportPage'
import { PricingPage } from './web/pages/PricingPage'
import { ThemeProvider } from './platform/design-system/theme/ThemeContext'

import { AnimatePresence } from 'framer-motion'
import { WebThemeProvider } from './web/design-system/WebThemeContext'

const AnimatedRoutes = () => {
	const location = useLocation()

	return (
		<WebThemeProvider>
			<AnimatePresence mode='wait'>
				<Routes location={location} key={location.pathname}>
					{/* Default redirect */}
					<Route path='/' element={<Navigate to='/landing' replace />} />

					{/* Website routes - no MainLayout (no Sidebar/Header) */}
					<Route path='/landing' element={<LandingPage />} />
					<Route path='/resources' element={<ResourcesPage />} />
					<Route path='/contact' element={<ContactPage />} />
					<Route path='/contact-sales' element={<ContactSalesPage />} />
					<Route path='/contact-sales/submitting' element={<ContactSalesSubmittingPage />} />
					<Route path='/contact-sales/success' element={<ContactSalesSuccessPage />} />
					<Route path='/product' element={<ProductPage />} />
					<Route path='/cloud-services' element={<CloudServicesPage />} />
					<Route path='/support' element={<SupportPage />} />
					<Route path='/pricing' element={<PricingPage />} />

					{/* Platform routes - wrapped with MainLayout (Sidebar + Header) */}
					<Route
						path='/subscription'
						element={
							<MainLayout>
								<SubscriptionPage />
							</MainLayout>
						}
					/>
					<Route
						path='/profile'
						element={
							<MainLayout>
								<ProfilePage />
							</MainLayout>
						}
					/>
				</Routes>
			</AnimatePresence>
		</WebThemeProvider>
	)
}

function App() {
	return (
		<ThemeProvider>
			<CssBaseline />
			<Router>
				<AnimatedRoutes />
			</Router>
		</ThemeProvider>
	)
}

export default App
