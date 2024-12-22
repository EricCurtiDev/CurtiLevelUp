import './App.css'
import NavbarComponent from './components/NavbarComponent'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Checkout from './components/Checkout'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext'
import CartWidget from './components/CartWidget';

function App(){
  return (
    <CartProvider>
      <BrowserRouter>
        <NavbarComponent />
        <CartWidget />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting='Welcome to LevelUP Store'/>} />
          <Route path='/category/:categoryId' element={<ItemListContainer greeting='Welcome to LevelUP Store'/>} />
          <Route path='/item/:id' element={<ItemDetailContainer/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
