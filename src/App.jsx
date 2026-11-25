import './App.css';
import Navigation from './components/navigation/Navigation';
import ErrorBoundary from './components/ErrorBoundary';

import { Route, Navigate, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router";

import Product from './components/product/Product';
import RnD from './components/rnd/RnD';
import RnDDetail from './components/rnd/RnDDetail';
import Home from './components/home/Home';
import NoMatch from './components/nomatch/NoMatch';
import Partners from './components/partners/Partners';
import MobileCda from './components/mobilecda/MobileCda';
import MobileCdaPrivacyPolicy from './components/privacy/MobileCdaPrivacyPolicy';

let router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<Navigation />}>
    <Route path="*" element={<Navigate to="/404" replace />} />
    <Route path="/404" element={<NoMatch />} />
    <Route index element={<Home />} />
    <Route path="/product" element={<Navigate to="/device" replace />} />
    <Route path="/device" element={<Product />} />
    <Route path="/rnd" element={<RnD />} />
    <Route path="/rnd/:slug" element={<RnDDetail />} />
    <Route path="/partners" element={<Partners />} />
    <Route path="/mobilecda" element={<MobileCda />} />
    <Route path="/mobilecda/privacy-policy" element={<MobileCdaPrivacyPolicy />} />
  </Route>))

export default function App() {
  return (
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  );
}
