import './App.css';
import Navigation from './components/navigation/Navigation';

import { Routes, Route, Navigate } from "react-router-dom";

import Product from './components/product/Product';
import RnD from './components/rnd/RnD';
import Software from './components/software/Software';
import Manuals from './components/manuals/Manuals';
import Home from './components/home/Home';
import NoMatch from './components/nomatch/NoMatch';
import Partners from './components/partners/Partners';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route path="/*" element={<Navigate to="/404/" replace />} />
        <Route path="/404/" element={ <NoMatch /> } />
        <Route path='/home/' index element={<Home />} />
        <Route path="/product/" element={<Product />} />
        <Route path="/rnd/" element={<RnD />} />
        <Route path="/" element={<Navigate to="/home/" replace />} />
        <Route path="/software/" element={<Software />} />
        <Route path="/manuals/" element={<Manuals />} />
        <Route path="/partners/" element={<Partners />} />
      </Route>
    </Routes >
  );
}

export default App;
