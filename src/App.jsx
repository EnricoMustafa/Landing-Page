import React from 'react'
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Servicos from './components/Servicos'
const App = () => {
  return (
    <main className="overflow-x-hidden antialiased text-neutral-800">
        <Navbar/>
        <Banner/>
        <Servicos/>
    </main>
  )
}

export default App;
