import logo from './logomascotas.png';
import './App.css';
import NavBar from'./components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemList from './components/ItemList/ItemList';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Item from './components/Item/Item';
import ItemDetail from './components/ItemDetail/ItemDetail';


function App() {
  return (
    <BrowserRouter>
    <>
    
      
       <NavBar />
      <Routes>
        <Route path='/home' element={<Item/>}/>
        <Route path='/item/:id' element={<ItemDetail/>}/> 
        <Route path='*' element={<Item />}/>     
                
            
              

              
      </Routes>
  
   
    </>
    </BrowserRouter>
  );
}

export default App;
/* 
<img src={logo} className="App-logo" alt="logo" />
<p>
  Edit <code>src/App.js</code> and save to reload.
</p>
<a
  className="App-link"
  href="https://reactjs.org"
  target="_blank"
  rel="noopener noreferrer"
>
  Learn React
</a> */
