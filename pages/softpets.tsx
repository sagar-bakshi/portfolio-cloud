import Image from "next/image";
import React from "react";

import SoftpetsImg from "../public/assets/projects/softpets.png";

import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const softpets = () => {
  return (
    <div className="w-full">
      <div className="w-full h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover "
          alt="/"
          src={SoftpetsImg}
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Softpets</h2>
          <h3>ReactJS / Styled-Components / NodeJS / Express / PostgreSQL</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Softpets</p>
          <h2 className="py-2">Overview</h2>
          <p>
            O projeto trata-se de um aplicativo para listar, visualizar, criar,
            editar, excluir animais de estimação de uma petshop. Desenvolvido
            com a seguinte stack: Font-end: Vite + ReactJS + TypeScript, Netlify
            (para fazer o deploy do front-end) Back-end: NodeJS + ExpressJS +
            TypeScript + Heroku (para fazer o deploy do back-end) Database:
            PostgreSQL + ElephantSQL (para tornar o DB online e acessível pelo
            back-end).
          </p>
          <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          <button className="px-8 py-2 mt-4">Code</button>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Tecnologias</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                ReactJS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Styled-Components
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                TypeScript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                NodeJS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                ExpressJS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                TypeORM
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                PostgreSQL
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Voltar</p>
        </Link>
      </div>
    </div>
  );
};

export default softpets;
