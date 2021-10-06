import Documento from './Documento';
import { useState } from 'react';
import { styled, Box } from '@mui/system';
import ModalUnstyled from '@mui/core/ModalUnstyled';

const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled('div')`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const style = {
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  p: 2,
  px: 4,
  pb: 3,
};

const Modal = ({ isOpen, setIsOpen, empresa }) => {
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  /**
  return (
    <StyledModal
      aria-labelledby='unstyled-modal-title'
      aria-describedby='unstyled-modal-description'
      open={isOpen}
      onClose={handleClose}
      BackdropComponent={Backdrop}
    >
      <Box sx={style}>
        <h2 id='unstyled-modal-title'>Text in a modal</h2>
        <p id='unstyled-modal-description'>Aliquid amet deserunt earum!</p>
      </Box>
    </StyledModal>
  );
  */
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
          <div className='lg:text-4xl text-2xl font-bold lg:pb-6 pb-2 text-center'>
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
