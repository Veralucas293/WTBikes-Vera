import React from 'react';
import './App.css';
import Title from './components/Title/title';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
            <Title />
<BrowserRouter>
      <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
          <Route path='/detail/:productId' element={<ItemDetailContainer/>}/>
        </Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
