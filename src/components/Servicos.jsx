import React from 'react'
import logo from '../assets/Logo.png'
import Campo from '../assets/CasaCampo.png'
const Servicos = () => {
  return (
    <section className='max-w-7xl mx-auto'>
        <div className='flex flex-col items-center my-20'>
            <img src={logo} width={700} alt="Logo Green Life"/>
            <h2 className='text-lg'>Construa seu sonho e tenha uma Green Life</h2>
        </div>
        <img src={Campo} className='m-auto rounded-2xl' alt="" />
        
    </section>
  )
}

export default Servicos
