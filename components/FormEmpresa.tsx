import NextImage from 'next/image';
import InputEmpresa from './InputEmpresa';
import Boton from './Boton';
import Documento from './Documento';
import Modal from './Modal';
import { useState } from 'react';

const FormEmpresa = ({ empresa, setEmpresas }) => {
  const [modalOn, setModalOn] = useState(false);

  return (
    <div className='animate-fadeIn w-full h-full flex justify-center items-center'>
      <Modal isOpen={modalOn} setIsOpen={setModalOn} empresa={empresa?.nombre} />
      <div className='bg-white lg:mt-0 mt-4 lg:w-1/2 w-4/5 lg:h-form h-full rounded-lg shadow-boton flex flex-col'>
        <div className='h-1/3  flex items-center justify-start gap-x-2'>
          <div className='lg:pt-0 pt-4 flex lg:justify-end justify-center lg:w-7/12 w-full '>
            <NextImage src='/img/logo-prevalent.svg' width='174' height='151'></NextImage>
          </div>
          <div className='lg:flex hidden w-5/12 items-center flex-col gap-y-6'>
            <Boton
              aceptar={true}
              label='Aceptar'
              empresa={empresa}
              isDisabled={empresa?.isApproved}
              setEmpresas={setEmpresas}
            />
            <Boton
              aceptar={false}
              label='Rechazar'
              empresa={empresa}
              isDisabled={!empresa?.isApproved}
              setEmpresas={setEmpresas}
            />
          </div>
        </div>
        <div className='grid lg:grid-cols-2 grid-cols-1 h-3/5 lg:w-4/5 w-4/5 gap-4  self-center items-center lg:pb-0 pb-6 lg:pt-0 pt-10'>
          <InputEmpresa label='Nombre de la empresa' info={empresa?.nombre} />
          <InputEmpresa label='Razón Social' info={empresa?.razonSocial} />
          <InputEmpresa label='Tipo de identificación' info={empresa?.nit} />
          <InputEmpresa label='Identificación' info={empresa?.identificacion} />
          <InputEmpresa label='# de empleados' info={empresa?.numEmpleados} />
          <div
            onClick={() => setModalOn(true)}
            className='cursor-pointer lg:flex hidden h-boton w-boton bg-white shadow-boton rounded-lg'
          >
            <div className='flex'>
              <div className='pt-3 pl-1'>
                <NextImage src='/img/boton-clip.svg' width='30' height='34'></NextImage>
              </div>
              <div className='pl-2 text-lg font-bold self-center'>Ver archivos adjuntos</div>
            </div>
          </div>
          <div className='lg:hidden flex flex-col items-center lg:gap-6 gap-2 lg:pt-0 pt-6'>
            <div className='lg:text-4xl text-2xl font-bold lg:pb-6 pb-2'>Documentos cargados</div>
            <Documento label={`RUT ${empresa?.nombre}`} link='/documentos/archivo1.pdf' />
            <Documento label={`Logo ${empresa?.nombre}`} link='/documentos/archivo2.pdf' />
            <Documento label={`Acta ${empresa?.nombre}`} link='/documentos/archivo3.pdf' />
            <Documento
              label={`Cámara de comercio ${empresa?.nombre}`}
              link='/documentos/archivo4.pdf'
            />
            <Documento
              label={`Otro documento ${empresa?.nombre}`}
              link='/documentos/archivo5.pdf'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormEmpresa;
