import './App.css'
import NavbarComponent from './components/NavbarComponent'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App(){



  return (
    <BrowserRouter>
    <NavbarComponent/>
    <Routes>
      <Route path='/' element={<ItemListContainer greeting='Welcome to LevelUP Store'/>} />
      <Route path='/category/:categoryId' element={<ItemListContainer greeting='Welcome to LevelUP Store'/>} />
      <Route path='/item/:id' element={<ItemDetailContainer/>}/>
    </Routes>
      
    </BrowserRouter>
  )

}

export default App
