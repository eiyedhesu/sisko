import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Cart from './Pages/Cart';
import ProductList from './Pages/ProductList';
import ProductDetail from './Pages/ProductDetail';
import Login from './Pages/Login';
import Register from './Pages/Register';
import CategoryDetail from './Pages/CategoryDetail';
import Category from './Components/Category';
import CategoryList from './Pages/CategoryList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact-us' element={<Contact />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/product-list' element={<ProductList />} />
        <Route path='/product-detail' element={<ProductDetail />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path="/cat/:id" element={<CategoryDetail />} />
        <Route path="/cat" element={<Category />} />
        <Route path="/cat/list" element={<CategoryList />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
