import React from 'react'
import Grid from '../assets/GridSobre.png'
function About() {
  return (
    <section className='max-w-7xl mx-auto border-b-2 mt-20'>
        <h2 className='text-5xl text-center tracking-tight mb-12'>Sobre nós</h2>
        <div className='flex justify-center'>
            <img src={Grid} className='w-9/12' alt=""/>
        </div>
        <p className='text-lg lg:text-3x1 font-light text-center
        lg:text-left max-w-5x1 mx-auto mt-8'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi voluptate cum aliquam, ex temporibus quis harum,
            repudiandae tempora ullam officia nesciunt necessitatibus aspernatur explicabo? Voluptas vel natus porro aspernatur modi.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi voluptate cum aliquam, ex temporibus quis harum,
            repudiandae tempora ullam officia nesciunt necessitatibus aspernatur explicabo? Voluptas vel natus porro aspernatur modi.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi voluptate cum aliquam, ex temporibus quis harum,
            repudiandae tempora ullam officia nesciunt necessitatibus aspernatur explicabo? Voluptas vel natus porro aspernatur modi.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi voluptate cum aliquam, ex temporibus quis harum,
            repudiandae tempora ullam officia nesciunt necessitatibus aspernatur explicabo? Voluptas vel natus porro aspernatur modi.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi voluptate cum aliquam, ex temporibus quis harum,
            repudiandae tempora ullam officia nesciunt necessitatibus aspernatur explicabo? Voluptas vel natus porro aspernatur modi.
        </p>

    </section>
  )
}

export default About
