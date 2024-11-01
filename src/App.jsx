import './App.css'
import NavbarComponent from './components/NavbarComponent'
import ItemListContainer from './components/ItemListContainer'

function App(){

  return (
    <div>
      <NavbarComponent/>
      <ItemListContainer greeting='Welcome to LevelUP Store'/>
    </div>
  )

}

export default App
