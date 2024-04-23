import './App.css';
import {Route, Routes } from 'react-router-dom';
import AllProducts from './Components/AllProducts/AllProducts';
import CreateProd from './Components/CreateProd/CreateProd';
import OneProduct from './Components/OneProduct/OneProduct';
import UpdateProduct from './Components/UpdateProduct/UpdateProduct';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path='/' element={<AllProducts />} /> */}
        <Route path='/products/:id' element={<OneProduct />} />
        <Route path='/products' element={<CreateProd />} />
        <Route path='/products/:id/edit' element={<UpdateProduct />} />
      </Routes>
    </div>
  );
}

export default App;
