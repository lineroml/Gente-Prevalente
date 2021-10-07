import NextImage from 'next/image';

const Documento = ({ label, link }) => {
  let name = label.split(' ')[0].concat('...');
  return (
    <div className='flex lg:w-4/5 w-full justify-center items-center '>
      <div className='lg:w-1/2 w-3/5 lg:text-2xl text-lg flex self-start'>{label}</div>
      <div className='w-2/5 flex-col text-right'>
        <a href={link} download>
          <NextImage src='/img/icons-button/pdf.svg' width='30' height='40'></NextImage>
          <div className='text-pdfdesc'>{name}</div>
        </a>
      </div>
    </div>
  );
};

export default Documento;
