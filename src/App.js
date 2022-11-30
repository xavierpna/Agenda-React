import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import AddData from './components/AddData';
import ShowData from './components/ShowData';
import { Component } from 'react';

function App()
{
  return (
<BrowserRouter>
<Routes>
  <Route path='/' element={<ShowData></ShowData>}></Route>
  <Route path='/create' element={<AddData></AddData>}></Route>
</Routes>
</BrowserRouter>
  )
}

export default App;
