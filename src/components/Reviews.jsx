import React from 'react'

const Reviews = () => {
  return (
<section className="max-w-7xl mx-auto p-10">
  <h2 className="text-3xl text-center mb-10">Nossos clientes</h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {[
      { nome: "Ana Silva", profissao: "Engenheira Agrônoma", foto: "https://randomuser.me/api/portraits/women/21.jpg" },
      { nome: "Carlos Souza", profissao: "Veterinário", foto: "https://randomuser.me/api/portraits/men/22.jpg" },
      { nome: "Fernanda Lima", profissao: "Engenheira Agrônoma", foto: "https://randomuser.me/api/portraits/women/23.jpg" },
      { nome: "João Pedro", profissao: "Técnico Agrícola", foto: "https://randomuser.me/api/portraits/men/24.jpg" },
      { nome: "Mariana Costa", profissao: "Administradora Rural", foto: "https://randomuser.me/api/portraits/women/25.jpg" },
      { nome: "Lucas Almeida", profissao: "Operador de Máquinas", foto: "https://randomuser.me/api/portraits/men/26.jpg" },

    ].map((pessoa, index) => (
      <div key={index} className="border border-gray-300 rounded-xl p-6 shadow-md flex flex-col items-center space-y-4">
        <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ratione aperiam dicta reiciendis et possimus recusandae debitis. 
            Neque est, ea tempore quod excepturi nesciunt error reiciendis sit earum. Blanditiis, accusantium.</p>
        <div className="flex items-center space-x-4">
          <img 
            src={pessoa.foto} 
            alt={pessoa.nome} 
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <p className="font-medium">{pessoa.nome}</p>
            <p className="text-sm text-gray-500">{pessoa.profissao}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>
  )
}

export default Reviews
