import logo from './logo.svg';
import './App.css';


import React from 'react'
import TableHeader from './components/TableHeader'
import MainTable from './components/MainTable'
import './components/Main.css';
function App() {
  return (
    <div className='Main'>
            <div className='Main-header'>
                <p className='active'>Main Tab</p>
                <p>Archieved</p>
            </div>

         <TableHeader/>
         <MainTable/>
    </div>
  )
}

export default App;