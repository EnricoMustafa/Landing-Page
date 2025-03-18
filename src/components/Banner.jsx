import React from 'react'
import logo from '../assets/Logo.png'
import HomemCampo from '../assets/HomemCampo.png'
const Banner = () => {
  return (
    <section className='max-w-7xl mx-auto border-b-2'>
        <div className='flex flex-col items-center my-20'>
            <img src={logo} width={600} alt="Logo Green Life"/>
            <h2 className='text-lg tracking-tight'>Construa seu sonho e tenha uma Green Life</h2>
        </div>
        <img src={HomemCampo}  width={900} className='w-full h=[65hv] object-cover rounded-2xl p-2' alt="Homem no campo" />
    </section>
  )
}

export default Banner
