import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dash from './Component/Dash';
import Add from './Component/Add';
import List from './Component/List';
import Edit from './Component/Edit';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Dash /> } />
          <Route path='/add' element={ <Add /> } />
          <Route path='/list' element={ <List /> } />
          <Route path='/edit/:id' element={ <Edit /> } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
