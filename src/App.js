import logo from './logomascotas.png';
import './App.css';
import NavBar from'./components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemList from './components/ItemList/ItemList';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Item from './components/Item/Item';
import ItemDetail from './components/ItemDetail/ItemDetail';
import CartContainer from './components/Cart/CartContainer';
import { CartProvider} from '../src/context/CartContext'

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
      <>
      <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/categoria/:tipoProducto' element={<ItemListContainer/>}/>
          <Route path='/item/:alimentoId' element={<ItemDetailContainer/>}/> 
          <Route path='/cart' element={<CartContainer/>}/>     
          <Route path='*' element={<ItemListContainer />}/>     
                  
            
                
        </Routes>
    
      </>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;