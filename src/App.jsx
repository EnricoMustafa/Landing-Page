import React from 'react'
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Services from './components/Services';
import About from './components/About';
import Reviews from './components/Reviews';

const App = () => {
  return (
    <main className="overflow-x-hidden antialiased text-neutral-800">
        <Navbar/>
        <Banner/>
        <Services/>
        <About/>
        <Reviews/>
    </main>
  )
}

export default App;
