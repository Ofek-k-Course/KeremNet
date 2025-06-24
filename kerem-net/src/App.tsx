import React from 'react';
import './App.css';
import { HomePage } from './Pages/HomePage/HomePage';
import SideBar from './Components/applicationLayout/SideBar/SideBar';

function App() {
  return (
    <div className="App">
      <SideBar></SideBar>
      <HomePage></HomePage>
    </div>
  );
}
export default App;
