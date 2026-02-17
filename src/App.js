import './App.css';
import Navigation from './components/navigation/Navigation';

import { Route, Navigate, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";

import Product from './components/product/Product';
import RnD from './components/rnd/RnD';
import RnDDetail from './components/rnd/RnDDetail';
import Software from './components/software/Software';
import Manuals from './components/manuals/Manuals';
import Home from './components/home/Home';
import NoMatch from './components/nomatch/NoMatch';
import Partners from './components/partners/Partners';

let router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<Navigation />}>
    <Route path="*" element={<Navigate to="/404" replace />} />
    <Route path="/404" element={<NoMatch />} />
    <Route index element={<Home />} />
    <Route path="/product" element={<Navigate to="/device" replace />} />
    <Route path="/device" element={<Product />} />
    <Route path="/rnd" element={<RnD />} />
    <Route path="/rnd/:slug" element={<RnDDetail />} />
    <Route path="/software" element={<Software />} />
    <Route path="/manuals" element={<Manuals />} />
    <Route path="/partners" element={<Partners />} />
  </Route>))

export default function App() {
  return <RouterProvider router={router} />;
}
