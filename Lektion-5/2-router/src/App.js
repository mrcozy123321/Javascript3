import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import About from './views/About';
import Shop from './views/Shop';
import ProductDetails from './views/ProductDetails';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <div className='container'>
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/about' element={ <About /> } />
          <Route path='/Shop' element={ <Shop /> } />
          <Route path='/shop/:id' element={ <ProductDetails /> } />
          <Route path='*' element={
            <div>
              <h2>404, path not found</h2>
            </div>
          } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
