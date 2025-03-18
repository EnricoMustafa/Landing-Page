import React from 'react'
import { Phone, Mail, MapPin } from "lucide-react";
import Button from './Button';

function ContactUs() {
  return (
    <section className="">
        <h2 className='text-5xl  text-center mb-8'>Fale conosco</h2>
        <p className='text-lg tracking-tight text-center my-4'>Ficou com alguma duvida? Entre em contato com a gente!</p>
        <div className="mx-auto p-10 flex justify-around">
      <div className="flex items-start space-x-4">
        <Phone className="w-6 h-6 mt-1 text-gray-700" />
        <div>
          <p className="font-semibold">Telefone</p>
          <p className="text-gray-600">(123) 456-7890</p>
        </div>
      </div>

      <div className="flex items-start space-x-4">
        <Mail className="w-6 h-6 mt-1 text-gray-700" />
        <div>
          <p className="font-semibold">Email</p>
          <p className="text-gray-600">contato@empresa.com</p>
        </div>
      </div>

      <div className="flex items-start space-x-4">
        <MapPin className="w-6 h-6 mt-1 text-gray-700" />
        <div>
          <p className="font-semibold">Endereço</p>
          <p className="text-gray-600">Rua das Palmeiras, 123 - São Paulo, SP</p>
        </div>
      </div>
      </div>
    </section>
  )
}

export default ContactUs
