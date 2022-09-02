import logo from './logomascotas.png';
import './App.css';
import NavBar from'./components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemList from './components/ItemList/ItemList';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <NavBar></NavBar>
       
      </header>
      <body>
      <ItemListContainer>
        
      </ItemListContainer>
      <ItemList>

      </ItemList>
      
      <ItemDetailContainer/>
      </body>
    </div>
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
