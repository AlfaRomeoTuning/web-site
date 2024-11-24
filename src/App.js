import './App.css';
import Navigation from './components/navigation/Navigation';

import { Routes, Route } from "react-router-dom";

import Product from './components/product/Product';
import RnD from './components/rnd/RnD';
import Software from './components/software/Software';
import Manuals from './components/manuals/Manuals';
import Home from './components/home/Home';
import NoMatch from './components/nomatch/NoMatch';
import { Partners } from './components/partners/Partners';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/rnd" element={<RnD />} />
        <Route path="/software" element={<Software />} />
        <Route path="/manuals" element={<Manuals />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes >
  );
}

export default App;
