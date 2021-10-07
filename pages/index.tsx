import Card from 'components/card';
import { useState } from 'react';

const Home = () => {
  return (
    <div className='lg:h-full h-auto bg-generalBg w-full flex items-center justify-center'>
      <div className='sm:w-3/5 lg:py-0 py-12 w-5/6 lg:h-4/6 h-5/6 lg:gap-10 gap-12 grid lg:grid-cols-2 flex-col'>
        <Card
          ruta='/solicitudes-empresas'
          icono='solicitudes.svg'
          titulo='Solicitudes de creación de empresas'
          minitext='2 solicitudes por atender'
        />
        <Card
          ruta=''
          icono='indicadores.svg'
          titulo='Indicadores'
          minitext='Visitado por última vez: 31/01/2020'
        />
        <Card
          ruta=''
          icono='empleados.svg'
          titulo='Inscripción de empleados en empresas'
          minitext='3 usuarios sin empresa registrada'
        />
        <Card
          ruta=''
          icono='usuarios.svg'
          titulo='Gestión de usuarios'
          minitext='532 usuarios activos en la plataforma'
        />
      </div>
    </div>
  );
};

export default Home;
