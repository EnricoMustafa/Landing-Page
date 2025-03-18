import React from 'react'
import Button from './Button'
import Servico1 from '../assets/Servico1.png'
import Drone from '../assets/Drone.png'
import Obra from '../assets/Obra.png'

const Servicos = () => {
  return (
<section className='max-w-7xl mx-auto border-b-2'>
    <div className='my-20'>
        <h2 className='text-5xl  text-center'>Construa seu sonho</h2>
    </div>

    {/* Primeiro bloco */}
    <div className='flex justify-between items-center m-auto space-x-8 mb-8'>
        <img className='rounded-2xl' src={Servico1} width={700} alt="Imagem 1" />
        <div className='flex flex-col items-center'>
            <h1 className='text-5xl text-center'>Analise de terreno</h1>
            <p className='p-9 text-justify'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore nulla consequatur dolorem, sunt saepe illum,
                vel laborum voluptatibus delectus officia veritatis dicta eius, exercitationem aut placeat rem quam hic accusantium.
            </p>
            <Button className="mt-4"/>
        </div>
    </div>

    {/* Segundo bloco */}
    <div className='flex justify-between items-center m-auto space-x-8 mb-8'>
        <div className='flex flex-col items-center'>
            <h1 className='text-5xl text-center'>Projetos Arquitetônicos</h1>
            <p className='p-9 text-justify'>
                Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et 
                magnis dis parturient montes, nascetur ridiculus mus. 
                Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                magnis dis parturient montes, nascetur ridiculus mus. 
                Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                magnis dis parturient montes, nascetur ridiculus mus. 
                Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            </p>
            <Button className="mt-4"/>
        </div>
        <img className='rounded-2xl' src={Drone} width={700} alt="Imagem 2" />
    </div>

    {/* Terceiro bloco */}
    <div className='flex justify-between items-center m-auto space-x-8 mb-16'>
        <img className='rounded-2xl' src={Obra} width={700} alt="Imagem 3" />
        <div className='flex flex-col items-center'>
            <h1 className='text-5xl text-center'>Execução de Obras</h1>
            <p className='p-9 text-justify'>
                Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. 
                Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
                Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. 
                Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
                Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. 
                Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
            </p>
            <Button className="mt-4"/>
        </div>
    </div>
</section>

  )
}

export default Servicos
