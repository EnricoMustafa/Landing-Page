import React from 'react'

function Footer() {
  return (
    <footer className="bg-green-400 py-6 mt-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        <p className="text-sm">&copy; 2024 Green Life. Todos os direitos reservados.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-gray-400 text-sm">Política de Privacidade</a>
          <a href="#" className="hover:text-gray-400 text-sm">Termos de Uso</a>
          <a href="#" className="hover:text-gray-400 text-sm">Contato</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
