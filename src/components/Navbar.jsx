import React, { useState } from "react";
import logo from "../assets/Logo.png";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="border-b-1 border-b-zinc-400">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4">
        <div className="pl-2">
          <a href="#">
            <img src={logo} width={170} height={15} alt="GreenLife Logo" />
          </a>
        </div>
        <ul className="flex justify-end items-center gap-5">
            <li><a className="cursor-pointer hover:underline">Serviços</a></li>
            <li><a className="cursor-pointer hover:underline">Sobre nos</a></li>
            <li><a className="cursor-pointer hover:underline">Nossos clientes</a></li>
            <li><a className="cursor-pointer hover:underline">Fale conosco</a></li>
            <li><Button/></li>
        </ul>
      </div>
    </nav>


  );
};

export default Navbar;
