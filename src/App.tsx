import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AnnouncementBar from './components/AnnouncementBar';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import LandingPage from './pages/services/LandingPage';
import FrontendDevelopment from './pages/services/FrontendDevelopment';
import BackendDevelopment from './pages/services/BackendDevelopment';
import ShopifyThemeCustomize from './pages/services/ShopifyThemeCustomize';
import ShopifyLiquidDevelopment from './pages/services/ShopifyLiquidDevelopment';
import EcommerceServices from './pages/services/EcommerceServices';
import Portfolio from './pages/Portfolio';
import Testimonials from './pages/Testimonials';
import RequestQuote from './pages/RequestQuote';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <AnnouncementBar />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/landing-page" element={<LandingPage />} />
          <Route path="/services/frontend-development" element={<FrontendDevelopment />} />
          <Route path="/services/backend-development" element={<BackendDevelopment />} />
          <Route path="/services/shopify-theme-customize" element={<ShopifyThemeCustomize />} />
          <Route path="/services/shopify-liquid-development" element={<ShopifyLiquidDevelopment />} />
          <Route path="/services/ecommerce-services" element={<EcommerceServices />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/request-quote" element={<RequestQuote />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;