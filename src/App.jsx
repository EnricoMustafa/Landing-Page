import React from 'react'
import Navbar from './components/Navbar';
import Servicos from './components/Servicos';

const App = () => {
  return (
    <main className="overflow-x-hidden antialiased text-neutral-800">
        <Navbar/>
        <Servicos/>
    </main>
  )
}

export default App;
