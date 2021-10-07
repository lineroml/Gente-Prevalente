import Documento from './docACargar';

const Modal = ({ isOpen, setIsOpen, empresa }) => {
  const handleClose = () => setIsOpen(false);

  return (
    <div
      className={`${
        isOpen ? 'lg:flex hidden' : 'hidden'
      } fixed bg-bgModal h-full w-full z-10 flex-col items-center justify-center inset-0 `}
    >
      <div className='bg-white w-2/6 h-3/5 rounded-lg shadow-boton flex-col'>
        <div className='flex justify-end w-full h-auto pr-3 text-2xl font-normal cursor-pointer '>
          <div
            onClick={() => {
              handleClose();
            }}
            className='w-6'
          >
            x
          </div>
        </div>
        <div className='flex flex-col h-home items-center gap-6 overflow-y-auto'>
          <div className='lg:text-4xl text-2xl font-bold lg:pb-6 pb-2 text-center bg-white sticky z-20 top-2'>
            Documentos cargados
          </div>
          <Documento label={`RUT ${empresa}`} link='/documentos/archivo1.pdf' />
          <Documento label={`Logo ${empresa}`} link='/documentos/archivo2.pdf' />
          <Documento label={`Acta ${empresa}`} link='/documentos/archivo3.pdf' />
          <Documento label={`Cámara de comercio ${empresa}`} link='/documentos/archivo4.pdf' />
          <Documento label={`Otro documento ${empresa}`} link='/documentos/archivo5.pdf' />
        </div>
      </div>
    </div>
  );
};

export default Modal;
